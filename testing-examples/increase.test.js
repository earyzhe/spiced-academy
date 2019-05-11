const increase = require('./increase');
console.log(increase);

test('passing NAN returns this string "Error"', () =>{
    // this is where the actual test code goes
    expect(increase(NaN)).toBe('.jbliib');
});

test('Passing a negative number returns the string "ERROR"',  () => {
    /// Execute the increase function
    expect(increase(-1)).tobe('ERROR');
});

