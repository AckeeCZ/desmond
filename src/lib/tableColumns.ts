import * as Knex from 'knex';
import lodashCamelcase from 'lodash.camelcase';

/**
 * Return list of camelCased column names
 * @param knex Knex instance
 * @param table Table name
 */
const tableColumns = (knex: Knex, table: string) =>
    knex(table)
        .columnInfo()
        .then((x: any) => Object.keys(x).map(lodashCamelcase)) as PromiseLike<string[]>;

export default tableColumns;
