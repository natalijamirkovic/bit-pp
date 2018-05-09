/* Task 1

Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */

function duplicate(ar) {
    var newAr = [];
    for (var i = 0; i < ar.length; i++) {
        newAr.push(ar[i])
        newAr.push(ar[i])
    }
    return newAr;
}
console.log(duplicate([2, 4, 7, 11, -2, 1]));


/* Task 2

Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */

function removeDuplicate(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/* Task 3

Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
 
Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function isOdd(array) {
    if (array.length % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd([1, 2, 9, 1, 5]));


function countSmaller(array) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array.length % 2 == 0) {
            return "Error"
        } else if (array[i] < array[(array.length - 1) / 2]) {
            counter++;
        }
    }
    return counter;
}
console.log(countSmaller([1, 2, 8, 4, 1]));

/* Task 4

Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 } */


function smallestElement(array) {
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    var lastIndex = array.lastIndexOf(min)
    var result = {
        minvalue: min,
        minLastIndex: lastIndex
    }
    return result;
}

console.log(smallestElement([1, 4, -2, 11, 8, 1, -2, -2]));


/* Task 5

Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
    Output: [2, 3, -2, 4]
    
Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’] */


function filterSmaller(array, element) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < element) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filterSmaller([2, 3, 8, -2, 11, 4], 6));


function startPro(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if ((array[i][0] === "p" || array[i][0] === "P") && (array[i][1] === "r" || array[i][1] === "R") && (array[i][2] === "o" || array[i][2] === "O")) {
            newArray.push(array[i]);
        }

    }
    return newArray;
}

console.log(startPro(["JavaScript", "Programming", "fun", "product"]));


/* Task 6

Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
	[
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]
Write a function that calculates the total price of your shopping list. 
Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. */


var listOfProducts = [
    {
        name: "apples",
        price: 100
    },
    {
        name: "milk",
        price: 80
    },
    {
        name: "bananas", 
        price: 150   
       },
]








































