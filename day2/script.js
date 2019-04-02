var a = 0;
var b = null;

var c = a || b;
var d = a && b;

// a && dosometing(); ==
//
// if ( a ){
//     dosometing()
// }

console.log(c);
console.log(d);
