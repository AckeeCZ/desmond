import lodashIsempty from 'lodash.isempty';
import { isObject } from './internal/validators';
import parseBool from './parseBool';

/**
 * Transform entity attributes, as you fetch them from your storage
 *
 * 1. Null parse JSON collumns
 * 2. Put null instead of empty strings or objects
 * 3. Parse to booleans (e.g. SMALL_INT)
 */
const attributes = (
    input: any,
    params: {
        jsonColumns?: string[];
        toBoolean?: string[];
        nullOnEmpty?: '*' | string[];
    } = {}
) => {
    (params.jsonColumns || []).map(column => {
        if (input[column]) {
            input[column] = Array.isArray(input[column]) ? input[column] : JSON.parse(input[column]);
        }
        if (Array.isArray(input[column])) {
            input[column] = input[column].filter((attr: any) => attr !== '');
        }
    });

    (params.toBoolean || []).map(column => {
        if (input[column] !== undefined) {
            input[column] = parseBool(input[column]);
        }
    });

    const nullOnEmptyCols = Array.isArray(params.nullOnEmpty)
        ? params.nullOnEmpty
        : Object.keys(input).filter(col => isObject(input[col]));

    nullOnEmptyCols.forEach(column => {
        if (lodashIsempty(input[column])) {
            input[column] = null;
        }
    });

    return input;
};

export default attributes;
