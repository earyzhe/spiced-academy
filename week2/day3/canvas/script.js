(function () {

    var canvas1 = document.getElementById('canvas');
    var context1 = canvas1.getContext('2d');
    var canvas2 = document.getElementById('canvas-two');
    var context2 = canvas2.getContext('2d');
    var moves = [bodyone, bodyTwo, bodyThree];
    var ref = 0;
    var dancing = false


    console.log(moves);
    document.addEventListener("keydown", moveBody);
    // document.addEventListener('mousedown', dance);
    bodyone();
    drawParent();

    function drawHead(){
        // Drawing triangle
        // Set color of the line
        context1.strokeStyle = 'red';
        // pickup pen
        context1.beginPath();    
        // move to x/y coordinate start position
        context1.moveTo(100,100);
        // End point
        context1.lineTo(200,100);
        context1.lineTo(150,200);
        context1.lineTo(100,100);

        // Draw the line and execuet the code above.
        context1.stroke(); 
        // Fill of the context
        context1.fillStyle = 'red'
        // fill the box
        context1.fill();

        // MAKE CIRCLE
        context1.beginPath();
        // arc(x, y, width, height, start, stop)
        context1.arc(150, 150, 60, 0, Math.PI * 2 );
        context1.stroke(); 
        context1.fillStyle = "purple";
        context1.fill();

        context1.strokeStyle = 'red';
    }

    // bodyone();


    function bodyone(){
        drawHead();
        // Body
        context1.beginPath();
        context1.moveTo(150,210);
        // c.lineTo(150, 500);
        // Arm Center point
        context1.lineTo(150,300);
        context1.lineTo(50,200);
        context1.lineTo(150,300);
        context1.lineTo(250,200);
        context1.lineTo(150,300);
        // Center legs
        context1.lineTo(150, 500);
        context1.lineTo(50,700);
        context1.lineTo(30,700);
        context1.moveTo(150,500);

        context1.lineTo(250,700);
        context1.lineTo(270,700);

        context1.stroke();
    }

    function bodyTwo(){
        drawHead();
        // Body
        context1.beginPath();
        context1.moveTo(150,210);
        // c.lineTo(150, 500);
        // Arm Center point
        context1.lineTo(150,400);
        context1.lineTo(50,200);
        context1.lineTo(150,400);
        context1.lineTo(250,200);
        context1.lineTo(150,400);
        // Center legs
        context1.lineTo(150, 500);
        context1.lineTo(50,700);
        context1.lineTo(30,700);
        context1.moveTo(150,500);

        context1.lineTo(250,700);
        context1.lineTo(270,700);

        context1.stroke();
    }

    function bodyThree (){
        drawHead();
         // Body
         context1.beginPath();
         context1.moveTo(150,210);
         // c.lineTo(150, 500);
         // Arm Center point
         context1.lineTo(150,400);
         context1.lineTo(50,200);
         context1.lineTo(150,400);
         context1.lineTo(250,200);
         context1.lineTo(150,400);
         // Center legs
         context1.lineTo(150, 600);
         context1.lineTo(50,700);
         context1.lineTo(30,700);
         context1.moveTo(150, 600);
 
         context1.lineTo(250,700);
         context1.lineTo(270,700);
 
         context1.stroke();
    }

    function dance(){
        console.log(' In dance ');

        dancing = !dancing;

        danceRepeat()

        function danceRepeat(){
            if(dancing){
                setTimeout(function() {

                    moveBody
                    danceRepeat();
                }, 1000);
                if ( i = moves.length ){
                    i = 0;
                }
                console.log(i);
            }
        }
    }

    function moveBody(event){
        var eventKey = event.key;
        console.log('events key ' + eventKey);
        var isArrow = eventKey.includes('Arrow');
        console.log('is arrow ' + isArrow);
        var calibratedref = ref % moves.length;
        context2.clearRect(0,0,canvas2.width,canvas2.height);
        context1.clearRect(0,0,canvas1.width,canvas1.height);
    
        if (isArrow){
            moves[calibratedref]()
            drawParent(Math.random() * 200, Math.random() * 200);
        }
        else{
            moves[calibratedref]()
            ref ++
            drawChildCanvas();
        }
    }

    function drawChildCanvas(x , y){
        context2.clearRect(0,0,canvas.width,canvas.height);
        context2.drawImage(canvas1, x || 50 , y || 50);
    }

    function drawParent( x , y ){
        context2.drawImage(canvas1, x || 50 , y || 50);
    }


})()    ;