
//logical ||
// console.log("demo"||2);
// console.log(""||2);
// console.log(0||2);
// console.log(null||2);

//logical &&
// console.log("demo"&&2);
// console.log(null&&2);
// console.log(0&&2);
// console.log(null&&false);


// typeof and instanceof operator
// console.log(typeof 23);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof "");
// console.log(typeof [])

// console.log([] instanceof Array);
// console.log([] instanceof Object);
// console.log({} instanceof Object);

//delete, +, -
// const person={
//     name:"sam",
//     id:1232
// }
// console.log(delete person.name);
// console.log(person)

// const arrayOfNumbers=[3,4,5,6,6];
// delete arrayOfNumbers[1];
// console.log(arrayOfNumbers);

// console.log(+"42");
// console.log(+true); 
// console.log(+"");   
// console.log(+"sample");   
// console.log(+null); 
// console.log(+"sample");   
// console.log(+null); 
// console.log(-"sample");   
// console.log(-null); 

//in operator in js
// const arrayOfStringAndNumbers=[1,2,3,"demo","sam"];
// console.log(3 in arrayOfStringAndNumbers);
// const obj={domain:"jlm", startDate:"jan 1999"};
// console.log("domain" in obj)
// console.log("Date" in obj)

// Nullish coalescing operator and || operator
// console.log(0||1)
// console.log(0??1)
// console.log(""||1)
// console.log(""??1)
// console.log(null||1)
// console.log(null??1)
// console.log(undefined||1)
// console.log(undefined??1)
// console.log(null||null)
// console.log(null??null)
// console.log(null??undefined??"demo")
// console.log(null??23??"demo")


//Optional chaining operator .?

// const user={
//     name:"same",
//     address:{
//         city:"chennai",
//         state:"TamilNadu"
//     }
// }
// console.log(user.name);
// console.log(user.office?.name);

// spread and rest operator



// Tagged Templates

// function tag(strings, ...values) {
//     console.log(strings);
//     console.log(values);
//     return [values[0], values[1]]
// }
// const name="sam";
// const age=19;
// console.log(tag`Hello ${name}, welcome and your age is ${age}!`);