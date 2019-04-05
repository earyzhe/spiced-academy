/// new makes a function a constructor

///This is the constructor of Person.protype.constructor
function Person(name, age, sleepNoise){
    this.name = 'Andrew';
    this.age = 44;
    this.sleep = function(){
        console.log(sleepNoise);  
    }
}

function Actor(n, a , o){
    Person.call(n,a)
    this.oscar = o
    this.films = 2
    this.act = function(){ console.log('To be or not to be');}
}

var andrew = new Person('Andrew',30, 'zzzzzzzzzzz');
var luka = new Person('Luka' ,29, 'hello , what, no i didn\'t do it ');
var leo = new Actor()

/// A two ways to inheritate from another Constructor
Actor.prototype.sleep = Object.create(Person.prototype);
Actor.prototype = new Person;

/// assign a different constuctors.
Actor.prototype.constructor = Actor;
 
console.log(
    andrew,luka
);

console.log(luka.sleep());

/// Number constructors

var n = new Number(10);
console.log( 'Type of number ' + typeof n );

var n = new Number(10);
console.log( 'Type of number ' + typeof n );

///
console.log('Object.getPrototypeOf(andrew)) =  ' +  Object.getPrototypeOf(andrew));

console.log('Person  ' + Person);
console.log('Person.prototype == Object.getPrototypeOf(Person) = ' + Person.prototype == Object.getPrototypeOf(Person));
console.log('andrew.constructor.prototype = ' + andrew.constructor.prototype);
console.log('andrew.constructor =' + andrew.constructor);

/// Referances the
Person.prototype.eat = function(){
    console.log('munch, munch, munch')
}

var obj = {};

console.log(
    'obj.constructor =' + obj.constructor
);

console.log(
    'obj.constructor.prototype = ' + obj.constructor.prototype
    // Has funtions own protype
);

console.log(
    'Person.constructor = ' + Person.constructor
);

console.log(
    'Person.constructor.prototype = ' + Person.constructor.prototype
    // Has funtions own protype
);

Person.prototype = {
    sleep: function(){ console.log('zzzzzzzz');},
    constructor: Person
}

function fn(arg){
    console.log(this.name + arg);
}

fn.call({name: 'Funky Chicken'}, '???');
fn.call({name: 'Funky Chicken'}, '!!!!');
fn.apply({name: 'Funky Chicken'}, ['!','!','!','!']);
fn.apply({name: 'Funky Chicken'}, ['!','!','!','!']);

