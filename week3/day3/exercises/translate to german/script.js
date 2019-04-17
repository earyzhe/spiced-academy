(function () {

    var germanNumbers = ['eins', 'zwei', 'drei', 'vier', 'funf', "sects", "seiben", "act", "neun", "zehn"];

    translateNumberToGerman();


    function translateNumberToGerman(){

        try {
            var number = askForNumber();
            alert(germanNumbers[number]);

        } catch (e) {
            console.log(e);
            translateNumberToGerman();
        }
      
    }

    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error('Bad number');
    }
})();