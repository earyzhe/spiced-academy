(function () {

    var headlines = document.getElementById('headlines')
    
    var left = headlines.offsetLeft;
    
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
        
        requestAnimationFrame(moveElementLeft)
        if (left < -1800 ){
            left = 0 + 'px';
        }
    }
})();