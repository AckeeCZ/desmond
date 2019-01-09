import isEmpty from 'lodash.isempty';
import { isObject } from './internal/validators';
import parseBool from './parseBool';

export default (input: any, params: {
    jsonColumns?: string[];
    toBoolean?: string[];
    nullOnEmpty?: '*' | string[];
} = {}) => {
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

    const nullOnEmptyCols = Array.isArray(params.nullOnEmpty) ? params.nullOnEmpty : Object.keys(input).filter(col => isObject(input[col]));

    nullOnEmptyCols.forEach(column => {
        if (isEmpty(input[column])) {
            input[column] = null;
        }
    });

    return input;
};
