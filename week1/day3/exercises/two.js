delay(goodbye, 3000);
delay(hello, 3000);

function goodbye() {
    console.log("Hello!");
}

function hello() {
    console.log("Goodbye!");
}

function delay(delayedFunction, time) {
    var today = new Date();
    var start = today.getSeconds();
    var end;

    // console.log("Start delay time " + start);

    setTimeout(completion, time);

    function completion() {
        delayedFunction();
        today = new Date();
        end = today.getSeconds();
        // console.log("End time " + end);
        console.log("Delay time was " + (end - start) + " Seconds");
    }
}
