import hash from './hash';
import { deprecate } from './internal/deprecate';


export default deprecate(Object.assign(hash, { deprecatedName: 'createHash' }));
