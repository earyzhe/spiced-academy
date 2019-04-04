// Write a function that takes an array as a parameter and returns a new array containing all of the items that
//  are in the array that was passed in but in reverse order. 
// Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

var testArray = createArrayOfNumbers(15);

console.log("Original order was: " + testArray);

console.log("New order is: " + reverseArray(testArray));

function reverseArray(array){

    var newArray = array;
    var ref = newArray.length;

    for (var index = 0; index < newArray.length; index++) {
        
        var endItem = newArray[newArray.length - 1];
        newArray.splice(index, 0 , endItem);
        newArray.pop();
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