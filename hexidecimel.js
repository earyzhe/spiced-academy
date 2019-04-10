var tostringValue = 12;

var testArray = []
makeStringArray();
// makeNumberArray();

function makeNumberArray(){
    for (var x = 0; x < 10; x++) {
        testArray.push(Math.random())
    }
}

function makeStringArray(){
    for (var x = 0; x < 10; x++) {
        var charcode = Math.floor(Math.random()*255);
        console.log(charcode);
        var strinChar = String.fromCharCode(charcode);
        console.log(strinChar);
        testArray.push(strinChar);
    }
}

testArray.forEach(function (value) {
  testHex(value);
})

function testHex(value){
    var random = value * 100;
    var floored = Math.floor(random);
    console.log('Math random gave: ' + random + " with floored value: " + floored + " with toString argument of " + tostringValue + ' which gave the value : ' + floored.toString(tostringValue));
} 
