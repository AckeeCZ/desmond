import createHash from 'lib/createHash';
import encodeBcrypt from 'lib/encodeBcrypt';
import fullUrlFromReq from 'lib/fullUrlFromReq';
import { deprecate } from 'lib/internal/deprecate';
import nullOrToJSON from 'lib/nullOrToJSON';
import sqlColumnsListPromise from 'lib/sqlColumnsListPromise';
import toBoolean from 'lib/toBoolean';

const aliases = [encodeBcrypt, createHash, fullUrlFromReq, nullOrToJSON, sqlColumnsListPromise, toBoolean];
describe('Aliases', () => {
    test('Are a function', () => {
        aliases.forEach(a => {
            expect(typeof a).toBe('function');
        });
    });
    test('Deprecation works', () => {
        // tslint:disable:no-console
        console.warn = () => null;
        const _test = (n: number) => n + 1;
        expect(deprecate(_test)(2)).toBe(3);
        expect(deprecate(() => 1)()).toBe(1);
    });
});
