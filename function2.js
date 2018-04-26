/*Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false*/

/*function stringOrNot (string) {
    if(typeof string === "string") {
        return true;
    }else {
        return false;
    }
}

console.log(stringOrNot("sta god"));*/

/*Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false*/

/*function blankOrNot (blank) {
    if (blank.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(blankOrNot("PUN STRING"));*/

/* task 3

Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/





/*function concat (nTimes, string) {
    var newString = ""; 
    for (var i = 0; i < nTimes; i++) {
        newString+=string;
    } 
    return newString;
}

console.log(concat(3, "Natalija"));*/

/*Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

/*function letterCount(letter, string) {
    var count = 0;
    for (var  i =0; i<string.length; i++) {
        if (letter === string[i]) {
            count ++;
        }
    }
    return count;
}

console.log(letterCount("n", "nesto smo napisali"))*/

/* task 5

Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1. */

/*function characterPosition(letter, string) {
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            return i;
            console.log(i);
            break;
        } 
    }
    return -1;
}   
    console.log(characterPosition("a", "natalija"));*/


/*task 6
Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/

/*function characterPosition(letter, string) {
    for (var i = string.length; i > 0; i--) {
        if (letter === string[i]) {
            return i;
            console.log(i);
            break;
        } 
    }
    return -1;
}   
    console.log(characterPosition("j", "natalija"));*/

/* task 7
Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]*/

/*function stringToArray(string) {
    var newArr = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newArr[i] = "null"
        } else {
            newArr[i] = string[i];
        }

    }
    return newArr;
}
console.log(stringToArray("rasa nest"));

/* task 8 
Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself
*/

/*function prime(number) {
    for (var i = 2; i <= number; i++) {
        if (number % i === 0 && i !== number) {
            return false;
        }
    }
    return true;
}

console.log(prime(108));*/


/* task 9
 Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"*/

/*function replace(string, separator) {
    var newString = "";

    if (separator) {
        for (var i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                newString += separator;
            } else {
                newString += string[i];
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
console.log(replace("Ovaj string ima razmake"));

/* task 10
 Write a function to get the first n characters and add “...” at the end of newly created string.*/

/*function getFirst (string, number) {
    newString = "";
    for (var i = 0; i < number; i++) {
        newString += string[i];
        if ( i === number-1 ) {
            newString += "..."
        }
    }
    return newString;   
}
console.log(getFirst("ovde nesto pise", 3));*/
