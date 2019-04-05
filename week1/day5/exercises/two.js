// Write a function called invertCase that expects a string as a parameter. 
// This function should return a new string with all the same characters as
// the string that was passed in but with the cases of the alphabetic characters switched.
// Uppercase characters should become lowercase and lowercase letters should become uppercase.
// Characters that are not alphabetic should not change.
// String.prototype.toUpperCase and String.prototype.toLowerCase will come in handy here.

// hello => hELLO;

var testStrings = [
    'HeLLo',
    'Yo',
    'YAKA',
    'beach',
    'thinG'
]
for (var  = 0;  < .length; ++) {
    
}
test(testStrings);

function test(strings){
    for (var index = 0; index < strings.length; index++) {
        var testString = strings[index];
        console.log(testString + " is now " + invertCase(testString) + ' and the test String is still ' + testString );
        invertCase(testString);
    }
}

function invertCase(string){

    var newString = '';

    for (var index = 0; index < string.length; index++) {

        var character = string[index];
        
        if (character == character.toUpperCase()) {
            character = character.toLowerCase()
        }else{
            character = character.toUpperCase()
        }
        newString += character;
    }

    return newString;
}
