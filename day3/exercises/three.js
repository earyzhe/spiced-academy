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
    100000027
];

function testFunction(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(
            "Result of test value " + array[i] + " is " + million(array[i])
        );
    }
}

function million(number) {
    if (number <= 0 || checkType(number)) {
        return "ERROR";
    } else {
        if (number >= 1000000) {
            return number;
        } else {
            var multiplier = calculateMultipier(number);
            return multiplier;
        }
    }

    function calculateMultipier(numberToCalc) {
        var running = 0;
        var factor = 0;

        while (running <= 1000000) {
            running = numberToCalc * factor;
            factor++;
        }

        return factor - 2;
    }
}

function checkType(value) {
    if (typeof value === "undefined") {
        return true;
    } else if (typeof value === "function") {
        return true;
    } else if (value === null) {
        return true;
    } else if (typeof value === "string") {
        return true;
    } else if (Array.isArray(value)) {
        return true;
    } else if (typeof value === "boolean") {
        return true;
    } else if (typeof value === "object") {
        return true;
    } else if (isNaN(value)) {
        return true;
    } else if (typeof value === "number") {
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
