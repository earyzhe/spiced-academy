(function () {

    var transitionIntervalMs = 3000;
    
    var pussyCats = document.getElementsByClassName('pussy');
    var dots = document.getElementsByClassName('dot');
    var counter = 0;
    document.addEventListener('transitionend', removeCallback);


    /// To start the motion from right to left with a interval of 5 seconds
    // setTimeout(rotate, transitionIntervalMs);

    // Start the carosel
    startCarosel();

    function startCarosel(){

        pussyCats[counter].classList.add("start");
        setDot();
        setTimeout(removeStart, transitionIntervalMs);

        // remove the start parameters and start the main rotation
        function removeStart(){
            pussyCats[counter].classList.remove("start");
            rotate();
        }
    }


    function removeCallback(event){ 
        if ( event.target.classList.contains("exit") ){
            event.target.classList.remove("exit");
            /// restart the function to resume the carosel;
            setTimeout(rotate, transitionIntervalMs);
        }
    }

    function rotate() {
        console.log('removing pussy ' + pussyCats[counter].id);
        
        //move the photo from onscreen to exit.
        pussyCats[counter].classList.add("exit");
        pussyCats[counter].classList.remove("onScreen");
        counter++;
        
        if (counter >= pussyCats.length) {
            //check if its the last photo
            //and restart the counter
            counter = 0;
        }
        //move the next photo to onscreen
        console.log('adding pussy ' + pussyCats[counter].id);        //move the photo from onscreen to exit.
        setDot();
        pussyCats[counter].classList.add("onScreen");
    }

    function setDot(){
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('on');
            var inner = dots[i].childNodes[0];
            inner.classList.remove('on');
        }
        dots[counter].classList.add('on');
        var innerAdd = dots[counter].childNodes[0];
        innerAdd.classList.add('on');
    }
})();



