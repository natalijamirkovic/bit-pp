function print (question, answer) {
    console.log(question + " " + this.name + " " + answer);
}

var dario = {
    name: "dario"
};

var marko = {
    name: "marko"
};

print.call(dario, "jesi li ti lud? ", "jesam");
print.apply(marko,["je li marko dobar profesor", "jeste"]);

var bla = print.bind(dario, "jesi li ti lud? ", "jesam");
bla();

function Cokolada (size, color, name) {
    this.size = size;
    this.color = color;
    this.name = name;
}

function Kolac (size, color, name) {
    Cokolada.call(this, size, color, name);
};

Cokolada.prototype.baking = function() {
    console.log("15min");
}

Kolac.prototype = Object.create(Cokolada.prototype);

Kolac.prototype.constructor = Kolac;

var milka = new Cokolada("Velika","crna","Noisete");
console.log(milka);

var cheeseCake = new Kolac("Mali","crveni","jagoda");
console.log(cheeseCake);

