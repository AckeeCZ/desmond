export interface Request {
    protocol: string;
    originalUrl: string;
    get: (param: string) => string;
}

/**
 * @ignore
 */
const valid = (req: Request) => req && req.protocol && req.originalUrl && typeof req.get === 'function';

/**
 * Creates absolute URL from express Request object
 * @param req express request
 * @return absolute url
 */
const absoluteUrl = (req: Request) => valid(req) ? `${req.protocol}://${req.get('host')}${req.originalUrl}` : null;

export default absoluteUrl;
