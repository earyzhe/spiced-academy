var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

main();

function sum() {
    console.log("Arguments are " + String(arguments));
    console.log(arguments[0]);
    console.log("Arguments length is " + arguments.length);

    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        console.log("Adding " + arguments[i] + " To total " + total);

        total = total + arguments[i];

        console.log("New total is " + total);
    }

    return total;
}

function main() {
    var sumtotal = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log("The final total sum is " + sumtotal);
}
