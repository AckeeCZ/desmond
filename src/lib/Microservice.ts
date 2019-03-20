import lodashDefaultsdeep from 'lodash.defaultsdeep';
import { Response } from 'request';
import requestPromise from 'request-promise';
import * as url from 'url';

export interface Logger {
    info: (...msg: any[]) => void;
    error: (...msg: any[]) => void;
}

const stopwatch = {
    // see https://nodejs.org/api/process.html#process_process_hrtime_time for details
    start: () => {
        return process.hrtime() as [number, number];
    },
    stop: (te: [number, number]): number => {
        const t = process.hrtime(te);
        return (t[0] + t[1] * 1e-9) * 1e3;
    },
};

const voidLogger: Logger = {
    info: () => undefined,
    error: () => undefined,
};

/**
 * Microservice provides an API for remote RESTful service.
 *
 * It allows user to utilize either bare REST methods with shared configuration or to wrap custom, more complex methods in the class.
 * @example
 * Basic Rest service usage
 * ```typescript
 * const apiService = new Microservice(
 *      'https://jsonplaceholder.typicode.com',
 *      { json: true },
 *      console, // use any logger or leave empty for disabled logging
 * );
 * apiService.get('/posts');
 * ```
 * @example
 * Custom service methods example
 * ```typescript
 * class PlaceholderService extends Microservice {
 *     constructor() {
 *         super(
 *             'https://jsonplaceholder.typicode.com',
 *             { json: true },
 *             console,
 *         );
 *     }
 *     public getPosts(userId: number) {
 *         return Promise.all([
 *             this.get('/posts'),
 *             this.get(`/users/${userId}/posts`),
 *         ])
 *         .then(rs => rs.map(r => r.body))
 *         .then(([publicPosts, privatePosts]) => ([...publicPosts, ...privatePosts]));
 *     }
 * }
 * const placeholderService = new PlaceholderService();
 * placeholderService.getPosts(user.id);
 * ```
 * @example
 * Using okCodes handler creator
 * ```typescript
 * class CoffeService extends Microservice {
 *      // create a handler and add it to call to force error on other codes than 201
 *      // because in our CoffeService it only makes sense to brew new coffee every time
 *      public brew = () => this.post('/coffee').then(Microservice.okCodes([201]));
 *  }
 * ```
 */
export default class Microservice {
    /**
     * Initialize Microservice on given URL with implicit configuration shared in all service calls.
     * @param baseUrl Base url of the service without path
     * @param defaultOptions Default options for request
     */
    constructor(
        protected baseUrl: string = '/',
        protected defaultOptions: object = {},
        protected logger: Logger = voidLogger
    ) {}

    protected async composeUrl(pathName: string) {
        return url.resolve(this.baseUrl, pathName);
    }

    protected async request(pathName: string, options: any = {}) {
        const uri = await this.composeUrl(pathName);
        return this.makeRequest(uri, options);
    }

    protected async makeRequest(uri: string, options: any = {}) {
        const correlationId = Math.random()
            .toString(36)
            .slice(7);
        const allOptions = lodashDefaultsdeep({}, this.defaultOptions, options, {
            uri,
            resolveWithFullResponse: true,
        });
        // Caution: `this.baseUrl` could be with a path,
        // although the resolved `uri` could be without it - if `pathName` is equal to '/'
        this.logger.info(
            { uri, correlationId, qs: options.qs, body: options.body, headers: options.headers },
            `--> ${this.baseUrl}`
        );
        const tStart = stopwatch.start();
        try {
            const res: Response = await requestPromise(allOptions);
            const millis = stopwatch.stop(tStart);
            // TODO What to log
            //  Optional body logger per call?
            //  Dont log large bodies at all? (and size only instead of contents)
            //  Headers?
            this.logger.info(
                { correlationId, statusCode: res.statusCode, body: res.body, headers: options.headers },
                `<-- ${this.baseUrl} ${res.statusCode} (${Math.round(millis)}ms)`
            );
            return res;
        } catch (error) {
            const millis = stopwatch.stop(tStart);
            this.logger.error(
                { correlationId, error, errorMessage: error.message, headers: options.headers },
                `-->X ${this.baseUrl} (${Math.round(millis)}ms)`
            );
            throw error;
        }
    }

    public get(pathName: string = '/', qs: object = {}, options: object = {}) {
        return this.request(pathName, { ...options, qs, method: 'GET' });
    }

    public put(pathName: string = '/', payload: object = {}, options: object = {}) {
        return this.request(pathName, { ...options, body: payload, method: 'PUT' });
    }

    public patch(pathName: string = '/', payload: object = {}, options: object = {}) {
        return this.request(pathName, { ...options, body: payload, method: 'PATCH' });
    }

    public post(pathName: string = '/', payload: any = {}, options: object = {}) {
        return this.request(pathName, { ...options, body: payload, method: 'POST' });
    }

    public delete(pathName: string = '/', options: object = {}) {
        return this.request(pathName, { ...options, method: 'DELETE' });
    }

    public otherMethod(method: string, pathName: string = '/', payload: object = {}, options: object = {}) {
        return this.request(pathName, { ...options, method, body: payload });
    }

    /**
     * Create a statusCode handler for throwing error on other than specified codes
     *
     * See Microservice @example
     * @static
     * @memberof Microservice
     */
    public static okCodes = (codes: number[]) => (response: Response): Response => {
        if (!response) {
            throw new Error('Unacceptable response: No Response');
        }
        if (!codes.find(x => x === response.statusCode)) {
            throw new Error(`Unacceptable response statusCode: ${response.statusCode} not in ${JSON.stringify(codes)}`);
        }
        return response;
    }
}
