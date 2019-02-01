import attributes from 'lib/attributes';

const data = {
    someIds: '[1,2,3,4]',
    active: 1,
    boring: 0,
    nullThis: '',
    keepThis: [],
    keepThisDate: new Date(0),
};

describe('attributes', () => {
    test('Is unchanged without options', () => {
        expect(attributes(data)).toEqual(data);
    });
    test('Converts JSON, bool and omits nulls', () => {
        expect(attributes(data, {
            jsonColumns: ['someIds'],
            toBoolean: ['active', 'boring'],
            nullOnEmpty: ['nullThis'],
        })).toMatchSnapshot();
    });
});
