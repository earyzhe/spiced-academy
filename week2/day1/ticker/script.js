(function () {

    var headlines = document.getElementById('headlines')
    headlines.onmouseenter = mouseOverHeadlines
    function mouseOverHeadlines(){
        cancelAnimationFrame(currentAnimationFrame);

    }

    headlines.onmouseleave = mouseOutOfHeadlines
    
    var left = headlines.offsetLeft;
    
    var links = headlines.getElementsByTagName('a');
    var currentAnimationFrame = 0;
   
    moveElementLeft();


    function mouseOutOfHeadlines(){
        moveElementLeft();
    }

    function moveElementLeft(){
        left --;
        if (left <= -links[0].offsetWidth){
            left += links[0].offsetWidth;
            headlines.appendChild(links[0])
        }
        console.log(left + 'px');
        headlines.style.left = left + 'px';
        
        currentAnimationFrame = requestAnimationFrame(moveElementLeft)
        if (left < -1800 ){
            left = 0 + 'px';
        }
    }
})();

for (var index = 0; index < array.length; index++) {
    
    var b 
var b 
var b 
var b 
}