(function () {

    var transitionIntervalMs = 3000;
    var transitionDurationMs = 1000;
    var counter = 1;

    // motion is from right to left with a duration of 5 seconds
    var pussyCats = document.getElementsByClassName('pussy');
    var dots = document.getElementsByClassName('dot');
    pussyCats[2].classList.add('startExit');
    var refArray = []

    for (var i = 0; i < pussyCats.length; i++) {
        refArray.push(i);
    }
    refArray.push(refArray.shift());
    refArray.push(refArray.shift());
    refArray.push(refArray.shift());

    setTimeout(rotate, transitionIntervalMs);

    function rotate(){

        console.log(refArray);

        for (var i = 0; i < pussyCats.length; i++) {
            
            if ( i == 0  ){
                console.log('in exit');
                exitScreen(pussyCats[refArray[0]]);
                dots[refArray[0]].classList.remove('on')
            }
            else if ( i == 1 ){
                console.log('in on');
                dots[refArray[1]].classList.add('on')
                onScreen(pussyCats[refArray[1]]);
            }
            else {
                defaultPosition(pussyCats[refArray[i]]);
                // defaultPosition(pussyCats[refArray[3]]);;
                // dots[refArray[i]].classList.remove('on')
            }
        }
        pussyCats[2].classList.remove('startExit');
        refArray.push(refArray.shift())
        // refArray.unshift(refArray.pop());
        
        counter ++;

        setTimeout(rotate, transitionIntervalMs);
        
    }

    function defaultPosition(pussy){
        // console.log('removeing ' + pussy.id);
        pussy.classList.remove('exit');
        pussy.classList.remove('onScreen');
    }

    function onScreen(pussy){
        // console.log('onscreen ' + pussy.id)
        pussy.classList.remove('exit');
        pussy.classList.add('onScreen');
    }

    function exitScreen(pussy){
        // console.log('exiting ' + pussy.id)
        pussy.classList.remove('onScreen');
        pussy.classList.add('exit');
    }

    function transitionEnd(){
        
    }

})();