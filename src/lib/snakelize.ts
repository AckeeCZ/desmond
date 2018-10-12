// @ts-ignore
import snakeCase from 'lodash.snakecase';

const mapKeys = (obj: { [key: string]: any }, fn: (key: string) => string) => {
    return Object.keys(obj)
        .reduce((res: { [key: string]: any }, key) => {
            res[fn(key)] = obj[key];
            return res;
        }, {});
};

const snakelize = (input: object | object[]) => {
    return Array.isArray(input) ? input.map(o => mapKeys(o, snakeCase)) : mapKeys(input, snakeCase);
};

export default snakelize;
