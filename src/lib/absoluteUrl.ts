export interface Request {
    protocol: string;
    originalUrl: string;
    get: (param: string) => string;
}

/**
 * Creates absolute URL from express Request object
 * @param req express request
 * @return absolute url
 */
const absoluteUrl = (req: Request) => {
    return `${req.protocol}://${req.get('host')}${req.originalUrl}`;
};

export default absoluteUrl;
