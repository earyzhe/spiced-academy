(function () {

    var isRedTurn = false;

    $('.column').mousedown(function (event) {
        var column = $(event.currentTarget);

        for (var i = 0; i < column.children().length; i++) {
            
            var slot = column.children().eq(i);

            if ( i == column.children().length - 1 && !slot.hasClass('yellow') && !slot.hasClass('red')){
                if ( isRedTurn ){
                    slot.addClass('red');
                }
                else{
                    slot.addClass('yellow');
                }
                break;
            }

            if ( slot.hasClass('yellow') || slot.hasClass('red') ) {

                if ( isRedTurn ){
                    slot.prev().addClass('red');
                }
                else{
                    slot.prev().addClass('yellow');
                }
                break;
            }
        } 
        isRedTurn = !isRedTurn;
    });
})();