import { Model } from 'bookshelf';
import { Nullable } from './internal/types';
import { isFunction } from './internal/validators';

/**
 * Transforms (usually database) object to pure JSON object using toJSON member function.
 * If it does not have toJSON or object does not exist, it returns object itself.
 * @param model Object to transform to JSON
 * @param options Object that is passed to toJSON method
 * @returns toJSON result
 */
const toJson = (model: Nullable<Model<any>>, options: object = {}) => {
    if (model && model.toJSON && isFunction(model.toJSON)) {
        return model.toJSON(options);
    }
    return model;
};

export default toJson;
