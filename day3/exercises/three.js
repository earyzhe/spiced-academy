function million(number) {
    if (number <= 0 || isNotANumber(number)) {
        return "ERROR";
    } else {
        if (number >= 1000000) {
            return number;
        } else {

            var returnNumber = 0;
            var multiple = 0;

            while (returnNumber < 1000000){
                returnNumber = multiple * number;
                multiple ++;
            }

            return returnNumber;
        }
    }
}

function isNotANumber(value) {
     if (typeof value === "number") {
        return false;
    } else {
        return true;
    }
}

console.log(million(1));
console.log(million(100));
console.log(million(1000));
console.log(million(10000));
console.log(million(1000000));
console.log(million(183764517856));
console.log(million("test"));
console.log(million(true));
console.log(million(0));

var testobj = {};

function testFunc() {}

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var testValues = [
    undefined,
    null,
    56,
    NaN,
    "String",
    true,
    testFunc,
    testobj,
    testArray,
    0,
    1000,
    100000027,
    2313,
    321432,
    43242,
];

function testFunction(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(
            "Result of test value " + array[i] + " is " + million(array[i])
        );
    }
}

testFunction(testValues);
