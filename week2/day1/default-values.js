var testValues = [
    '',
    null,
    0,   
    'Test',   
    true,   
    false,   
    100,   
    ['efwfe'],  
    NaN,   
    undefined,   
    259,   
    'who knows',       
]

var orOutput = [];
var andOutput = [];

testOr(testValues);
testAnd(testValues);
compare()


function testOr(testarray){
    console.log('testing Ors');
    for (var index = 0; index < testarray.length; index++) {
        var item = testarray[index];
        defaultsOr(item);
        orOutput.push(item);
    }
}

// The || operator returns the first value if it is true else the second value
function defaultsOr(v1){
    var value1 = v1 || 'value1 default';
    console.log("v1 was " + v1 + " and now is " + value1);
}

function testAnd(testarray){
    console.log('testing Ands');
    for (var index = 0; index < testarray.length; index++) {
        var item = testarray[index];
        defaultsAnd(item);
        orOutput.push(item);
    }
}

// The || operator returns the first value if it is true else the second value
function defaultsAnd(v1){
    var value1 = v1 && 'value1 default';
    console.log("v1 was " + v1 + " and now is " + value1);
}

function compare(){
    for (var index = 0; index < orOutput.length; index++) {
        if ( orOutput[index] == andOutput[index] ){
            console.log(orOutput[index] + ' Same ' + andOutput[index] );
        }
        else{
            console.log(orOutput[index] + ' Different ' +andOutput[index] );
        }
    }
}
