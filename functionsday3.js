
//Zadatak9
// function replaceSeparator(string,separator = "-") {
//     var newString = "";

//     for(var i = 0; i < string.length; i++) {
//         if(string[i] === " ") {
//            newString += separator;
//         }else {
//                 newString += string[i]
//         }
//     }
//     return newString;
// }

// console.log(replaceSeparator("Hello World fdgsds gfd",));


//Zadatak 10
function nChar(string, number) {
    var newString = "";

    for (var i = 0; i < number; i++) {
        newString += string[i];
    }
    
    return newString + "...";
}

console.log(nChar("Hello world", 7));


//Zadatak 11

// function arrayOfNum(array) {
//     var newArray = [];

//     for( var i = 0; i < array.length; i++) {
//         if(typeof array[i] === "number" && array[i] !== Infinity && !isNaN(array[i])) {
//             newArray += array[i] + " ";
//         }
//     }
//     return newArray;
// }

// console.log(arrayOfNum([1, 21, undefined, 42, 1e+3, Infinity, NaN]));


//Zadatak 13

// function humanizeNumber(num) {
//     if (typeof num == "undefined") {
//         return;
//     }

//     if (num % 100 >= 11 && num % 100 <= 13) {
//         return num + "th";
//     }

//     switch (num % 10) {
//         case 1:
//             return num + "st";
//             break;
//         case 2:
//             return num + "nd";
//             break;
//         case 3:
//             return num + "rd";
//             break;
//     }
//     return num + "th";
// }

// // Output
// console.log(humanizeNumber());
// console.log(humanizeNumber(1));
// console.log(humanizeNumber(8));
// console.log(humanizeNumber(301));
// console.log(humanizeNumber(402));

// console.log(402%10);








