/*TASK 1
    Why pay a fortune teller when you can just program your fortune yourself?
    Write a function named tellFortune that:
    takes 4 arguments: number of children, partner's name, geographic location, job title.
    outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids. */

var a = (function (numOfChildren, partnersName, geographicLocation, jobTitle) {
    return "You will be a " + jobTitle + " in " + geographicLocation + " and married to " + partnersName + " with " + numOfChildren + " kids.";
}
    ("3", "Dario", "asteroid894", "programer"));

console.log(a);
;

/*TASK 2 
    You know how old your dog is in human years, but what about dog years? Calculate it!

    Write a function named calculateDogAge that:
    takes 1 argument: your puppy's age.
    calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
    Call the function three times with different sets of values.*/

var b = (function (age) {
    var dogyAge = age * 7;
    return dogyAge;
}(6));

console.log(b);



/*TASK 3

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number. */


function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(18, 36);
calculateSupply(28, 3);
calculateSupply(18, 300);



/*TASK 4 
It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

var celsiusToFahrenheit = (function (celsius) {
    return celsius * 1.8 + 32;

}(4));

console.log(celsiusToFahrenheit);


var fahrenheitToCelsius = (function (fahrenheit) {
    return (fahrenheit - 32) / 1.8;
})(4);

console.log(fahrenheitToCelsius);