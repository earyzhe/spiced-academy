(function () {

    var bottomAnimationFrame = 0;
    var topAnimationFrame = 0;

    // Top variables
    
    var headlines = $('#headlines');
    var headlinesOffsets = headlines.offset();
    var headlinesleft = headlinesOffsets.left;
    var topLinks = $('.top');

    headlines.mouseenter(mouseOverHeadlinesTop);
    headlines.mouseleave(mouseOutOfHeadlinesTop);

    moveTopElementLeft();

    // Top bar functions

    function mouseOverHeadlinesTop(e){
        console.log('mouseOverHeadlinesTop');
        cancelAnimationFrame(topAnimationFrame);
        e.stopPropagation();
    }    

    function mouseOutOfHeadlinesTop(e){
        console.log('mouseOutOfHeadlinesTop');
        moveTopElementLeft();
        e.stopPropagation();
    }

    function moveTopElementLeft(){
        headlinesleft --;
        var elementsWidth = headlines.children().eq(0).width();
        // console.log(headlinesleft);
        // console.log(elementsWidth);
        if (headlinesleft <= - elementsWidth){
            var insertingElement = headlines.children().eq(0);
            console.log(insertingElement);
            console.log('inserting top');
            headlines.append(insertingElement);
            // headlines.children().eq(0).remove();
            console.log(headlines.children());
            headlinesleft += elementsWidth;
            console.log(insertingElement);
        }
        headlines.css({left : headlinesleft});
        
        topAnimationFrame = requestAnimationFrame(moveTopElementLeft);
        if (headlinesleft < -1800 ){
            headlinesleft = 0;
        }
    }

    // Bottom bar values

    var headlinesBottom = $('#bottom-headlines');
    headlinesBottom.on('mouseenter' , mouseOverBottomHeadlines);
    headlinesBottom.on('mouseleave' , mouseOutOfBottomHeadlines);

    var headlinesRight =  0;
    var bottomLinks = $('.bottom');

    moveBottomElementRight();
    console.log(headlines.children());
    console.log(headlinesBottom.children());
    console.log( bottomLinks );


    // Bottom bar functions

    function mouseOverBottomHeadlines(e){
        console.log('mouseOverBottomHeadlines');
        cancelAnimationFrame(bottomAnimationFrame);
        e.stopPropagation();
    }    

    function mouseOutOfBottomHeadlines(e){
        console.log('mouseOutOfBottomHeadlines');
        moveBottomElementRight();
        e.stopPropagation();
    }

    function moveBottomElementRight(){

        headlinesRight --;

        var rightHeadline = bottomLinks[bottomLinks.length - 1];
        var rightHeadlineOffsetWidth = rightHeadline.width();

        if (  headlinesRight === 0 - rightHeadlineOffsetWidth ){
            // headlinesRight += rightHeadlineOffsetWidth;
            
            var farRightElementIndex = bottomLinks.children().length - 1;
            var elementToInsert = bottomLinks.eq(farRightElementIndex);
            headlinesBottom.prepend(bottomLinks.eq(elementToInsert));
            console.log(elementToInsert);
            console.log(headlinesBottom.children());
            // old code
            // headlinesBottom.insertBefore(rightHeadline, );
        }
        headlinesBottom.css({right: headlinesRight });
        
        bottomAnimationFrame = requestAnimationFrame(moveBottomElementRight,100);
        if (headlinesRight > 1800 ){
            headlinesRight = 0 ;
        }
    }
})();



   