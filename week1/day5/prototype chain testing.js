function Mammal() {
    this.bloodTemp = "warm";
}

function Carnivore() {}

Mammal.prototype.growHair = function() {
    console.log("my hair is growing");
};

// console.log(Mammal.prototype);//Mammal { growHair: [Function] }
// console.log(Carnivore.prototype); //Carnivore {}
// console.log(Carnivore.prototype.constructor);//[Function: Carnivore]
Carnivore.prototype = Object.create(Mammal.prototype);
// console.log(Carnivore.prototype);//Mammal {}
// console.log(Carnivore.prototype.constructor);//[Function: Mammal]

Carnivore.prototype.eatMeat = function() {
    console.log("Mmm.Meat");
};

// console.log(Carnivore.prototype); //Mammal { eatMeat: [Function] }

function Lion(name) {
    Mammal.call(this); //super. Inherit constructor
    this.name = name;
}
// console.log(Lion.prototype.constructor);//[Function: Lion]
// console.log(Lion.prototype);//Lion {}
//

/////////////                 fancy way           //////////////////////////////
// Lion.prototype = Object.create(Carnivore.prototype, {
//     constructor: {
//         value: Lion
//     },
//     pride: {
//         value: function() {
//             console.log("im king of the jungle");
//         },
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

////////////////////////////////////////////////////////////////////////////////

Lion.prototype = Object.create(Carnivore.prototype);
Lion.prototype.pride = function() {
    console.log("im king of the jungle");
};

var firas = new Lion("fofo");
firas.growHair();
firas.eatMeat();
firas.pride();
