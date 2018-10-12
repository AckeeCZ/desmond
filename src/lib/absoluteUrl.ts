import { isFunction } from './internal/validators';


export interface Request {
    protocol: string;
    originalUrl: string;
    get: (param: string) => string;
}

/**
 * @ignore
 */
const valid = (req: Request) => req && req.protocol && req.originalUrl && isFunction(req.get);

/**
 * Creates absolute URL from express Request object
 * @param req express request
 * @return absolute url
 */
const absoluteUrl = (req: Request) => valid(req) ? `${req.protocol}://${req.get('host')}${req.originalUrl}` : null;

export default absoluteUrl;
