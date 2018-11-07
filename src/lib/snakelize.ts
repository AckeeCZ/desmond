import snakeCase from 'lodash.snakecase';
import { mapKeys } from './internal/utils';
import { isString } from './internal/validators';

/**
 * Snakelize string or keys of given object(s) if provided. Only top level keys are transformed when handling object(s).
 * Keys are assumed to be camelCase.
 */
function snakelize(string: string): string;
function snakelize(object: { [key: string]: any }): { [key: string]: any };
function snakelize(array: Array<{ [key: string]: any }>): Array<{ [key: string]: any }>;
function snakelize(input: any) {
    if (isString(input)) {
        return input.split('.').map(snakeCase).join('.');
    }
    return Array.isArray(input) ? input.map(o => mapKeys(o, snakeCase)) : mapKeys(input, snakeCase);
};


export default snakelize;
