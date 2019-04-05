// Bonus Exercise
// Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. 
// It should be possible to call the start method of instances of Countdown to initiate the countdown.
// Once the countdown starts, it should count down to zero starting with the number that was passed to the 
// constructor and logging each number to the console with a one second delay.

function Countdown(seconds){
    this.seconds = seconds;
    this.logSeconds = function (){
        if (this.seconds < 0 ){
            console.log(seconds);
            this.start();
        }
    };
    this.start = function(){

        setTimeout(seconds, this.logSeconds);

    };
}
var countdown= new Countdown(30);
console.log(countdown);

countdown.start();