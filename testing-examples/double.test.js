const dbl = require('./dbl');

test('dbl returns argument * 2', () => {
    dbl(2).then(val => {
        expect(val).toBe(4);
    });
});

test('dbl returns error message when passed something that is not a number',() => {
    return dbl('pizza').catch();
});