(function () {

    var transitionIntervalMs = 3000;
    var transitionDurationMs = 1000;
    var counter = 1;

    // motion is from right to left with a duration of 5 seconds
    var pussyCats = document.getElementsByClassName('pussy');

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
            }
            else if ( i == 1 ){
                console.log('in on');
                onScreen(pussyCats[refArray[1]]);
            }
            else {
                defaultPosition(pussyCats[refArray[2]]);
                defaultPosition(pussyCats[refArray[3]]);;
            }
        }

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

  

        function rotate(){
            console.log(counter);        
    
            if ( counter < pussyCats.length - 1){ 
    
                exitScreen(pussyCats[counter]);
                defaultPosition(pussyCats[counter + 1])
    
            }else if( counter == pussyCats.length){
                defaultPosition(pussyCats[counter]);
                counter = 0;
            }
            else if ( counter == 0 ){
                onScreen(pussyCats[counter]);
            }
            else{
                defaultPosition(pussyCats[counter + 1]);
            }
    
            counter ++;
    
            setTimeout(rotate, transitionIntervalMs);
        }