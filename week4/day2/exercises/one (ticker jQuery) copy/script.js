(function () {

    var bottomAnimationFrame = 0;
    var topAnimationFrame = 0;

    // Top variables
    
    var topHeadlines = $('#headlines');
    var headlinesOffsets = topHeadlines.offset();
    var topHeadlinesleft = headlinesOffsets.left;

    topHeadlines.mouseenter(mouseOverHeadlinesTop);
    topHeadlines.mouseleave(mouseOutOfHeadlinesTop);

    // Bottom bar values

    var bottomHeadlines = $('#bottom-headlines');
    bottomHeadlines.on('mouseenter' , mouseOverBottomHeadlines);
    bottomHeadlines.on('mouseleave' , mouseOutOfBottomHeadlines);

    var bottomHeadlinesRight =  0;
    var bottomLinks = $('.bottom');

    $.ajax({
        type: "GET",
        url: "/data.json",
        success: function (data) {
            console.log(data);
            // var jsData = JSON.parse(data);
            
            var jsData = data;
            
            // // Version four
            // for (var i = 0; i < data.length; i++) {
            //     const element = jsData[i];
            //     var link = element.href;
            //     var headline = element.text;
            //     var linkHTML =  '<a class="top" href=' + '"' + link + '"' + '>' + headline + '</a>';
            //     $('#headlines').append(linkHTML);
            //     $('#bottom-headlines').append(linkHTML); 
            // }
            
            console.log(jsData);
            // Version one
            for (const key in jsData) {
                if (jsData.hasOwnProperty(key)) {
                    const element = jsData[key];
                    var link = element.href;
                    var headline = element.text;
                    var linkHTML =  '<a class="top" href=' + '"' + link + '"' + '>' + headline + '</a>';
                    $('#headlines').append(linkHTML);
                    $('#bottom-headlines').append(linkHTML);  
                }
            }
        },
        error: function(e){
            console.log(e);
        }
    });

    

    moveTopElementLeft();
    moveBottomElementRight();


    // Top bar functions

    function mouseOverHeadlinesTop(e){
        cancelAnimationFrame(topAnimationFrame);
        e.stopPropagation();
    }    

    function mouseOutOfHeadlinesTop(e){
        moveTopElementLeft();
        e.stopPropagation();
    }

    function moveTopElementLeft(){
        topHeadlinesleft --;

        if (topHeadlinesleft <= - topHeadlines.children().eq(0).outerWidth()){
            topHeadlinesleft += topHeadlines.children().eq(0).outerWidth();
            topHeadlines.append(topHeadlines.children().eq(0));
        }
        topHeadlines.css({left : topHeadlinesleft});
        
        topAnimationFrame = requestAnimationFrame(moveTopElementLeft);
        if (topHeadlinesleft < -1800 ){
            topHeadlinesleft = 0;
        }
    }


    // Bottom bar functions

    function mouseOverBottomHeadlines(e){
        cancelAnimationFrame(bottomAnimationFrame);
        e.stopPropagation();
    }    

    function mouseOutOfBottomHeadlines(e){
        moveBottomElementRight();
        e.stopPropagation();
    }

    function moveBottomElementRight(){

        bottomHeadlinesRight --;

        var rightHeadline = bottomHeadlines.children().eq(bottomLinks.length - 1);

        if (  bottomHeadlinesRight  <= -rightHeadline.outerWidth() ){ 

            bottomHeadlinesRight += rightHeadline.outerWidth();
            var elementToInsert = bottomHeadlines.children().eq(bottomHeadlines.children().length - 1 );
            bottomHeadlines.prepend(elementToInsert);

        }
        
        bottomHeadlines.css({right: bottomHeadlinesRight });
        
        bottomAnimationFrame = requestAnimationFrame(moveBottomElementRight,100);
        if (bottomHeadlinesRight > 1800 ){
            bottomHeadlinesRight = 0 ;
        }
    }
})();



   