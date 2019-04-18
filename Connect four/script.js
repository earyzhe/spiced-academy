(function () {

    var connectionAmount = 4;
    var isRedTurn = false;

    $('.slot').on('mouseup', function (event) {

        var clickedSlot = $(event.target);
        var column = $(event.target).parent();
        console.log(clickedSlot.index());

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

        return verticalWin || horizontalWin;
    }


    function horizontalCheck(slot) {

        var tally = 0;
        var tests = [];
        var currentSlotIndex = slot.index();
        //  == 0 ? 0 : slot.index() + 1;

        for (var columnIndex = 0; columnIndex < $('.column').length; columnIndex++) {
            const column = $('.column')[columnIndex];

            var slotWithinColumn = $(column).children().eq(currentSlotIndex);
            console.log( ' current slot index ' + currentSlotIndex);

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
                    }
                }
                break;
            }
        }
        if (tally >= connectionAmount) {
            return true;
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