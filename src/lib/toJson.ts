interface Model {
    [key: string]: any;
    toJSON?: (options?: any) => any;
}

/**
 * Transforms (usually database) object to pure JSON object using toJSON member function.
 * If it does not have toJSON or object does not exist, it returns object itself.
 * @param obj Object to transform to JSON
 * @param options Object that is passed to toJSON method
 * @returns toJSON result
 */
const toJson = (obj: Nullable<Model>, options: object = {}) => {
    if (obj && obj.toJSON) {
        return obj.toJSON(options);
    }
    return obj;
};

export default toJson;
