/*function getProgram(desc, lang, git) {
    var program = {
        description: desc,
        language: lang,
        gitRep: git,
        status: false,
        printGit: function () {
            console.log(program.gitRep);
        },
        isJavaScript: function () {
            if (program.language === "JavaScript") {
                return true;
            }
            return false;
        },
        isCompleted: function(){
            return status;
       } 
    }
    return program;
}*/

function getRecipe(name, type, complex, list, time) {
    var recipe = {
        name: name,
        typeOfCousine: type,
        complexity: complex,
        ingredientsList: list,
        preparingTime: time,
        prepInst: "",
        printIngrediants: function () {
            for(var i = 0; i < recipe.ingredientsList.length; i++){
                console.log(recipe.ingredientsList[i]);
            }
        },
        isEasy: function(){
            if(recipe.preparingTime <= 15){
                return true;
            }
            return false;
        },
        changeCousine: function(newType){
            recipe.typeOfCousine = newType;
        },
        removeIngrediant: function(ingrediant){
            for(var i = 0; i < recipe.ingredientsList.length; i++){
                if (recipe.ingredientsList[i] === ingrediant){
                    delete recipe.ingredientsList[i];
                }
            }
        }
    }
    return recipe;
}


var list = ['kupus','brasno','jabuke','vino'];
var pekinskaPatka = getRecipe("Pekinska patka", "Kineska", 5, list, 14);

console.log(pekinskaPatka);

pekinskaPatka.printIngrediants();

pekinskaPatka.changeCousine('francuska');
