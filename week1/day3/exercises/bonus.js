// Bonus exercise
// Write a function that returns a function that can be called repeatedly and passed a number each time. Each time it is called it should return the sum of the number that is passed in and all other numbers that were passed in previous calls. That is, it should return the sum of all the numbers that were ever passed to it.
//
// var totaler = getTotaler();
// totaler(1); //1
// totaler(2); //3
// totaler(5); //8

var totaler = function getTotaler() {
    var runningTotal = 0;

    return function recursive() {
        var number = arguments[0];

        console.log("Number is " + number);
        console.log("Running total is " + runningTotal);
        if (number) {
            runningTotal = runningTotal + number;
            console.log(runningTotal);
            return runningTotal;
        } else {
            runningTotal = runningTotal + 1;
            console.log(runningTotal);
            return runningTotal;
        }
    };
};

function testFunction() {
    var returnTotal = totaler();
    returnTotal(1); //1
    returnTotal(2); //3
    returnTotal(5); //8
}

testFunction();
