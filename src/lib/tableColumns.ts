// @ts-ignore
import camelCase from 'lodash.camelcase';

/**
 * Return list of camelCased column names
 * @param {Knex} knex Knex instance
 * @param {string} table Table name
 */
const sqlColumnsListPromise = (knex: Knex, table: string) =>
    knex(table)
        .columnInfo()
        .then(x => Object.keys(x).map(camelCase));

export default sqlColumnsListPromise;
