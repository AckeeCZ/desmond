import { deprecate } from './internal/deprecate';
import snakelizeKeys from './snakelizeKeys';

export default deprecate(Object.assign(snakelizeKeys, {depricatedName: 'snakelize'}));
