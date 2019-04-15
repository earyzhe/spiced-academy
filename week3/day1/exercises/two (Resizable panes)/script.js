(function () {
    
    var container = $('.container');
    var bar =  $('#bar');
    var barWidth = bar.width() / 2;

    container.mousemove(moveBar);

    function moveBar(event) { 

        console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);

        var barPosition = event.pageX - barWidth;

        if ( barPosition < container.width() - (barWidth * 2 - 1)){

            bar.css({
                left: barPosition 
            });
            
            $('#top').css({
                width: event.pageX
            });            
        }
    }

})();