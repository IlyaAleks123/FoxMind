/** ### CREATE SET WITH VALUES */

const set = new Set([
    123,
    123,
    123,
    123,
    123,
    true,
    true,
    true,
    true,
    true,
    'string',
    null,
    {"key": "value"},
    [1,2,3,4],
    new Map([['key', 'value']]),
    new Set([1,2,3,4]),
]);
console.log(set);