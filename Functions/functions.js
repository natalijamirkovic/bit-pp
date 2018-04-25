
// console.log(parseInt(3.577));

// console.log(parseInt("3.577"));

// console.log(parseFloat(3.577));

// console.log(isNaN(3.577));

// console.log(isFinite(3.577));

// console.log(encodeURI(3.577));

// console.log(eval(3.577));

// task 1

// function max(num1, num2) {
//     if (num1 > num2) {
//         return (num1);
//     } else {
//         return (num2);
//     }
// }
// var result = max(4, 5);
// console.log(result);

//task2

// function oddNumbers(a) {
//     if (a % 3 === 0) {
//         return "number is odd";
//     }else {
//         return "number is even"
//     }

// }
// console.log(oddNumbers(4));

//task3

// function threeDigit(a) {
//     if (a < 1000 && a > 99) {
//         return "number has three digits"
//     }else {
//         return "number has more or less digits"
//     }
// }
// console.log(threeDigit(456));

//task4

// function arithmeticMean(a, b, c, d) {
//     return (a + b + c + d) / 4
// }
// console.log(arithmeticMean(4, 5, 6, 4));

//task7

// function numberOfDigits (a) {
//     var string = "" + a;
//     return string.length
// }
// console.log(numberOfDigits(7482374));

//task8

// function numOfApp(number, array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (number === array[i]) {
//             sum++
//         }
//     }
//     return sum
// }
// console.log(numOfApp(1, [4, 56, 1, 15, 1, 4, 1]));

//task9

// function sumOfOdd(array) {
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];

//         if (element % 2 !== 0) {
//             sum += element;
//         }
//     }

//     return sum;
// }

// console.log(sumOfOdd([4, 3, 5, 6, 7]));

//task10

// function numbersOfLetters(letter, string) {
//     var sum = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (letter.toLowerCase() === string[i] || letter.toUpperCase() === string[i]) {
//             sum++
//         }
//     }
//     return sum
// }
// console.log (numbersOfLetters("a", "aDJAlhgdlaaka"));

//task11

// function stringMulti (numberOfTimes, string) {
//     var newString = "";
//     for (var i = 0; i < numberOfTimes; i++) {
//         newString+=string;
        
//     }return newString
// }

// console.log (stringMulti (7, "fgih"));