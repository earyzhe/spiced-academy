(function () {

    var bottomAnimationFrame = 0;
    var topAnimationFrame = 0;

    // Top variables
    
    var headlines = $('#headlines');
    console.log(headlines);

    headlines.on('mousenter', mouseOverHeadlinesTop);
    headlines.on('mouseleave', mouseOutOfHeadlinesBottom);
    
    var headlinesOffsets = headlines.offset();
    console.log(headlinesOffsets);
    var headlinesleft = headlinesOffsets.left;
    console.log('off set left ' + headlinesleft);
    var topLinks = $('.top');

    moveTopElementLeft();

    // Top bar functions

    function mouseOverHeadlinesTop(e){
        console.log('mouseOverHeadlinesTop');
        cancelAnimationFrame(topAnimationFrame);
        e.stopPropagation();
    }    

    function mouseOutOfHeadlinesBottom(e){
        console.log('mouseOutOfHeadlinesBottom');
        moveTopElementLeft();
        e.stopPropagation();
    }

    function moveTopElementLeft(){
        headlinesleft --;
        var element = $(topLinks).eq(0);
        console.log(element);
        var elementsWidth = element.width;
        console.log(elementsWidth);
        if (headlinesleft <= - elementsWidth){
            headlinesleft += elementsWidth;
            $('#headlines').appendChild($(topLinks).eq(0));
        }
        console.log('headlinesheadlinesleft);
        $('#headlines').css({left : String(headlinesleft)});
        
        topAnimationFrame = requestAnimationFrame(moveTopElementLeft);
        if (headlinesleft < -1800 ){
            headlinesleft = 0;
        }
    }

})();


    // Bottom variables

    // var headlinesBottom = $('.bottom-headlines');
    // headlinesBottom.on('mouseenter' , mouseOverBottomHeadlines);
    // headlinesBottom.on('mouseleave' , mouseOutOfBottomHeadlines);

    // var headlinesRight =  0;
    // var bottomLinks = $('.bottom');

    // moveBottomElementRight();

    // // Bottom bar functions

    // function mouseOverBottomHeadlines(e){
    //     console.log('mouseOverBottomHeadlines');
    //     cancelAnimationFrame(bottomAnimationFrame);
    //     e.stopPropagation();
    // }    

    // function mouseOutOfBottomHeadlines(e){
    //     console.log('mouseOutOfBottomHeadlines');
    //     moveBottomElementRight();
    //     e.stopPropagation();
    // }

    // function moveBottomElementRight(){
    //     headlinesRight --;
    //     console.log(headlinesRight + ' is');
    //     console.log(bottomLinks);
    //     var rightHeadline = bottomLinks[bottomLinks.length - 1];
    //     console.log(rightHeadline);
    //     var rightHeadlineOffsetWidth = rightHeadline.offsetWidth;
    //     console.log(rightHeadlineOffsetWidth);
    //     console.log(headlinesRight === 0 - rightHeadlineOffsetWidth);
    //     if (  headlinesRight === 0 - rightHeadlineOffsetWidth ){
    //         headlinesRight += rightHeadlineOffsetWidth;
    //         console.log('inserting ' + rightHeadline + ' ' + );
    //         headlinesBottom.insertBefore(rightHeadline, $(bottomLinks)[0]);
    //         console.log(headlinesBottom.children);
    //     }
    //     // console.log(headlinesRight + 'px' + headlinesBottom.children);
    //     headlinesBottom.css({
    //         right: headlinesRight + 'px'
    //     });
        
    //     bottomAnimationFrame = setTimeout(moveBottomElementRight,100);
    //     if (headlinesRight > 1800 ){
    //         headlinesRight = 0 ;
    //     }
    // }
