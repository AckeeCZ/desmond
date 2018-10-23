import absoluteUrl from './absoluteUrl';
import { deprecate } from './internal/deprecate';


export default deprecate(Object.assign(absoluteUrl, { deprecatedName: 'fullUrlFromReq' }));
