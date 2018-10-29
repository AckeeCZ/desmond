import defaultsDeep from 'lodash.defaultsdeep';
import { Response } from 'request';
import request from 'request-promise';
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

export default class RestMicroservice {
    constructor(
        protected readonly baseUrl: string = '/',
        protected readonly defaultOptions: object = {},
        protected readonly logger: Logger
    ) { }

    public request(pathName: string, options: any = {}) {
        const uri = url.resolve(this.baseUrl, pathName);
        const correlationId = Math.random().toString(36).slice(7);
        // Caution: `this.baseUrl` could be with a path,
        // although the resolved `uri` could be without it - if `pathName` is equal to '/'
        this.logger.info({ uri, pathName, correlationId, qs: options.qs, body: options.body }, `--> ${this.baseUrl}`);
        const tStart = stopwatch.start();
        return Promise.resolve(request(
            defaultsDeep(
                {},
                this.defaultOptions,
                options,
                {
                    uri,
                    resolveWithFullResponse: true,
                }
            )
        ))
            .then((res: Response) => {
                const millis = stopwatch.stop(tStart);
                // TODO What to log
                //  Optional body logger per call?
                //  Dont log large bodies at all? (and size only instead of contents)
                //  Headers?
                this.logger.info(
                    { correlationId, statusCode: res.statusCode, body: res.body },
                    `<-- ${this.baseUrl} ${res.statusCode} (${Math.round(millis)}ms)`
                );
                return res;
            })
            .catch(error => {
                const millis = stopwatch.stop(tStart);
                this.logger.error({ correlationId, error, message: error.message }, `-->X ${this.baseUrl} (${Math.round(millis)}ms)`);
                throw error;
            }) as Promise<Response>;
    }

    public get(pathName: string, qs: object = {}, options: object = {}) {
        return this.request(pathName, { ...options, qs, method: 'GET' });
    }

    public put(pathName: string, payload: object = {}, options: object = {}) {
        return this.request(pathName, { ...options, body: payload, method: 'PUT' });
    }

    public post(pathName: string, payload: any = {}, options: object = {}) {
        return this.request(pathName, { ...options, body: payload, method: 'POST' });
    }

    public delete(pathName: string, options: object = {}) {
        return this.request(pathName, { ...options, method: 'DELETE' });
    }

    public static okCodes = (codes: number[]) =>
        (response: Response): Response => {
            if (!response) {
                throw new Error(`Unacceptable response: No Response`);
            }
            if (!codes.find(x => (x === response.statusCode))) {
                throw new Error(`Unacceptable response statusCode: ${response.statusCode} not in ${JSON.stringify(codes)}`);
            }
            return response;
        }
}
