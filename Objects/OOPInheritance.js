// function print(question,answer) {
//     console.log(question+ " " + this.name + " " + answer);
// }

// var emil = {
//     name : "Emil Bisak"
// };

// var mia = {
//     name : "Valas"
// }

// print.call(mia,"sta ima?","nema nista");
// print.apply(mia,["sta ima?","nema nista"]);


// var novaFunkcija = print.bind(emil,"sta se radi?");

// novaFunkcija("svasta nesto");

function Car (color,type,numOfWhells) {
    this.color = color;
    this.type = type;
    this.numOfWhells = numOfWhells;
}

Car.prototype.makeSound = function() {
    console.log("brrrrrrrrr");
}

//1 svojstva
function Motocicle (color,type, numOfWhells) {
    Car.apply(this, [color,type,numOfWhells]);
}

//prototype
Motocicle.prototype = Object.create(Car.prototype);


//constructor
Motocicle.prototype.constructor = Motocicle;

var audi = new Car("black","audi",4);
console.log(audi);

var kymco = new Motocicle("red","kymco",2);
console.log(kymco);

kymco.makeSound();




