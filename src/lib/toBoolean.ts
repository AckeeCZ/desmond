import { deprecate } from './internal/deprecate';
import parseBool from './parseBool';

export default deprecate(Object.assign(parseBool, { deprecatedName: 'toBoolean' }));
