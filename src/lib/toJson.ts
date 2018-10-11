interface Model {
    toJSON: (options: object) => object;
}

/**
 * @function toJson
 * Transforms (usually database) object to pure JSON object using toJSON member function.
 * If it does not have toJSON or object does not exist, it returns object itself
 * @param {Model | null} obj Object to transform to JSON
 * @param {?object} options Object that is passed to toJSON method
 * @return {object} toJSON result
 */
type ToJson = (obj: Model | null, options?: object) => Model | null | object;

const toJson: ToJson = (obj, options = {}) => {
    if (!obj || !obj.toJSON) {
        return obj;
    }

    return obj.toJSON(options);
};

export default toJson;
