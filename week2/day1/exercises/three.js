// Write a function that inserts an element
//  into the body of the currently loaded page. 
// That element should have 
// fixed position, 
// z-index of 2147483647, 
// left of 20px, top of 100px, 
// font-size of 200px, 
// and contain the text 'AWESOME'.

var element = document.createElement('div');
element.style.display = 'fixed';
element.style.zIndex = '2147483647';
element.style.left = '20px';
element.style.top = '100px';
element.style.fontSize = '200px'
var text = document.createTextNode('AWSOME')
element.appendChild(text);


(function () {
    function insertElement(element){

        document.body.appendChild()

    }
})();