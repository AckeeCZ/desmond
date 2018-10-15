// @ts-ignore
import snakeCase from 'lodash.snakecase';
import { mapKeys } from './internal/utils';

/**
 * Snakelize keys of given object(s). Only top level keys are transformed.
 * Keys are assumed to be camelCase.
 * @param input object(s) to transform
 */
const snakelizeKeys = (input: { [key: string]: any } | Array<{ [key: string]: any }>) => {
    return Array.isArray(input) ? input.map(o => mapKeys(o, snakeCase)) : mapKeys(input, snakeCase);
};

export default snakelizeKeys;
