import * as Knex from 'knex';
import camelCase from 'lodash.camelcase';

/**
 * Return list of camelCased column names
 * @param knex Knex instance
 * @param table Table name
 */
const tableColumns = (knex: Knex, table: string) =>
    knex(table)
        .columnInfo()
        .then((x: any) => Object.keys(x).map(camelCase)) as PromiseLike<string[]>;

export default tableColumns;
