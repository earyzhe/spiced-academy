(function () {

    // Top variables
    var currentTopAnimationFrame = 0;

    var headlinesTop = document.getElementById('headlines');
    headlinesTop.onmouseenter = mouseOverHeadlinesTop;
    headlinesTop.onmouseleave = mouseOutOfHeadlinesBottom;

    var headlinesleft = headlinesTop.offsetLeft;
    var topLinks = headlinesTop.getElementsByClassName('top');

    moveTopElementLeft();

    // Top bar functions

    function mouseOverHeadlinesTop(){
        console.log('mouseOverHeadlinesTop');
        cancelAnimationFrame(currentTopAnimationFrame);
    }    

    function mouseOutOfHeadlinesBottom(){
        console.log('mouseOutOfHeadlinesBottom');
        moveTopElementLeft();
    }

    function moveTopElementLeft(){
        headlinesleft --;
        if (headlinesleft <= -topLinks[0].offsetWidth){
            headlinesleft += topLinks[0].offsetWidth;
            headlinesTop.appendChild(topLinks[0]);
        }
        headlinesTop.style.left = headlinesleft + 'px';
        
        currentTopAnimationFrame = requestAnimationFrame(moveTopElementLeft);
        if (headlinesleft < -1800 ){
            headlinesleft = 0 + 'px';
        }
    }

    // Bottom variables
    var currentBottomAnimationFrame = 0;

    var headlinesBottom = document.getElementById('bottom-headlines');
    headlinesBottom.onmouseenter = mouseOverBottomHeadlines;
    headlinesBottom.onmouseleave = mouseOutOfBottomHeadlines;

    var headlinesRight =  0;
    var bottomLinks = headlinesBottom.getElementsByClassName('bottom');

    moveBottomElementRight();

    // Bottom bar functions

    function mouseOverBottomHeadlines(){
        cancelAnimationFrame(currentBottomAnimationFrame);
    }    

    function mouseOutOfBottomHeadlines(){
        moveBottomElementRight();
    }

    function moveBottomElementRight(){
        headlinesRight --;
        var rightHeadline = bottomLinks[bottomLinks.length - 1];

        if (  headlinesRight === 0 - rightHeadline.offsetWidth ){
            headlinesRight += rightHeadline.offsetWidth;
            console.log('inserting');
            headlinesBottom.insertBefore(rightHeadline, bottomLinks[0]);
            console.log(headlinesBottom.children);
        }
        // console.log(headlinesRight + 'px' + headlinesBottom.children);
        headlinesBottom.style.right = headlinesRight + 'px';
        
        currentBottomAnimationFrame = requestAnimationFrame(moveBottomElementRight);
        if (headlinesRight > 1800 ){
            headlinesRight = 0 + 'px';
        }
    }
})();
