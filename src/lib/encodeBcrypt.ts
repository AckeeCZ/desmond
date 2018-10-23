import hashBcrypt from './hashBcrypt';
import { deprecate } from './internal/deprecate';


export default deprecate(Object.assign(hashBcrypt, { deprecatedName: 'encodeBcrypt' }));
