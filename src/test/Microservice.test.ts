import { Microservice } from 'main';
import nock from 'nock';
import { StatusCodeError } from 'request-promise/errors';

const URL = 'http://www.microservice.com';

let infoLogs: any[] = [];
let errorLogs: any[] = [];

const logger = {
    error: (x: any) => (errorLogs = errorLogs.concat(x)),
    info: (x: any) => (infoLogs = infoLogs.concat(x)),
};

const service = new Microservice(
    URL,
    {
        json: true,
    },
    logger
);
/* tslint:disable:max-classes-per-file */
describe('Microservice', () => {
    describe('Basic spec', () => {
        const body = 'Microservice (micro) serves!';
        const status = 200;
        const path = '/about';
        beforeAll(() => {
            nock(URL)
                .get(path)
                .reply(status, body);
        });
        test('Matches status code and body', async () => {
            const res = await service.get(path);
            expect(res.body).toBe(body);
            expect(res.statusCode).toBe(status);
        });
    });

    describe('Expect to fail on status code', () => {
        const body = 'I\'m a teapot';
        const status = 418;
        const path = '/coffee';
        beforeAll(() => {
            nock(URL)
                .get(path)
                .reply(status, body);
        });
        test('Matches status code and body', async () => {
            await expect(service.get(path)).rejects.toBeInstanceOf(StatusCodeError);
        });
    });

    describe('Custom service', () => {
        const coffeeUrl = 'http://delic.io.us';
        const coffeePath = '/coffee';
        const body = 'Here is your hot pot you tot!';
        const status = 201;
        class CoffeeMachine extends Microservice {
            constructor() {
                super(coffeeUrl, { json: true }, logger);
            }
            private static coffeeOkCodes = Microservice.okCodes([201]);
            public brew = () => this.post('/coffee').then(CoffeeMachine.coffeeOkCodes);
        }
        const coffeeMachine = new CoffeeMachine();
        test('Matches status code and body', async () => {
            nock(coffeeUrl)
                .post(coffeePath)
                .reply(status, body);
            const response = await coffeeMachine.brew();
            expect(response.body).toBe(body);
            expect(response.statusCode).toBe(status);
        });
        test('Rejects codes that are not OK', async () => {
            nock(coffeeUrl)
                .post(coffeePath)
                .reply(200, body);
            // Response 200 is not OK. CoffeeMachine accepts as OK only 201. (Because serving existing coffee is forbidden)
            await expect(coffeeMachine.brew()).rejects.toBeInstanceOf(Error);
        });
    });

    describe('CRUD Methods', () => {
        class CrudService extends Microservice {
            constructor() {
                super(URL, { json: true }, logger);
            }
            public c = () => this.post();
            public r = () => this.get();
            public u = () => this.put();
            public d = () => this.delete();
        }
        const crudService = new CrudService();
        const body = {
            c: 'new item',
            d: 'deleted item',
            r: 'read item',
            u: 'updated item',
        };
        test('Matches status code and body', async () => {
            nock(URL)
                .post('/')
                .reply(200, body.c);
            nock(URL)
                .get('/')
                .reply(200, body.r);
            nock(URL)
                .put('/')
                .reply(200, body.u);
            nock(URL)
                .delete('/')
                .reply(200, body.d);

            const responses = await Promise.all([crudService.c(), crudService.r(), crudService.u(), crudService.d()]);
            expect(responses.map(r => r.body)).toEqual([body.c, body.r, body.u, body.d]);
            expect(responses.every(r => r.statusCode === 200)).toBe(true);
        });
    });
});
