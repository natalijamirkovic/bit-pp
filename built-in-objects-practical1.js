
/* Task 1
    Write a function to convert a number from one base (radix) to another. 
    Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
    'ff', 16, 8 -> 377 */

 function convertBase(string, baseInput, baseOutput) {
    var number = parseInt(string, baseInput);
    var convertedBase = number.toString(baseOutput);
     return convertedBase;
 }

console.log(convertBase("ff", 16, 8));




/* Task 2 
    Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
    12345 -> 54321 */


 function reverseNumbers(string) {
     return parseInt(string.split("").reverse().join(""))
 }

console.log(reverseNumbers("12345"));



// task 3
// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

 function sortLetters(string) {
     return string.toLowerCase().split("").sort().join("");
 }

 console.log(sortLetters("Webmaster"));


// task 4
// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"


function sortAlphabeticly(string) {

    var newArray = string.split(" ");
    var newString = "";
    var newArray2 = [];

    for (var i = 0; i < newArray.length; i++) {
        newString = newArray[i].split("").sort().join("");
        newArray2 += newString + " ";
    }

    return newArray2;
}

console.log(sortAlphabeticly("Republic Of Serbia"));



/* Task 5
    Write a function to split a string and convert it into an array of words.
    "John Snow" -> [ 'John', 'Snow' ] */


function splitString(string) {
    return string.split(" ");
}

console.log(splitString("John Snow"));


/* Task 6
    Write a function to convert a string to its abbreviated form. 
    "John Snow" -> 	"John S." */

function convertString(string) {
    var abbrForm = string.split(" ");
    if (abbrForm.length > 1) {
        return (abbrForm[0] + " " + abbrForm[1].charAt(0) + ".");
    }
    return abbrForm[0];
}
console.log(convertString("John Snow"));


/* Task 7
    Write a function that can pad (left, right) a string to get to a determined length.

	'0000', 123, 'l' -> 0123 
    '00000000', 123, 'r' -> 12300000 */

    function newString(pad, string, position)
    {
      if (typeof string === 'undefined') 
        return pad;
      if (position == 'l')
         {
         return (pad + string).slice(-pad.length);
         }
      else 
        {
        return (string + pad).slice(0, pad.length);
        }
    }
    console.log(newString('00000',123,'l'));
    console.log(newString('00000000',123,''));

/* Task 8
    Write a function to capitalize the first letter of a string and returns modified string.
    "js string exercises" -> "Js string exercises" */

function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(toCapitalize("js string exercises"));

/* Task 9 
    Write a function to hide email addresses to protect them from unauthorized users.
    "somerandomaddress@example.com" -> "somerand...@example.com" */

function hideEmail(email) {
    var splitted = email.split("@");
    firstPart = splitted[0];
    bla = firstPart.length / 2;
    firstPart = firstPart.slice(0, (firstPart.length - bla));
    secondPart = splitted[1];
    return firstPart + "...@" + secondPart;
}

console.log(hideEmail("somerandomaddress@example.com"));


/* Task 10 
    Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    "The Quick Brown Fox" -> "tHE qUICK bROWN fOX" */


function swapCase(string) {
    var string = string.split('');
    for (var i = 0; i < string.length; i++) {
        if (string[i] == string[i].toLowerCase()) {
            (string[i]) = string[i].toUpperCase()
        }
        else {
            (string[i]) = string[i].toLowerCase()
        }
    }
    return string.join('');
}
console.log(swapCase('The Quick Brown Fox'));

