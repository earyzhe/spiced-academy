// Write a function that expects a string representing a selector to be
// passed as a parameter. The function should find all the elements in 
// the document that match the selector and change their style so that 
// the text they contain is italic, underlined, and bold.

var elements = getElements('*');
console.log(' Elements: ' + elements);

var italicElements = changeElementsTextToItalic(elements);
console.log(' Italic elements: ' + italicElements);


function changeElementsTextToItalic(elements){
    var newElements = [];
    for (var index = 0; index < elements.length; index++) {
        console.log(elements[index]);
        changeStyleToItalic(elements[index]);
        // var adjustedElement = changeStyleToItalic(elements[index]);
        // newElements.push(adjustedElement); 
    }
    return newElements;
}

function changeStyleToItalic(element){
    console.log(element);
    element.style.fontStyle = 'italic';
    element.style.fontWeight = 'bold';
    element.style.textDecoration = 'underline';
}

function getElements(selector){
    var elements = document.querySelectorAll(selector);
    return elements
}

   
