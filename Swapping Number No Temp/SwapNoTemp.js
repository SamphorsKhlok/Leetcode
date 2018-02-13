let x = 10;
let y = 5;

console.log("x = "+x + " - y = " +y);
[x,y] = [y,x];
console.log("x = "+x + " - y = " +y);

//using arithmetic
x = x+y; // new x is sum of x+ y
//new y
y = x - y;
x = x - y;

console.log("x = "+x + " - y = " +y);

//using multiply also can
x = x*y;
y = x/y;
x = x/y;
console.log("x = "+x + " - y = " +y);

//the idea is simple as bundle them up and flip flop to one value or others
