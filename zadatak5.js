

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

//zadatak 2

var a = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27] ];
for (var i = 0; i < a.length; i++) {
    
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
       
    }

}

var sum = 0;
for (var v = 0; v <= 20; v++){
    sum += v * v;
}

console.log(sum);