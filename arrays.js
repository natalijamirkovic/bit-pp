var a = ["January", "February", "March","April","May", "June", "July", "August", "September","October","November","December"];
console.log(a[5],a[9],a[0]);

var b = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(b[6]);

var c = [2, -4, 5, -2, -11];
if (c[0]<0) {
    console.log(c[0])
}
if (c[1]<0) {
    console.log(c[1]);
}
if (c[2]<0) {
    console.log(c[2]);
}
if (c[3]<0) {
    console.log(c[3]);
}
if (c[4]<0) {
    console.log(c[4]);
}

var d = [5,15,-5,20,12,18,72,14,9]
if (d[0]%3 === 0) {
    console.log(d[0]);
}
if (d[1]%3 === 0) {
    console.log(d[1]);
}
if (d[2]%3 === 0) {
    console.log(d[2]);
}
if (d[3]%3 === 0) {
    console.log(d[3]);
}
if (d[4]%3 === 0) {
    console.log(d[4]);
}
if (d[5]%3 === 0) {
    console.log(d[5]);
}
if (d[6]%3 === 0) {
    console.log(d[6]);
}
if (d[7]%3 === 0) {
    console.log(d[7]);
}
if (d[8]%3 === 0) {
    console.log(d[8]);
}

var e = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 24], [7, 4, 28, 14], [3,10, 26, 7]];
console.log(e[0][3]);


console.log(e[2]);
console.log(e[2][1]);


var n = [3,5,5];
var sum = 0;
var prod = 1; 
var i = 0;
 
while (i < n.length) {
    sum += n[i];
    prod*=n[i];
    i++
}
console.log(sum,prod);


var a = 1;
var b  = 10;
a = a + b;

console.log(a);


var y = 0;

while (y<15) {
    if (y%2===0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
    y++; 
}
