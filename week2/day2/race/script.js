(function () {

    var board = document.getElementById('board');
    var racers = document.getElementsByClassName('racer');
    var windowWidth = window.innerWidth;

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
        checkWinner();
    }

    document.getElementById('boost-button').addEventListener('click',
    function(event){
        event.stopPropagation();
        racingCarLeft += getRandomNumber();
        racers[0].style.left = racingCarLeft + 'px';
        checkWinner();
    })

    function checkWinner(){
        var winner;
        console.log(windowWidth);
        console.log(racingCarLeft);
        if (windowWidth  < racingCarLeft){
            winner = 'Racecar'
            displayWinner();
        }
        else if (windowWidth  < motorBikeLeft){
            winner = 'Motorbike'
            displayWinner();
        }
        else if (windowWidth  < policeCarLef){
            winner = 'PoliceCar'
            displayWinner();
        }
        else if (windowWidth  < tracktorLeft){
            winner = 'Tracktor'
            displayWinner();
        }

        function displayWinner(){
            console.log('creating popup');
            window.alert(winner + ' Was the winner');
            // var text = document.createTextNode(winner + 'Was the winner');
            // var popup = document.createElement('div');
            // popup.style.width = '200px';
            // popup.style.height = '200px';
            // popup.style.display = 'absolute';
            // popup.style.top  = '50%';
            // popup.style.left  = '50%';
            // popup.style.zIndex = '100'
            // document.body.appendChild(popup);
            // popup.appendChild(text);
        }
        
    }

})();