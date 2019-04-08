// Write a function that expects a string representing a selector to be
// passed as a parameter. The function should find all the elements in 
// the document that match the selector and change their style so that 
// the text they contain is italic, underlined, and bold.


var elements = getElements('div');
console.log(' Elements: ' + elements);

var italicElements = changeStyleToItalic();
console.log(' Italic elements: ' + italicElements);

function changeElementsTextToItalic(elements){
    var newElements = [];
    for (var index = 0; index < elements.length; index++) {
        var adjustedElement = changeStyleToItalic(elements[index]);
        newElements.push(adjustedElement); 
    }
    return newElements;
}

function changeStyleToItalic(element){
    element.style.text.fontStyle = 'italic';
    element.style.text.fontStyle = 'underlined';
    element.style.text.fontStyle = 'bold';
}

function getElements(selector){
    var elements = document.querySelectorAll(selector);
    return elements
}

   
