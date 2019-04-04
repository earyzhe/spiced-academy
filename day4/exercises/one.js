// Write a function called "each" that accepts either an object or an array as
//  its first parameter and a callback as its second parameter.

// If the first parameter is an object, it should loop over the object's 
// properties and call the callback for each one. The property value should 
// be the first parameter passed to the callback and the property name should be the second.

// If the first parameter is an array, it should loop over the array's elements and call
//  the callback for each one. The array element should be the first parameter passed to
//   the callback and the index should be the second.

//   each({
//     a: 1,
//     b: 2
//   }, function(val, name) {
//     console.log('The value of ' + name + ' is ' + val);
//   }); // logs 'the value of a is 1' and 'the value of b is 2'

//   each(['a', 'b'], function(val, idx) {
//     console.log('The value of item ' + idx + ' is ' + val);
//   }); // logs 'the value of item 0 is a' and 'the value of item 1 is b'


var testArrayValues = ["one", 'two', 'three', 'four', 'five'];
var testObject = {
    propOne: "propValueOne",
    propTwo: "propValueTwo",
    propThree: "propValueThree",
    propFour: "propValueFour",
}
var badType = true;

var testArray = [ testArrayValues , testObject, badType ];

test(testArray);

function test(testValues){
    for (var index = 0; index < testValues.length; index++) {
        var testItem = testValues[index];
        each(testItem, logKeyAndValue);
    }
}


function each(array, callback){

    if (typeof array === "object") {
        for (var key in array) {
            if (array.hasOwnProperty(key)) {
                var value = array[key];
                logKeyAndValue(value, key)
            }
        }
    }
    else if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            var value = array[index];
            logKeyAndValue(value, index)
        }
    }
    else{
        console.log('Error: no matching type');
        
    }
}

function logKeyAndValue(val, name) {
    console.log('The value of ' + name + ' is ' + val);
};