// @ts-ignore
import camelCase from 'lodash.camelcase';

/**
 * Return list of camelCased column names
 * @param knex Knex instance
 * @param table Table name
 */
const tableColumns = (knex: Knex, table: string) =>
    knex(table)
        .columnInfo()
        .then(x => Object.keys(x).map(camelCase));

export default tableColumns;
