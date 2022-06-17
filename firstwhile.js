//Find sum of first 10 natural numbers using while loop


var i = 1,
    n = 0;
while (i <= 10) {
    n += i;
    i++
}
console.log(n); //55


//Print fibbonaci series upto first 10 numbers.
var a = 1,
    b = 2,
    temp, i = 1;
while (i <= 10) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
    i++;
}

// output :- 

// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
//55
//89