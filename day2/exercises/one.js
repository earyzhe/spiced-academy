// Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:
// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"

var testobj = {};

function testFunc() {}

var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var values = [
    undefined,
    null,
    56,
    NaN,
    "String",
    true,
    testFunc,
    testobj,
    testArray
];

logtypes();

function logtypes() {
    for (var i = 0; i < values.length; i++) {
        logType(values[i]);
    }
}

function logType(value) {
    if (typeof value === "undefined") {
        console.log("Value is " + "undefined");
    } else if (typeof value === "function") {
        console.log("Value is a " + "function!");
    } else if (value === null) {
        console.log("Value is " + "null");
    } else if (typeof value === "string") {
        console.log("Value " + value + " is " + "string!");
    } else if (Array.isArray(value)) {
        console.log("Value is " + "array!");
    } else if (typeof value === "boolean") {
        console.log("Value " + value + " is " + "boolean");
    } else if (typeof value === "object") {
        console.log("Value is " + "object");
    } else if (isNaN(value)) {
        console.log("Value " + value + " is " + "not a number");
    } else if (typeof value === "number") {
        console.log(value + " is " + "number!");
    } else {
        console.log("Value is " + "I have no idea");
    }
}
