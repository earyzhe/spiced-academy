// now we're going to test async code
// Let's test a function that takkes a callback
const {isDir} = require('./isdir');

test("isdir returns true when passes a directory", () => {
    isDir(__dirname, function(err, data){
        expect(data).toBe(true);
        // done();
    });
});

test('isdir returns false when passed a file', 
    done => {
        isDir(__filename, function(err, data){
            expect(data).toBe(false);
            done();
        });
    }

);