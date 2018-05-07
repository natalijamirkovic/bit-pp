/*Task1
*Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"*/

function insertString(string1, string2, position = 1) {
    var newString = "";
    for (var i = 0; i < string1.length; i++) {
        if (i === position - 1) {
            newString += string2;
            newString += string1[i];
        } else {
            newString += string1[i];
        }
    }
    return newString;
}
console.log(insertString("My random string", "JS", 2));


/*Task2
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null] */

function joinElements(array) {
    var newString = "";
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] !== null) {
            newString += array[i];
        }

    }
    return newString;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* Task3 
    Write a program to filter out falsy values from the array.

    [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */


function filterFalsy(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray[newArray.length] = array[i];
        }

    }
    return newArray;
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* Task4 
    Write a function that reverses a number. The result must be a number.
    12345 -> 54321 // Output must be a number */

function reverseNum(number) {
    var string = "" + number;
    var resString = "";
    for (i = string.length - 1; i >= 0; i--) {
        resString += string[i];
    }
    return parseInt(resString);
}


console.log(reverseNum(12345));

/*Task 5
    Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
    [7, 9, 0, -2] -> -2
    [7, 9, 0, -2], 2 -> [0, -2]  */

function getLast(array, n) {
    newArray = [];
    for (i = array.length - n; i < array.length; i++) {
        newArray[newArray.length] = array[i]
    }
    return newArray;
}

console.log(getLast([7, 9, 0, -2], 3));



/* Zadatak 6
    Write a function to create a specified number of elements with pre-filled numeric value array.

    6, 0 -> [0, 0, 0, 0, 0, 0]
    2, "none" -> ["none", "none"]
    2 -> [null, null] */

function a(b, element = null) {
    newArr = [];
    for (var i = 0; i <= b - 1; i++) {
        newArr[i] = element;
    }
    return newArr;
}
console.log(a(5, 3));


/* Zadatak 7
  Write a function that says whether a number is perfect.
  28 -> 28 is a perfect number.
  Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
  E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */


function perfectNumber(number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number ? true : false;
}

console.log(perfectNumber(28));



