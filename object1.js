// var dario = {
//     name: "dario",
//     lastname: "stamenkovic",
//     age:28,
//     hobbies:["maraton", "jalom", "rep", "gumenebombone"],
//     job: "programer",
//     like: function () {
//       return dario.name + " simpatise nataliju";
//     }
// }
// console.log(dario.like());


// var ja = {
//     name: "milica",
//     occupation: ["design", "programmer", "cook", "music"],
//     output: function() {
//         return ja.name + " will be the best " + ja.occupation[1];
//     }
// }
// console.log (ja.output());


var hobbies = {
    name: "marko",
    occupations: ["roller blading", "riding bicycle", "watching movies", "music", "natalija likes dario", "slow running"],
    output: function () {
        return hobbies.name + " likes " + hobbies.occupations[5];
    }
}

hobbies.job = {
    occupation: "programmer",
    food: "cakes",
}

hobbies.name = "natalija";
console.log(hobbies);

delete hobbies.output;
console.log(hobbies);

/* Task 1
    Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */

var favCoffee = {
    name: "latteMachiato",
    strength: "to je sve mlijeko",
    flavour: "caramel",
    milk: "to je sve mlijeko",
    sugar: "bez sugara",
    size: "extra large",
    decoration: "srce"

}
console.log(favCoffee);

/* Task 2
    Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. */

var favMovie = {
    title: "Pulp Fiction",
    actors: ["Samuel L. Jackson", "Bruce Willis", "Umma Turman", "John Travolta"],
    director: "Tarantino",
    genre: ["crime", "triller"],
    popularity: "the most popular in '90!"
}
console.log(favMovie);


/* Task 3
    
Write a function that creates an object that represent a computer program. Each program is described by: description,  programming language, git repository, boolean status that says if the program is completed or not. Add a method that prints out program’s repository,  a method that checks if the program is written in JavaScript as well as a method that checks if program is completed or not. */


function createProgram(desc, lang, git, status) {
    var program = {
        description: desc,
        language: lang,
        gitRepository: git,
        status: status,
        isCompleted: function () {
            return program.status;
        }
    }
    program.isInJS = function() {
        return program.language === "JS"
        // if  (program.language === "JS") {
        //     return true;
        // }
        // return false;
    }
    return program;
}

var javaScript = createProgram("This is JS", "JS", "gitbla", false); 
console.log(javaScript.description);
console.log(javaScript.isCompleted());
console.log(javaScript.isInJS());

var php = createProgram("this is php", "php", "gitbla", false)

console.log(php.isInJS());




/* Task 4 
    Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
    Add a method that prints out all the ingredients necessary for the meal preparation. 
    Add a method that checks if a meal can be prepared for 15 minutes. 
    Add a method that changes the type of cuisine to the given value. 
    Add a method that delete a given ingredient from the list of ingredients.  */

    function createRecipe(name, type, range, ingred, time, howTo) { 
        var dish = {
        nameOfTheDish: name,
        typeOfCuisine: type,
        complexity: range,
        listOfIngredients: ingred,
        preparingTime: time,
        instruction: "",
        necessaryIngredients: function () {
            for(var i = 0; i < dish.listOfIngredients.length; i++) {
                console.log(dish.listOfIngredients[i]);
            }
        },
        canBePrepared: function() {
             if (dish.preparingTime <= 15) {
                 return true;
         }
          return false; 
    },
        changesType: function (newType) {
            dish.typeOfCuisine = newType;
        },
        removeIngrediant: function(ingrediant) {
            for(var i = 0; i < dish.listOfIngredients.length; i++) {
                if (dish.listOfIngredients[i] === ingrediant) {
                delete dish.listOfIngredients[i];
            }
        }
    }
}
    return dish;
}
var list = ["piletina", "tartar", "krompir"];
var piletina = createRecipe("piletina", "chinese", 5, list, 90, "read the recipe carefully");

console.log(piletina);
piletina.necessaryIngredients();
piletina.changesType("ruska");
piletina.removeIngrediant("tartar");