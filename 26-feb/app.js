//ES6 modules

// import greet, { subtraction, add } from "./user.js";
// console.log(add(35,75));
// console.log(subtraction(85,75));
// greet("sam")

// alias for import
// import greet,{ subtraction, add as addition} from "./user.js";
// console.log(addition(35,75));
// console.log(subtraction(85,75));
// greet("sam")

//rename all
// import * as userFunctions from "./user.js"
// import greet from "./user.js";
// console.log(userFunctions.add(35,75));
// console.log(userFunctions.subtraction(85,75));
// greet("sam")

//commonJS module

// const {greet, add}=require("./user");
// console.log(add(35,75));
// greet("sam")