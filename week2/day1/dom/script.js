(function(){
    /// All my code will go in this iife 
    // to keep all my variable local to this file

    // document has five methods that will alow us to access Dom nodes (html elements)
    // in our js file 
    console.log('Hello world');

    var circle = document.getElementById('circle');
    console.log(circle);
    circle.style.backgroundColor = 'orange';

    var circleTwo = document.querySelector('#circle');
    console.log(circleTwo);

    // The plus is a sibling selector
    var circleInBox = document.querySelector('.box + #circle')
    console.log(circleInBox);

    ///#3 get elements by class name
    // returns and array like object that contains 
    // all the elementd that have thst class on it;
    var boxes = document.getElementsByClassName('box');
    console.log(boxes);
    for (var index = 0; index < boxes.length; index++) {
        console.log('this box ' + boxes[index]);
        boxes[index].style.borderRadius = '20px';
    }

    /// #4 get elementsByTagName
    //tages are HTML elements, like div p ,h1, img , etc
    var divs = document.getElementsByTagName('div');
    console.log(divs);

    /// #5 Query selector all
    /// works the same as query selector all returns an array
    // like object

    // parent-child relationship
    var children = document.querySelectorAll('#container div')

    // Create a HTML element or DOM node to add to our page
    // # 1 create a div.
    var myNewDiv = document.createElement('div');
    // # 2 create a div node.
    var myText = document.createTextNode('Monday is sluggish');
    // # 3 put textnode into div.
    myNewDiv.appendChild(myText);
    // # 4 put div on page by adding it to the DOM. 
    // This appends text div to the body and puts it at the last index.
    document.body.appendChild(myNewDiv);

})();

