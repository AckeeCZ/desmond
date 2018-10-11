interface Model {
    toJSON: (options: object) => object;
}

type Entity = Model | null | object;

const isModel = (obj: Entity): obj is Model => {
    return obj !== null
        && 'toJSON' in obj
        && typeof obj.toJSON === 'function';
};

/**
 * @function toJson
 * Transforms (usually database) object to pure JSON object using toJSON member function.
 * If it does not have toJSON or object does not exist, it returns object itself
 * @param {Entity} obj Object to transform to JSON
 * @param {?object} options Object that is passed to toJSON method
 * @return {object} toJSON result
 */
type ToJson = (obj: Entity, options?: object) => Entity;

const toJson: ToJson = (obj, options = {}) => {
    if (isModel(obj)) {
        return obj.toJSON(options);
    }
    return obj;
};

export default toJson;
