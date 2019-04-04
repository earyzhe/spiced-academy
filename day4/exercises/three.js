// Write a function called getLessThanZero that expects an array
// of numbers to be passed to it and returns a new array containing
// only those numbers from the array that was passed in that are less than zero.

//   getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
//   getLessThanZero([1, 2]); //[]

// Assumes that the given value is an arry of numnbers;

var testArray = [1, 2, -1, -90, 10];

console.log(getLessThanZero(testArray));


function getLessThanZero(numberArray){

    var newArray = numberArray;

    for (var index = 0; index < newArray.length; index++) {

        if ( newArray[index] > 0 ){
            
            newArray.splice(index, 1);
            index--;
         }
    }
    return newArray;
}

