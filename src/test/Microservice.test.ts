import Microservice from 'lib/Microservice';
import nock from 'nock';
import { StatusCodeError } from 'request-promise/errors';


const URL = 'http://www.microservice.com';

let infoLogs: any[] = [];
let errorLogs: any[] = [];

const logger = {
    error: ((x: any) => (errorLogs = errorLogs.concat(x))),
    info: ((x: any) => (infoLogs = infoLogs.concat(x))),
};


const service = new Microservice(
    URL,
    {
        json: true,
    },
    logger,
);

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
});
