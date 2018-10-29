import RestMicroservice from 'lib/RestMicroservice';
import nock from 'nock';


const URL = 'http://www.microservice.com';

let infoLogs: any[] = [];
let errorLogs: any[] = [];

const logger = {
    info: ((x: any) => (infoLogs = infoLogs.concat(x))),
    error: ((x: any) => (errorLogs = errorLogs.concat(x))),
};


const service = new RestMicroservice(
    URL,
    {
        json: true,
    },
    logger,
);

describe('RestMicroservice', () => {
    describe('Basic spec', () => {
        const body = 'Microservice (micro) serves!';
        const status = 200;
        const path = '/about';
        beforeAll(() => {
            nock(URL)
                .get(path)
                .reply(200, body);
        });
        test('Matches status code and body', async () => {
            const res = await service.get(path);
            expect(res.body).toBe(body);
            expect(res.statusCode).toBe(status);
        });
    });
});
