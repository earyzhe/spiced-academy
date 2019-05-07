(function () {

    var isRedTurn = false;
    var connectionAmount = 4;
    var pass = 'x';
    var fail = 'f';
    var testValue = '';
    for (let n = 0; n < connectionAmount; n++) {
        testValue += pass;
    }

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
            showPopup( 'Victory', (isRedTurn ? 'Red ' : 'Yellow ') + 'wins');
            // winner-popup
        }

        var totalSlotsFilled = $('.yellow').length + $('.red').length;
        var totalSlots = $('.slot').length;

        if (totalSlotsFilled == totalSlots) {
            console.log('board filled');
        }

        isRedTurn = !isRedTurn;
        $("#player").text(isRedTurn ? 'Red turn' : 'Yellow turn');

    });

    $('button').on('mouseup', function (event) {
        event.stopPropagation();
        
        $('#model-popup').removeClass('show');
        $('#model-popup').addClass('hide');

        $('#overlay').removeClass('show');
        $('#overlay').addClass('hide');

        var slots = $('.slot');
        console.log(slots);

        for (var i = 0; i < slots.length; i++) {
            var element = $(slots[i]);

            if( element.hasClass('yellow')){
                element.removeClass('yellow');
            }
            
            if( element.hasClass('red')){
                element.removeClass('red');
            } 
        }
    });

    $('*').on('transitionend', function (event) {
        if ($(event.target).hasClass('hide')){
            $(event.target).removeClass('hide');
        }
    });

    function showPopup(title, message){
        $('#overlay').addClass('show');
        $('#model-popup').addClass('show');
        $('#model-popup').children().eq(0).text(title);
        $('#model-popup').children().eq(1).text(message);
    }


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
        var testOnePass = bottomToTop(slot); 
        var testTwoPass = topToBottom(slot);

        return testOnePass || testTwoPass;
    }


    function topToBottom(slot){
        var testval = '';
        var currentSlotIndex = slot.index();
        var column = slot.parent();
        var currentColumnIndex = column.index();
        
        var columnStartingIndex =  currentColumnIndex;
        var startSlotIndex = currentSlotIndex;

        // set the starting point of the test 
        while (startSlotIndex != column.children().length - 1 && columnStartingIndex != 0  ){
            startSlotIndex --;
            columnStartingIndex --;
        }
        
        // Go thought each column
        for (var columnIndex = columnStartingIndex; columnIndex < $('.column').length; columnIndex ++) {
            if (startSlotIndex < column.children().length){
            
                const column = $('.column')[columnIndex];
                
                var slotWithinColumn = $(column).children().eq(startSlotIndex);
                
                if (isRedTurn && slotWithinColumn.hasClass('red') || !isRedTurn && slotWithinColumn.hasClass('yellow')) {
                    testval += pass;
                }
                else {
                    testval += fail;
                }

                startSlotIndex ++;
            }
        }
        return testval.includes(testValue);
    }


    function bottomToTop(slot){
        var testval = '';
        var currentSlotIndex = slot.index();
        var column = slot.parent();
        var currentColumnIndex = column.index();
        
        var columnStartingIndex =  currentColumnIndex;
        var startSlotIndex = currentSlotIndex;

        // set the starting point of the test 
        while (startSlotIndex != column.children().length && columnStartingIndex != 0  ){
            startSlotIndex ++;
            columnStartingIndex --;
        }
        
        // Go thought each column
        for (var columnIndex = columnStartingIndex; columnIndex < $('.column').length; columnIndex++) {
            const column = $('.column')[columnIndex];

            var slotWithinColumn = $(column).children().eq(startSlotIndex);

            if (isRedTurn && slotWithinColumn.hasClass('red') || !isRedTurn && slotWithinColumn.hasClass('yellow')) {
                testval += pass;
            }
            else {
                testval += fail;
            }
            startSlotIndex --;
        }
        return testval.includes(testValue);
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