// console.log(" true false trick question");
// console.log("is [] == true ? "+([] == true));
// console.log("is '' == true ? "+('' == true));
// console.log("new Boolean(false) == true? "+ (new Boolean(false) == true));
// console.log("true%1 = "+ true%1);
// console.log("''%1 = "+ ''%1);
// console.log("[] = "+ []);
//basically [] is nothing, empty array, which is kind of false somehow, when it comes to fale == true then it returns false;

// console.log("null vs undefined");
// let temp;
// console.log("current temp is "+ temp); // should be undefined, coz temp never has been assigned with any value
// temp = null;
// console.log("current temp is "+ temp); // should be null now, coz null value has been assigned to temp
// console.log("null == undefined? "+ (null == undefined));

// let temp;
// console.log(temp == undefined);
// console.log(temp == null);
// console.log(null == undefined);


//instance of the date that will give you the next day
// let curDate = new Date();
// console.log(curDate);

//compare two objects
// let a = {a: 10};
// let b = {b: 10};
// console.log("compare a and b "+ compareObject(a,b));
//
// let x = {a: 10};
// let y = {a: 10};
// console.log("compare x and y "+ compareObject(x,y));
//
// function compareObject (a,b) {
//   return JSON.stringify(a) == JSON.stringify(b);
// }

//extend core object or extend class
// Date.prototype.nextDay = function(){
//   let curDate = this.getDate();
//   return new Date(this.setDate(curDate+1));
//   //return new Date(this.setDate(this.getDate()+1));
//   // can use 1/12 if you want to add 6 hours into the current date
// }
//
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.nextDay());

// extend core class to , more example
// String.prototype.reverse = function(){
//   return this.split("").reverse().join("");
// }
//
// console.log('Hello Sam'.reverse());

// arguments and call
// function isFound (){
//   let args = Array.prototype.slice.call(arguments);
//   // console.log(args);
//   return args.indexOf(2) > -1;
// }
//
// console.log(isFound(1,3));
// console.log(isFound(1,2,3,5));

// let arr = [1,2,3,4,5,6];
// let arr2 = [1,2,3,4,5,10];
//
// function getMax(arr){
//   return Math.max.apply(null,arr);
// }
//
// console.log(getMax(arr));

// console.log(Math.max([2,3,4,5])); // need to use apply, call, bind
// console.log(Math.max(2,3,4,5)); // or simply follow the format of Math.max

// //type of
// console.log("6"+ 1+ 2+ 3); //6123
// // '6'+ 1 + 2+ 3. it follows left to right and stronger type first
// console.log(1+ 2+ 3 + '6'); //66
// // 1 + 2+ 3 + '6'. it follows left to right and then stronger type first, so 1+2+3 = 6 and then concatenate with '6'
// console.log(-'2'+5); //3
// // - sign will convert string to number and do the operation
// console.log(-'string'); //NaN
// //result in not a number since string is not convertible to number

// console.log(2&&4);

// hoisting

// var a = 1;
// function b() {
//   a = 10;
//   console.log('local '+a); // local scope of a is assigne with 10
//   return;
//   function a() {} // declaration of a in the local scope
// }
// b();
// console.log(a);
// // a is only update with global since a local has no affect on the global
// // if there is no a declaration, then a will be updated with value of 10


// more hoisting

// function foo(){
//   function bar() {
//     return 3;
//   }
//   return bar();
//   function bar() {
//     return 8;
//   }
// }
// console.log(foo());//? 8 since the last declaration will take over the first one

// it will print only 10

// for(var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// to fix it use closure concept
// for(var i = 0; i < 10; i++) {
//   setTimeout((function(i) {
//     return () => console.log(i)
//   })(i), 1000);
// }

// //using apply
// for(var i = 0; i < 10; i++) {
//   setTimeout(console.log.bind(console,i), 1000);
// }

// // variable and object scope
//
// var num = 10,
//   name = "Sam",
//   obj1 = {
//     value: "first value"
//   },
//   obj2 = {
//     value: "second value"
//   },
//   obj3 = obj2;
// console.log(obj1.value);//"first value"
// console.log(obj2.value);//"new value"
// console.log(obj3.value);//"new value"
//
// function change(num, name, obj1, obj2) {
//   num = num * 10; //pass by value
//   name = "Paul Irish"; //pass by value
//   obj1 = obj2; // assign to local obj1 , the value only scope in this function, while the global remains the same
//   obj2.value = "new value"; // the value will affect glabal as well since we assign to property of obj
//   // console.log('num is'+ num);
//   // console.log('obj 1 value is '+ obj1.value); //'new value' due to local scope
// }
//
// change(num, name, obj1, obj2);
//
// console.log(num); // 10
// console.log(name);// "Sam"
// console.log(obj1.value);//"first value"
// console.log(obj2.value);//"new value"
// console.log(obj3.value);//"new value"


// curry function, take a certain args as pre-process, and then allow to take more args and process later on
// like curry which you keep adding more spice to it along the process of cooking

// function addBase(base){
//   return (num)=> console.log(base + num);
// }
//
// var adder = addBase(10);
// adder(5);
// adder(80);
// adder(-5);

// console.log(typeof NaN);

