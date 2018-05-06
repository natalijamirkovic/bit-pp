
/*Task 1
    Write a program that calculates the maximum of two given numbers.*/

function calculateMax(num1, num2) {
    if (num1 > num2) {
        return (num1);
    } else {
        return (num2);
    }
}
console.log(calculateMax(3, 4));



/*Task 2
    Write a program that checks if a given number is odd.*/


function isNumOdd(number) {
    if (number % 2 != 0) {
        return "Number is odd!";
    } else {
        return "Number is even!"
    }

}
console.log(isNumOdd(11));



/*Task 3
    Write a program that checks if a given number is a three digit long number.*/


function threeDigitLong(number) {
    if (number < 1000 && number > 99) {
        return "Number is three digit long";
    } else {
        return "Number is not three digit long";
    }
}
console.log(threeDigitLong(24384));



/*Task 4
    Write a program that calculates an arithmetic mean of four numbers.*/


function arithmeticMean(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}
console.log(arithmeticMean(11, 12, 13, 14));



/*Task 5
Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
***** 
*/


function makeSquare(a, b) {
    var star = "*",
    var space = " ",
    var newLine = "\n",
    var result = "";
    function makeTopAndBottom(a) {
        var string = "";
        for (var j = 0; j < a; j++) {
            string += star;
        }
        return string;
    }

    function makeMiddle(a) {
        var string = "";
        for (var k = 0; k < a; k++) {
            if (k === 0 || k === a - 1) {
                string += star;
            } else {
                string += space;
            }
        }
        return string;
    }

    for (var i = 0; i < b; i++) {
        if (i === 0 || i === b - 1) {
            result += makeTopAndBottom(a);
            result += newLine;
        } else {
            result += makeMiddle(a);
            result += newLine;
        }
    }
    return result;
}

console.log(makeSquare(5, 10));



/*Task 6
Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function makeChart() {
    var result = "";
    function makeSingleChart(num) {
        var string = "";
        for (var i = 0; i < num; i++) {
            string += "*";
        }
        return string;
    }
    for (var i = 0; i < arguments.length; i++) {
        result += makeSingleChart(arguments[i]);
        result += "\n";
    }
    return result;
}


console.log(makeChart(6, 3, 7));



/* Task 7
    Write a program that calculates a number of digits of a given number. */

function numberOfDigits(number) {
    var string = "" + number;
    return string.length;
}
console.log(numberOfDigits(3456));



/* Task 8
    Write a program that calculates a number of appearances of a given number in a given array. */


function numOfAppearances(number, array) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (number === array[i]) {
            counter++;
        }
    }
    return counter;
}

console.log(numOfAppearances(3, [3, 453, 3, 45, 34]));



/* Task 9
    Write a program that calculates the sum of odd elements of a given array.*/

function sumOfOdd(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element % 2 !== 0) {
            sum += element;
        }
    }
    return sum;
}
console.log(sumOfOdd([34, 3, 2, 7]));



/* Task 10
    Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A. */


function letterAppearances(letter, string) {
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
        if (letter.toLowerCase() === string[i] || letter.toUpperCase() === string[i]) {
            sum++;
        }
    }
    return sum;
}
console.log(letterAppearances("a", "jdkfjAajd"));



/* Task 11
Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenate(string, number) {
    newString = "";
    for (var i = 0; i < number; i++) {
        newString += string;
    }

    return newString;
}
console.log(concatenate("abcd", 4));