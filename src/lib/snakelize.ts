import snakeCase from 'lodash.snakecase';
import { mapKeys } from './internal/utils';
import { isString } from './internal/validators';
/**
 * Snakelize keys of given object(s). Only top level keys are transformed.
 * Keys are assumed to be camelCase.
 * @param input object(s) to transform
 */
function snakelize(string: string): string;
function snakelize(object: { [key: string]: any }): { [key: string]: any };
function snakelize(array: Array<{ [key: string]: any }>): Array<{ [key: string]: any }>;
function snakelize(input: any) {
    if (isString(input)) {
        return snakeCase(input);
    }
    return Array.isArray(input) ? input.map(o => mapKeys(o, snakeCase)) : mapKeys(input, snakeCase);
};


export default snakelize;
