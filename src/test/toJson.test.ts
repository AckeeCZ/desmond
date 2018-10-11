import toJson from 'lib/toJson';

let toJsonCounter = 0;
let lastOptions: object;
const jsonRes = { name: 'Jack' };
const entity = {
    toJSON: (options: object) => {
        toJsonCounter++;
        lastOptions = options;
        return jsonRes;
    },
};

describe('toJson', () => {
    beforeEach(() => {
        toJsonCounter = 0;
    });

    test('Returns simple object', () => {
        expect(toJson(jsonRes)).toBe(jsonRes);
    });

    test('Converted to JSON', () => {
        expect(toJson(entity)).toBe(jsonRes);
        expect(toJsonCounter).toBe(1);
    });

    test('Converted to JSON with options', () => {
        const options = { shallow: true };
        expect(toJson(entity, options)).toBe(jsonRes);
        expect(lastOptions).toBe(options);
        expect(toJsonCounter).toBe(1);
    });

    test('Handles null', () => {
        const nullEntity = null;
        expect(toJson(nullEntity)).toBe(null);
    });
});
