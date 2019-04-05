// Bonus Exercise
// Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. 
// It should be possible to call the start method of instances of Countdown to initiate the countdown.
// Once the countdown starts, it should count down to zero starting with the number that was passed to the 
// constructor and logging each number to the console with a one second delay.

function Countdown(seconds){

    var self = this;
    this.seconds = seconds;
    this.logSeconds = function (){

        var shouldKeepRunning = seconds > 0

        if ( shouldKeepRunning ){
            console.log(seconds);
            self.start();
            seconds --;
        }
    };
    
    /// TODO why does it not work?!?!?!?
    this.start = function(){
        var logSeconds = self.logSeconds; 
        setTimeout(logSeconds, 1000);
    };
}
var countdown= new Countdown(5);
countdown.start();