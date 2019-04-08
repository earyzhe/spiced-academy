// Write a function that expects a string representing a 
// class name to be passed as a parameter. The function should 
// return an array containing all the elements 
// in the document that have the class that was passed in.
(function () {

    console.log(getElementsArrayByClass('classTwo'));

    function getElementsArrayByClass(className) {
        var elementsObject = document.getElementsByClassName(className);
        var elementsArray = createElementsArrayFromObject(elementsObject);
        return elementsArray;
    }

    function createElementsArrayFromObject(elementsObject) {
        var newArray = [];
        for (var index = 0; index < elementsObject.length; index++) {
            newArray.push(elementsObject[index])
        }
        return newArray;
    }
})();
