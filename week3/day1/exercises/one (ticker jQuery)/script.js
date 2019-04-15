(function () {

    var currentAnimationFrame = 0;

    // Top variables
    
    $('headlines').on('mousenter', mouseOverHeadlinesTop);
    $('headlines').on('mouseleave', mouseOutOfHeadlinesBottom);
    
    var headlinesleft = $('headlines').offset('left');
    var topLinks = $('top');

    moveTopElementLeft();

    // Top bar functions

    function mouseOverHeadlinesTop(){
        cancelAnimationFrame(currentAnimationFrame);
    }    

    function mouseOutOfHeadlinesBottom(){
        moveTopElementLeft();
    }

    function moveTopElementLeft(){
        headlinesleft --;
        if (headlinesleft <= -topLinks[0].offsetWidth){
            headlinesleft += topLinks[0].offsetWidth;
            $('headlines').appendChild(topLinks[0]);
        }
        $('headlines').css({
            left : String(headlinesleft)
        });
        
        currentAnimationFrame = requestAnimationFrame(moveTopElementLeft);
        if (headlinesleft < -1800 ){
            headlinesleft = 0;
        }
    }

    // Bottom variables

    var headlinesBottom = $('bottom-headlines');
    headlinesBottom.on('mouseenter' , mouseOverBottomHeadlines);
    headlinesBottom.on('mouseleave' , mouseOutOfBottomHeadlines);

    var headlinesRight =  0;
    var bottomLinks = $('bottom');

    moveBottomElementRight();

    // Bottom bar functions

    function mouseOverBottomHeadlines(){
        cancelAnimationFrame(currentAnimationFrame);
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
        headlinesBottom.css({
            right: String(headlinesRight)
        });
        
        currentAnimationFrame = requestAnimationFrame(moveBottomElementRight);
        if (headlinesRight > 1800 ){
            headlinesRight = 0 ;
        }
    }
})();
