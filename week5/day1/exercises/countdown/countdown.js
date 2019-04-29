

const events = require('events');

function Countdown (countdownSeconds){
    this.seconds = countdownSeconds;
    // this.emit('secondElapsed', this.seconds);
    this.tick = function(){
        var self = this;
        if (this.seconds > 0 ){
            
            setTimeout(function(){
                self.emit('secondElapsed', self.seconds);

                self.seconds --;
                
                self.tick();
            },
            1000);
        }
    };
    this.tick();
}

/// Set the prototype of the countdown object to an Events emitter.
Countdown.prototype = new events.EventEmitter();

/// Add the expotrs to the main js file.
module.exports.CountDown = Countdown;