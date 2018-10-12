
const isNan = (value: any) => isNaN(value) && typeof value !== 'string';

const bool = (value: any) => !(isNan(value) || String(value) === 'false' || String(value) === '0');

export default bool;
