(function () {

    var board = document.getElementById('board');
    var racers = document.getElementsByClassName('racer');
    var windowWidth = document.body.style.width;

    var racingCarLeft = 0;
    var motorBikeLeft = 0;
    var policeCarLef = 0;
    var tracktorLeft = 0;

    function getRandomNumber(value){
        var number =  value || 23;
        return Math.floor(Math.random() * number);
    }

    board.addEventListener(
        'click',
        function(event){
            racingCarLeft += getRandomNumber();
            motorBikeLeft += getRandomNumber();
            policeCarLef += getRandomNumber();
            tracktorLeft += getRandomNumber();
            updatePositions();
        }
    );

    document.addEventListener(
        'keydown',
        function(event){
            console.log(event);
            if (event.keyCode === 82) {
                var randomColor = 'rgba(' + getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256) + getRandomNumber(256) + ')'
                board.style.backgroundColor = randomColor;
            }
            
        }
    )

    function updatePositions(){
        racers[0].style.left = racingCarLeft + 'px';
        racers[1].style.left = motorBikeLeft + 'px';
        racers[2].style.left = policeCarLef + 'px';
        racers[3].style.left = tracktorLeft + 'px';
    }

    document.getElementById('boost-button').addEventListener('click',
    function(event){
        event.stopPropagation();
        racingCarLeft += getRandomNumber();
        racers[0].style.left = racingCarLeft + 'px';
    })

    function checkWinner(){
        if (windowWidth  == racingCarLeft){

        }
        else if (windowWidth  == motorBikeLeft){

        }
        else if (windowWidth  == policeCarLef){

        }
        else if (windowWidth  == tracktorLeft){

        }
    }

})();