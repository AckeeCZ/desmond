/** @ignore */
export const mapKeys = (obj: { [key: string]: any }, fn: (key: string) => string) => {
    return Object.keys(obj).reduce((res: { [key: string]: any }, key) => {
        res[fn(key)] = obj[key];
        return res;
    }, {});
};

/** @ignore */
export const mapValues = (obj: { [key: string]: any }, fn: (key: any) => any) => {
    return Object.keys(obj).reduce((res: { [key: string]: any }, key) => {
        res[key] = fn(obj[key]);
        return res;
    }, {});
};

/** @ignore */
export const toPairs = (obj: any) => Object.keys(obj).map(k => [k, obj[k]]);

/** @ignore */
export const flatOmit = (obj: any, paths: string[]) => {
    obj = { ...obj };
    paths.forEach(p => {
        delete obj[p];
    });
    return obj;
};
