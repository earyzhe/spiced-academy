// Make a page that has on it an element
// that is 100px by 100px in size, 
// has absolute positioning, 
// and has a solid background color. 
// Add an event handler that makes this 
// box center itself directly under the 
// user's mouse pointer
// as it is moved across the screen.

(function () {
    document.onmousemove = mouseMoveHandler;
    var box = document.getElementById('box');
    console.log(box);

    function mouseMoveHandler(event){

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        var positionX = Number(mouseX) - (box.offsetWidth / 2);
        var positionY = Number(mouseY) - (box.offsetHeight / 2);
        console.log(positionX + ' ' + positionY);
    
        box.style.left = positionX + 'px';
        box.style.top = positionY + 'px';

        console.log(box.style.left + ' ' + box.style.top);
    }
})();