var events = require('events');


function CountDown(countdownSeconds){
    this.seconds = countdownSeconds;
    this.lister = new events.EventEmitter()
    this.emit
            if (this.seconds > 0 ){
                setTimeout(function(){
                    process.emit('secondElapsed')
                } , this.seconds*1000);
            }
            console.log('The process is about to exit.');
}

CountDown.prototype = EventEmitter.prototype;

module.exports.CountDown = CountDown;

// CountDown.protoType = Object.create(events.EventEmitter.protoType);

