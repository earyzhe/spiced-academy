// Write a function that takes an array as a parameter and returns a new array containing all of the items that
//  are in the array that was passed in but in reverse order. 
// Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

var testArray = createArrayOfNumbers(15);
console.log("Original order was: " + testArray);
var newArray = reverseArray(testArray);
console.log("New order is: " + newArray);
console.log("Original order is still: " + testArray);

function reverseArray(array){

    var newArray = [];

    for (var index = array.length - 1; index >= 0; index--) {
        newArray.push(array[index]);
        console.log(array[index]);
    }
    return newArray;
}

function createArrayOfNumbers(totalNumbers){
    var numbers = [];

    for (var index = 0; index < totalNumbers + 1; index++) {
        numbers.push(index);
    }
    return numbers;
}