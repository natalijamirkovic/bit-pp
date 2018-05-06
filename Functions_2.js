/* TASK 1
    Write a function to check whether the `input` is a string or not.
    
        "My random string" -> true
        12 -> false*/

function isString(input) {
    if (typeof input === "string") {
        return true;
    } else {
        return false;
    }
}
console.log(isString(326173));



/*TASK 2
    Write a function to check whether a string is blank or not.
    "My random string" -> false
    " " -> true
    12 -> false
    false -> false*/

function blankOrNot(blank) {
    if (blank.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(blankOrNot("PUN STRING"));


/*TASK 3
    Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa"*/

function concatenate(string, nTimes) {
    var newString = "";
    for (var i = 0; i < nTimes; i++) {
        newString += string;
    }
    return newString;
}

console.log(concatenate("Ha", 3));



/*TASK 4    
    Write a function to count the number of letter occurrences in a string.
    "My random string", "n" -> 2 */

function letterOccurrences(letter, string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            counter++;
        }
    }
    return counter;
}
console.log(letterOccurrences("a", "asjdkaskdn"));


/* TASK 5
    Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.*/

function firstOccurence(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (character === string[i]) {
            return i;
            console.log(i);
            break;
        }
    }

    return -1;
}
console.log(firstOccurence("sdadda", "d"));



/* TASK 6 
Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1. */


function lastOccurence(string, character) {
    for (var i = string.length; i > 0; i--) {
        if (character === string[i]) {
            return i;
            console.log(i);
            break;
        }
    }
    return -1;
}
console.log(lastOccurence("sdadda", "d"));


/*TASK 7
    Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

    "My random string" -> ["M", "y", null, "r", "a"]
    "Random" -> ["R", "a", "n", "d", "o", "m"] */

function stringToArray(string) {
    newArray = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newArray[i] = "null"
        } else {
            newArray[i] = string[i];
        }
    }
    return newArray;
}
console.log(stringToArray("rasa nest"));


/*TASK 8
    Write a function that accepts a number as a parameter and checks if the number is prime or not. 
    Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

function primeOrNot(number) {
    for (var i = 2; i <= number; i++) {
        if (number % i === 0 && i !== number) {
            return false;
        }
    }
    return true;
}
console.log(primeOrNot(7));


/*TASK 9
    Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"*/

function replaceSpaces(string, separator) {
   var newString = "";
   if (separator) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString += separator;
        } else {
        newString[i] += string[i];
        }
    }
        return newString;
    } else {
        for (var i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                newString += "-";
            } else {
                newString += string[i];
            }
        }
        return newString;
    }
}

console.log(replaceSpaces("natalija dario"));



/*TASK 10 
     Write a function to get the first n characters and add “...” at the end of newly created string. */

function getFirst (string, number) {
    newString = "";
    for (var i = 0; i < number; i++) {
        newString += string[i];
        if ( i === number-1 ) {
            newString += "..."
        }
    }
    return newString;   
}
console.log(getFirst("ovde nesto pise", 3));


/* TASK 11
    Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
    ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */


    function arrayOfNum(array) {
           var newArray = [];
        
        for( var i = 0; i < array.length; i++) {
                if(typeof array[i] === "number" && array[i] !== Infinity && !isNaN(array[i])) {
                newArray += array[i] + " ";
                }
           }
             return newArray;
         }
        
     console.log(arrayOfNum([1, 21, undefined, 42, 1e+4, Infinity, NaN]));




         