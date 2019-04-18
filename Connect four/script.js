(function () {

    var connectionAmount = 4;
    var isRedTurn = false;

    $('.slot').on('mousedown', function (event) {

        var clickedSlot = $(event.target);
        var column = $(event.target).parent();
        clickedSlot.index();
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

                winner = calulateWinner(slot);
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


    function calulateWinner(currentSlot) {

        // Vetical Check
        var verticalWin = verticalCheck(currentSlot.prev());

        // Horizontal check
        var horizontalWin = horizontalCheck(currentSlot);

        return verticalWin || horizontalWin;
    }


    function horizontalCheck(currentSlot) {

        var tally = 0;
        var tests = [];

        for (var columnIndex = 0; columnIndex < $('.column').length; columnIndex++) {
            const column = $('.column')[columnIndex];

            var slotWithinColumn = $(column).children().eq(currentSlot.index());

            if (isRedTurn && slotWithinColumn.hasClass('red') || !isRedTurn && slotWithinColumn.hasClass('yellow')) {
                tests.push(true);
            }
            else {
                tests.push(false);
            }
        }


        for (var testsIndex = 0; testsIndex < tests.length; testsIndex++) {
            if (tests[testsIndex] == true) {
                console.log('in here');
                for (var t = testsIndex; t < tests.length; t++) {
                    if (tests[t]) {
                        console.log('adding to tally' + tests[t]);
                        tally++;
                    }else{
                        console.log(tests[t]);                        
                    }
                }
                break;
            }
        }
        console.log(tests);

        console.log('tests length ' + tests.length);
        console.log(tally);
        if (tally >= connectionAmount) {
            return true;
        }
    }


    function verticalCheck(slot) {

        var tally = 0;
        for (let index = slot.index(); index < slot.parent().children().length; index++) {

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