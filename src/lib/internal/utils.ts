/**
 * @ignore
 */
const mapKeys = (obj: { [key: string]: any }, fn: (key: string) => string) => {
    return Object.keys(obj)
        .reduce((res: { [key: string]: any }, key) => {
            res[fn(key)] = obj[key];
            return res;
        }, {});
};

export {
    mapKeys
};
