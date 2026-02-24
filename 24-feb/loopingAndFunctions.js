// Conditional Statements

// if construct
// if ("") console.log("Hi");
// if (0) console.log("Hi");
// if (NaN) console.log("Hi");
// if (false) console.log("Hi");
// if (undefined) console.log("Hi");
// if (null) console.log("Hi");

// if ("true") console.log("welcome");

// if else and else if construct
// let temperature=20;
// if(temperature<20) console.log("cold");
// else if(temperature>=20&&temperature<30) console.log("okay");
// else console.log("hot");

//if elseif else - range, multiple conditions, different variables
// switch - menu, numberic, command

//switch statement
// let action = "delete";
// switch (action) {
//   case "create":
//   case "update":
//     console.log("Modify data");
//     break;
//   case "delete":
//     console.log("Remove data");
//     break;
//   default:
//     console.log("default action");
// }

//if else - multiple conditions, multipe statements,
// ternary operator - simple cond., assigning values to variable, inside template literals, function return

// const mark=50;
// let status=mark>40?"pass":"Fail";
// console.log(status);
// let age=20;
// let msg = `You are ${age >= 18 ? "Adult" : "Minor"}`;
// console.log(msg);
// let mark = 85;
// let grade = mark >= 90 ? "A" : mark >= 80 ? "B" : mark >= 40 ? "C" : "Fail";
// console.log(grade);

// Looping statements

// for loop

// for (;;) {
// console.log("demo");// INfinite loop because of no condition
// }
// let index = 0;
// for (; index < 5;) {
//     console.log(index++);
// }
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// for (var i = 0; i < 3; i++) {
//     setTimeout((j) => console.log(j), 1000, i);
// }
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for loop - no. of itr is know, index based loop
// while loop - no. itr is not known in advance, loops until a condition is met

// while loop
// let value=0;
// while(value++<=0)
// console.log("demo");

// for of loop
// console.log([1,2,3][Symbol.iterator]);
// console.log({}[Symbol.iterator]);

// const studentNames=["sam","ram","senthil","jai"];
// for(let name of studentNames) console.log(name);

// const studentName="senthil";
// for(let character of studentName) console.log(character);

// for in loop - object , array (will loops through index , not useful)

// const obj = { name:"sam", age:23 };

// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// // forEach loop
// const names=["sam","ram","sree"];
// names.forEach((value,index)=>{
//     console.log(index,"-",value);

// })

//labeled loops
// outerLoop:
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             console.log(i,j)
//             console.log("demo");
//             break outerLoop;
//         }
//     }
// }

//Functions

// functiono declaration
// sayHello()
// function sayHello(){
//     console.log("Hello");
// }

// function printNumbers(num1,num2,num3){
//     console.log(arguments[0])
// }
// printNumbers(1,2,3);

// function expression

// const sayHello = function () {
//   console.log("Helllo");
// };
// sayHello();
// const sayHello = () => console.log("hello");
// sayHello();

// Anonymous function
// setTimeout(function (){
//     console.log("Timer is finished.")
// },1000)

// Arrow function - need this from parent, short callback function and oneline function
//IIFE function - avoid global polution and to create a private scope.
//     (function() {
//     console.log("Runs immediately");
// })();

//callback and HOF

// setTimeout(()=>console.log("welcome back.."),2000
// )

// function parent(demo){
//     demo();
// }
// function child(){
//     console.log("demooo");

// }
// parent(child);

//Constructor and generator function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("Sam", 22);
// console.log(p1.name);

// function* count() {
//     yield 1;
//     return 2;
//     yield 3;
// }
// const c = count();
// console.log(c.next()); 
// console.log(c.next().value); 
// console.log(c.next());

// function* test() {
//   const name = yield "Enter name";
//   yield `Hello ${name}`;
// }

// const t = test();
// console.log(t.next());       
// console.log(t.next("Mohan"));