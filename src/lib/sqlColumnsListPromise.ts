import { deprecate } from './internal/deprecate';
import tableColumns from './tableColumns';

export default deprecate(Object.assign(tableColumns, {depricatedName: 'sqlColumnsListPromise'}));
