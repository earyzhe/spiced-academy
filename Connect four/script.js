(function () {

    var connectionAmount = 4;
    var isRedTurn = false;

    $('.column').mousedown(function (event) {
        var column = $(event.currentTarget);

        for (var i = 0; i < column.children().length; i++) {

            var slot = column.children().eq(i);

            if (i == column.children().length - 1 && !slot.hasClass('yellow') && !slot.hasClass('red')) {
                if (isRedTurn) {
                    slot.addClass('red');
                }
                else {
                    slot.addClass('yellow');
                }
                break;
            }

            if (slot.hasClass('yellow') || slot.hasClass('red')) {

                if (isRedTurn) {
                    slot.prev().addClass('red');
                }
                else {
                    slot.prev().addClass('yellow');
                }
                break;
            }
        }
        calulateWinner();
        isRedTurn = !isRedTurn;
        $("h1").text(isRedTurn ? 'Red turn' : 'Yellow turn');
    });

    function calulateWinner() {

        var columns = $('.column');

        // Vetical Check
        verticalCheck(columns);

        // Horizontal check
        var multiArray = [];

        for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
            const column =  $(columns[columnIndex]);

            multiArray.push([]);

            for (let rowIndex = 0; rowIndex < column.children().length; rowIndex++) {
                const slot = column.children().eq(rowIndex);
                if (slot.hasClass('red')) {
                    multiArray[columnIndex][rowIndex] = 'red';
                }
                else if (slot.hasClass('yellow')) {
                    multiArray[columnIndex][rowIndex] = 'yellow';
                }
                else{
                    multiArray[columnIndex][rowIndex] = 'no match';
                }
            }
            // console.log(multiArray);
        }
    }


    function verticalCheck(columns) {
        for (let index = 0; index < columns.length; index++) {
            const column = $(columns[index]);
            var red = 0, yellow = 0;

            for (let subIndex = 0; subIndex < column.children().length; subIndex++) {
                const slot = column.children().eq(subIndex);

                if (slot.hasClass('red')) {
                    red++;
                }
                else if (slot.hasClass('yellow')) {
                    yellow++;
                }
            }
            if (yellow == connectionAmount) {
                console.log('Yellow wins');
                return;
            }
            else if (red == connectionAmount) {
                console.log('Red wins');
                return;
            }
        }
    }

})();