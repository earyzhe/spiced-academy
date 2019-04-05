//  Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. 
//  Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. 
//  Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. 
//  Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. 
//  Square instances should use the same getArea method that Rectangle instances do.

//  var square = new Square(4);
//  square.getArea(); //16

//  var rect = new Rectangle(4, 5);
//  rect.getArea(); //20




function Square(num){
    this.width = num;
    this.height = num;
    this.getArea = function(){
        return this.width * this.height;
    }
}

function Rectangle(width, height){
    this.width = width;
    this.height = height
}

Rectangle.prototype = new Square;
Rectangle.prototype.constructor = Rectangle;

var rectangleTests = [ new RectangleTest(30,2,60),
    new RectangleTest(30,2,60),
    new RectangleTest(15,2,30),
    new RectangleTest(5,5,25),
    new RectangleTest(100,4,400),
    new RectangleTest(60,3,180),
    new RectangleTest(50,3,150),  
]

var squareTests = [ new RectangleTest(30,2,60),
   new SquareTest(3),
   new SquareTest(5),
   new SquareTest(6),
   new SquareTest(7),
   new SquareTest(13),
   new SquareTest(4526),  
]

testSquares(squareTests);
testRecangles(rectangleTests)

function testRecangles(rectTests){
    console.log('Testing rectangles');
    
    for (var index = 0; index < rectTests.length; index++) {
        
        var testValue = rectTests[index]
        console.log(testValue);
        var rect = new Rectangle(testValue.width, testValue.height);
        console.log(rect);
        var area = rect.getArea();
        if ( area == testValue.answer){
            console.log(testValue + ' Passed test');
        }
        else{
            console.log(testValue + ' Failed  test');
        }
    }
}

function testSquares(squareTests){

    console.log('Testing squares');
    
    for (var index = 0; index < squareTests.length; index++) {
        
        var testValue = squareTests[index]
        console.log(testValue);
        var square = new Square(testValue.number);
        console.log(square);
        var area = square.getArea();
        if ( area == testValue.answer){
            console.log(testValue + ' Passed test');
        }
        else{
            console.log(testValue + ' Failed  test');
        }
    }
}

function RectangleTest(width, height, answer){
    this.width = width,
    this.height = height, 
    this.answer = answer
}

function SquareTest(number, answer){
    this.number = number,
    this.answer = number * number;
}



// var r = new Rectangl(5,10);
// var s = new Square(10);

