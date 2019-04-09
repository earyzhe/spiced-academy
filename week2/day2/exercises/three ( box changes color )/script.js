// Make a page that has on it an element that 
// is 100px by 100px in size and has a solid 
// black border. When the user mouses down on 
// this box, its background should change to 
// a randomly selected color. When the user 
// mouses up on it, its background should
// change to another randomly selected color.

(function () {

    var box = document.getElementById('box');
    console.log(box);
    
    document.onmousedown = changeColor;
    document.onmouseup = changeColor;

    function changeColor(event){
        console.log(event);
        var color = generateRandomColor()
        console.log(color);
        box.style.backgroundColor = generateRandomColor()
    }

    function generateRandomColor(){
        var randomColor = 'rgba(' + getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256) + ')'
        return randomColor;
    }

    function getRandomNumber(value){
        var number =  value || 23;
        return Math.floor(Math.random() * number);
    }

})();