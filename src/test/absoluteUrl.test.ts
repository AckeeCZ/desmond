import absoluteUrl, { Request } from 'lib/absoluteUrl';
import * as url from 'url';

const createRequest = (params: {[k: string]: any}) => ({
    get: (param: string) => params[param],
    originalUrl: params.originalUrl,
    protocol: params.protocol,
});

describe('absoluteUrl', () => {
    test('Composes URL', () => {
        const req = createRequest({
            host: 'example.com',
            originalUrl: '/posts/123',
            protocol: 'http',
        });
        expect(absoluteUrl(req)).toBe('http://example.com/posts/123');
    });
    test('Composes URL the same way as url.format', () => {
        const protocol = 'ftp';
        const host = 'unicorn@foo.bar:8800';
        const originalUrl = '/home';
        const req = createRequest({ protocol, host, originalUrl });
        expect(absoluteUrl(req)).toBe(url.format({
            host,
            protocol,
            pathname: originalUrl,
        }));
    });
    test('Returns null on null', () => {
        expect(absoluteUrl(null as any as Request)).toBe(null);
    });
});
