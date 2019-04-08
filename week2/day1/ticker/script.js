(function () {

    var headlines = document.getElementById('headlines')
    
    var left = headlines.offsetLeft;
    
    // moveElementLeft();

    // function moveElementLeft(){
    //     left --;
    //     console.log(left + 'px');
    //     headlines.style.left = left + 'px';
    //     // element.style.left = left + 'px';
    //     // console.log(left);
    //     requestAnimationFrame(moveElementLeft)
    //     if (left < -1800 ){
    //         left = 0 + 'px';
    //     }
    // }

    /// # 2
    var links = headlines.getElementsByTagName('a');
   
    moveElementLeft();

    function moveElementLeft(){
        left --;
        if (left <= -links[0].offsetWidth){
            left += links[0].offsetWidth;
            headlines.appendChild(links[0])
        }
        console.log(left + 'px');
        headlines.style.left = left + 'px';
        // element.style.left = left + 'px';
        // console.log(left);
        requestAnimationFrame(moveElementLeft)
        if (left < -1800 ){
            left = 0 + 'px';
        }
    }


})();