(function () {

    var isRedTurn = false;
    var connectionAmount = 4;
    var pass = 'x';
    var fail = 'f';
    var testValue = '';
    for (let n = 0; n < connectionAmount; n++) {
        testValue += pass;
    }

    console.log(testValue);

    $('.slot').on('mouseup', function (event) {

        var column = $(event.target).parent();
        var winner;

        // Add slot

        for (var i = 0; i < column.children().length; i++) {

            var slot = column.children().eq(i);

            // find add to the las tindex if no slots are filled
            if (i == column.children().length - 1 && !slot.hasClass('yellow') && !slot.hasClass('red')) {
                if (isRedTurn) {
                    slot.addClass('red');
                }
                else {
                    slot.addClass('yellow');
                }

                winner = calulateWinner(slot, true);
                break;
            }
            // find current slot
            else if (slot.hasClass('yellow') || slot.hasClass('red')) {

                if (isRedTurn) {
                    slot.prev().addClass('red');
                }
                else {
                    slot.prev().addClass('yellow');
                }

                winner = calulateWinner(slot);
                break;
            }
        }

        if (winner) {
            console.log((isRedTurn ? 'Red ' : 'Yellow ') + 'wins');
        }

        var totalSlotsFilled = $('.yellow').length + $('.red').length;
        var totalSlots = $('.slot').length;

        if (totalSlotsFilled == totalSlots) {
            console.log('board filled');
        }

        isRedTurn = !isRedTurn;
        $("h1").text(isRedTurn ? 'Red turn' : 'Yellow turn');

    });


    function calulateWinner(currentSlot, bottomSlot) {

        // Vetical Check
        var verticalWin = verticalCheck(currentSlot);

        // Horizontal check
        var horizontalWin = bottomSlot ? horizontalCheck(currentSlot) : horizontalCheck(currentSlot.prev());

        // Cross check
        var crossWin = bottomSlot ? crossCheck(currentSlot) : crossCheck(currentSlot.prev());

        return verticalWin || horizontalWin || crossWin;
    }

    function crossCheck(slot){
        
        var tally = 0;
        var testval = '';
        var currentSlotIndex = slot.index();
        var column = slot.parent();
        var currentColumnIndex = column.index();
        
        var columnStartingIndex =  currentColumnIndex;
        
        var startSlotIndex = currentSlotIndex;

        while (startSlotIndex != column.children().length && columnStartingIndex != 0  ){
            startSlotIndex ++;
            columnStartingIndex --;
            console.log('here');
        }

        console.log("slot Index " + currentSlotIndex);
        console.log('col index ' + currentColumnIndex);
        
        // Go thought each column
        for (var columnIndex = columnStartingIndex; columnIndex < $('.column').length; columnIndex++) {
            const column = $('.column')[columnIndex];

            var slotWithinColumn = $(column).children().eq(startSlotIndex);
            // console.log("slot Index " + startSlotIndex);
            // console.log('col index ' + columnIndex);
            // console.log('slotINDEX ' + slotWithinColumn.index() + ' in column ' + slotWithinColumn.parent().index());
            // console.log(isRedTurn && slotWithinColumn.hasClass('red'));

            if (isRedTurn && slotWithinColumn.hasClass('red') || !isRedTurn && slotWithinColumn.hasClass('yellow')) {
                testval += pass;
            }
            else {
                testval += fail;
            }
            startSlotIndex --;
        }

        console.log(testval);

        // var forLoopEndingIndex = currentColumnIndex + (connectionAmount + 1);
        // var endingSlotIndex = currentSlotIndex + (connectionAmount + 1);

        // for (var colIndex = forLoopEndingIndex; colIndex < $('.column').length; colIndex++) {
        //     const column = $('.column')[colIndex];

        //     var slotTwoWithinColumn = $(column).children().eq(endingSlotIndex);

        //     if (isRedTurn && slotTwoWithinColumn.hasClass('red') || !isRedTurn && slotTwoWithinColumn.hasClass('yellow')) {
        //         tests.push(true);
        //     }
        //     else {
        //         tests.push(false);
        //     }
        //     endingSlotIndex --;
        // }
        // if (tally >= connectionAmount) {
        //     return true;
        // }
    }


    function horizontalCheck(slot) {

        var tally = 0;
        var tests = [];
        var currentSlotIndex = slot.index();

        for (var columnIndex = 0; columnIndex < $('.column').length; columnIndex++) {
            const column = $('.column')[columnIndex];

            var slotWithinColumn = $(column).children().eq(currentSlotIndex);

            if (isRedTurn && slotWithinColumn.hasClass('red') || !isRedTurn && slotWithinColumn.hasClass('yellow')) {
                tests.push(true);
            }
            else {
                tests.push(false);
            }
        }

        for (var testsIndex = 0; testsIndex < tests.length; testsIndex++) {
            if (tests[testsIndex] == true) {
                for (var t = testsIndex; t < tests.length; t++) {
                    if (tests[t]) {
                        tally++;
                    }else{
                        break;
                    }
                }
            }
            if (tally >= connectionAmount) {
                return true;
            }else{
                tally = 0;
            }
        }
    }


    function verticalCheck(slot) {

        var tally = 0;

        var startIndex = slot.index() == 0 ? 0 : slot.index() - 1;

        for (let index = startIndex; index < slot.parent().children().length; index++) {

            var testingSlot = slot.parent().children().eq(index);

            if (isRedTurn && testingSlot.hasClass('red') || !isRedTurn && testingSlot.hasClass('yellow')) {
                tally++;
            }
            else {
                break;
            }
        }
        return tally == connectionAmount;
    }
})();