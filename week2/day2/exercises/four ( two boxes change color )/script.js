// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. 
// Nest within that element another element that is 50px by 50px in size and has a different solid background color. 
// When the user clicks on the outer element its background color should change to a randomly selected color. 
// However, if the user clicks on the inner element, the inner element's background color should change to a randomly selected
//  background color but the outer element's 
// background color should not change at all.

(function () {

    var parent = document.getElementById('parent');
    var child = document.getElementById('child');

    parent.onmousedown = outerBoxMouseDown;
    child.onmousedown = innerBoxMouseDown;

    function outerBoxMouseDown(event){
        parent.style.backgroundColor = getRandomColor();
        event.stopPropagation();
    }

    function innerBoxMouseDown(event){
        child.style.backgroundColor = getRandomColor();
        event.stopPropagation()
    }

    function getRandomColor(){
      var hex = "#" + Math.random().toString(16).slice(2 ,8);
      console.log(hex);
      return hex;
    }
    
})();