import { deprecate } from './internal/deprecate';
import toJson from './toJson';

export default deprecate(Object.assign(toJson, { depricatedName: 'nullOrToJSON' }));
