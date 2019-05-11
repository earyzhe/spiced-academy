const countries = require('./countries');

test('When find is passed an empty string, it returns an empty array',  () => {
    expect(countries.find('')).toEqual([]);
});

test('The array that it returns contains no more than four matches',  () => {
    expect(countries.find('A').length).toBeLessThanOrEqual(4);
});

test('The search case is sensative', () => {
    expect(countries.find('Afghanistan')).toEqual(['Afghanistan']);
    expect(countries.find('afghanistan')).toEqual([]);
});

test('If there are no matching countries, an empty array is returned',() => {
    expect('asdljhvbajhkvbs').toBe([]);
});