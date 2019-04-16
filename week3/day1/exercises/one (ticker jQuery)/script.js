(function () {

    var bottomAnimationFrame = 0;
    var topAnimationFrame = 0;

    // Top variables
    
    var topHeadlines = $('#headlines');
    var headlinesOffsets = topHeadlines.offset();
    var topHeadlinesleft = headlinesOffsets.left;
    var topLinks = $('.top');

    topHeadlines.mouseenter(mouseOverHeadlinesTop);
    topHeadlines.mouseleave(mouseOutOfHeadlinesTop);

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
        topHeadlinesleft --;

        if (topHeadlinesleft <= - topLinks.eq(0).width()){
            topHeadlinesleft += topLinks.eq(0).width();
            topHeadlines.append(topLinks.eq(0));
        }
        topHeadlines.css({left : topHeadlinesleft});
        
        topAnimationFrame = requestAnimationFrame(moveTopElementLeft);
        if (topHeadlinesleft < -1800 ){
            topHeadlinesleft = 0;
        }
    }

    // Bottom bar values

    var headlinesBottom = $('#bottom-headlines');
    headlinesBottom.on('mouseenter' , mouseOverBottomHeadlines);
    headlinesBottom.on('mouseleave' , mouseOutOfBottomHeadlines);

    var headlinesRight =  0;
    var bottomLinks = $('.bottom');

    moveBottomElementRight();
    console.log(topHeadlines.children());
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



   