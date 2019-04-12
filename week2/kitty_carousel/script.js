(function () {

    var transitionIntervalMs = 3000;
    
    var pussyCats = document.getElementsByClassName('pussy');
    var dots = document.getElementsByClassName('dot');
    var counter = 0;
    var timer;
    var transitioning = false;

    // Event delegation
    document.addEventListener('transitionend', removeCallback);


    /// To start the motion from right to left with a interval of 5 seconds
    // setTimeout(rotate, transitionIntervalMs);

    setupDots();

    // Start the carosel
    startCarosel();

    function setupDots(){
        // for (var i = 0; i < dots.length; i++) {
        //     dots[i].addEventListener('click', dotClick);
        // }

        for (var i = 0; i < dots.length; i++) {
            // console.log(dots[i] + ' ' + event.target);
            (function (i) {
                dots[i].addEventListener('click', function(){
                    if (counter != i && !transitioning){
                        console.log( counter + ' is ' + ' and transitioning ' + transitioning);
                        clearTimeout(timer);
                        rotate(i);
                        event.stopPropagation();
                    }
                }); 
            })(i);
        }
    }

    function startCarosel(){

        pussyCats[counter].classList.add("start");
        setDot();
        timer = setTimeout(removeStart, transitionIntervalMs);

        // remove the start parameters and start the main rotation
        function removeStart(){
            pussyCats[counter].classList.remove("start");
            rotate();
        }
    }

    // Event delegation
    function removeCallback(event){ 
        if ( event.target.classList.contains("exit") ){
            event.target.classList.remove("exit");
            /// restart the function to resume the carosel;
            timer = setTimeout(rotate, transitionIntervalMs);
            transitioning = false;
        }
    }

    function rotate(next) {        
        //move the photo from onscreen to exit.
        transitioning = true;
        pussyCats[counter].classList.add("exit");
        pussyCats[counter].classList.remove("onScreen");
        counter++;
        
        if ( next >= 0 ){
            counter = next;
        }
        else{
            if (counter >= pussyCats.length) {
                //check if its the last photo
                //and restart the counter
                counter = 0;
            }
        }
        //move the next photo to onscreen
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



