/**
 * @ignore
 */
const isNan = (value: any) => isNaN(value) && typeof value !== 'string';

/**
 * Parse bool from string (`"0"`, `"false"` --> `false`, else `true`), number (`0` --> `false`, else `true`), or boolean
 */
const parseBool = (value: any) => !(isNan(value) || String(value) === 'false' || String(value) === '0');

export default parseBool;
