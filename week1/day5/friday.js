var x, xx;

x = 234;

function timesTwo(number){
    return number * 2;
}

xx = timesTwo(x);

var numbers = [ x, xx ]

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

numbers = {};

numbers['y'] = xx;

console.log(numbers.y);