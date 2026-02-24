// add and remove methods
// const list=[1,2,3];

// const pushedList=list.push(4,5,6,"1");
// console.log(pushedList);
// console.log(list);

// const popedList=list.pop();
// console.log(popedList);
// console.log(list);

// const shiftedList=list.shift();
// console.log(shiftedList);
// console.log(list);

// const unshiftedList=list.unshift(1);
// console.log(unshiftedList);
// console.log(list);

// const splicedList=list.splice(1,2,88,89);
// console.log(splicedList)
// console.log(list)
// list.splice(0,0,23,24);
// console.log(list);
// list.splice(0,1);
// console.log(list)
// list.splice(1);
// console.log(list);
// list.splice(-2);
// console.log(list);

// Slice, concat, at, join methods

// const array=[1,2,3,4,5,[6,7,[33,33],8]];
// const shallowCopy=array.slice();
// array[2]=44;
// array[5][1]=8;
// console.log(array);
// console.log(shallowCopy);
// console.log(array.slice(2));
// console.log(array.slice(-2));

// console.log(array.concat([9,10,[11,12]],13))

// console.log(array[1])
// console.log(array[-1])
// console.log(array.at(1))
// console.log(array.at(-1))
// console.log(array[22])
// console.log(array.at(22))

// console.log(array.join("#"))
// console.log(array.flat().join("#"))
// console.log(array.flat(Infinity).join("#"))

// console.log(array.toString())

//indexOf, includes, find, some and every methods

// const numbers=["2",1,2,6,7,3,2,1];
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(2,5));
// console.log(numbers.lastIndexOf(2));

// console.log(numbers.includes(6));
// console.log(numbers.includes(67));

// console.log(numbers.find(number=>number>6))
// console.log(numbers.findIndex(number=>number>6))
// console.log(numbers.some(number=>number>6))
// console.log(numbers.every(number=>number>6))

// Iteration methods

// const listOfEvenNumbers = [2, 4, 6, 8, 10, 12];
// const listOfNumbers=[1,2,3,4,5,6,7,8,9,10]
// listOfEvenNumbers.forEach((number, index) => console.log(index,"-",number * 2));
// const mofifiedArray = listOfEvenNumbers.map((number) => number * 2);
// console.log(mofifiedArray);
// console.log(listOfNumbers.filter(number=>number%2===0))

// const cartPrices=[200,350,499,10];
// console.log(cartPrices.reduce((total, value)=>total+value,0))

// const users=[
//     {name:"sam", age:18},
//     {name:"ram",age:19},
//     {name:"sree",age:18},
//     {name:"ravi", age:20}
// ];
// const usersByAge=users.reduce((acc,value)=>{
// if(!acc[value.age]) acc[value.age]=[];
// acc[value.age].push(value.name);
// return acc;
// },{});
// console.log(usersByAge)

// const usersByAge=users.reduceRight((acc,value)=>{
// if(!acc[value.age]) acc[value.age]=[];
// acc[value.age].push(value.name);
// return acc;
// },{});
// console.log(usersByAge)

// sort methods (sort and reverse)
// const numbser=[22,15,31,33,18];
// console.log(numbser.sort());
// console.log(numbser.sort((num1,num2)=>num1-num2));
// console.log(numbser.reverse())

//Array creation methods

// console.log(Array.from({length:5}));
// console.log(Array.from("DEMO"));
// console.log(Array.from(new Set([1,2,3])));

// const array=new Array(5);
// console.log(array.fill(0));
// console.log(Array.of(5));

//isArray() and conversion methods
// const array=[21,22,32,24,52,26];
// console.log(Array.isArray([2,3]));
// console.log([1,2,3,[4,5]].toString());
// console.log(array.join("-"));
// console.log(array.entries());
// for(let [index,value] of array.entries()){
//     console.log(index,"-",value);

// }
// for(let value of array.values()){
//     console.log(value);
// }
// for(let key of array.keys()){
//     console.log(key);
// }

//toSorted, toReversed, toSpliced and with

// const array=[22,12,124,55,25,21];
// const modifiedArray=array.toSorted()
// console.log(modifiedArray);
// const sortedArray=array.toSorted((a,b)=>a-b);
// console.log(sortedArray);
// const reversedArray=array.toReversed()
// console.log(reversedArray);
// const splicedArray=array.toSpliced(2,1,24)
// console.log(splicedArray);
// const changedArray=array.with(1,23)
// console.log(changedArray);

// String Methods

//basic methods and properties

// const userName="Sam Salmon";
// console.log(userName.length);
// console.log(userName.charAt(0));
// console.log(userName.charAt(100));
// console.log(userName[100]);
// console.log(userName.at(1));
// console.log(userName.charCodeAt(1));
// console.log(userName.codePointAt(1))

//searchiing and Extraction  methods

// const companyName="Aspire Systems India Pvt Ltd";
// console.log(companyName.toLocaleLowerCase().includes("system"))
// console.log(companyName.indexOf("Pvt"));
// console.log(companyName.indexOf("e",8));
// console.log(companyName.lastIndexOf("e"));
// console.log(companyName.startsWith("In",15));
// console.log(companyName.endsWith("Ltd"));
// console.log(companyName.search("india"));
// console.log(companyName.search(/india/i));

// console.log(companyName.slice(0,15));
// console.log(companyName.slice(-3));
// console.log(companyName.slice(7,1));
// console.log(companyName.substring(0,15));
// console.log(companyName.substring(-3));
// console.log(companyName.substring(7,0));
// console.log(companyName.substr(0,6));
// console.log(companyName.substr(7,0));

//Modifying methods(string)

// const companyName=" Aspire Systems ";
// console.log(companyName.toUpperCase())
// console.log(companyName.toLowerCase())
// console.log(companyName.trim())
// console.log(companyName.trimEnd())
// console.log(companyName.trimStart())
// console.log(companyName.trimStart().repeat(3));
// const phoneNumber="1234567890";
// console.log(phoneNumber.padStart(14,"+91 "));
// console.log(phoneNumber.slice(-4).padStart(phoneNumber.length,"*"));

// replace, split and join

// const companyName="Aspire systems india Public Public ltd";
// console.log(companyName.replace("Public", "pvt"));
// console.log(companyName.replace(/public/ig, "pvt"));
// const productPrice="100 Rupee";
// console.log(productPrice.replace(/\d+/,(val)=>val*2));
// console.log(companyName.replaceAll("Public",""))
// console.log(companyName.split(" ",2))

//match, matchAll, replace
// const string="{name:sam,age:12},{name:ram,age:34}";
// console.log(string.match(/\d+/))
// console.log(string.match(/\d+/g))
// console.log([...string.matchAll(/\d+/g)])

//toString and valueOf

// const value="1002";
// console.log(value.valueOf()*2)
// let strObj = new String("sam");
// console.log(strObj.toString());

//Object methods in js

// const person = {
//   greet(name) {
//     console.log(`Hello ${name}`);
//   },
// };
// const employee = Object.create(person);
// employee.greet("sam");

// const entries = [
//   ["name", "ram"],
//   ["age", 25],
// ];
// const obj = Object.fromEntries(entries);
// console.log(obj);
// let student={
//     name:"sam",
//     rollNumber:122
// }
// Object.defineProperty(student,"emailId",{value:"sam@gmail.com"})
// Object.defineProperty(student,"name",{enumerable:false})
// let symbol=Symbol("id");
// student[symbol]="demo";
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));
// console.log(Object.hasOwn(student,"name"));
// console.log(Object.getOwnPropertyNames(student));
// console.log(Object.getOwnPropertySymbols(student));
// console.log(Object.getOwnPropertyDescriptor(student,"emailId"));
// console.log(Object.getOwnPropertyDescriptors(student));

// const sales = [
//   { item: "Laptop", price: 1200, quantity: 1 },
//   { item: "Mouse", price: 25, quantity: 2 },
//   { item: "Keyboard", price: 75, quantity: 1 }
// ];

// const result=sales.reduce((acc,value)=>{
// if(!acc.name)acc.name=[];
// acc.name.push(value.item);
// if(!acc.total) acc.total=0;
// acc.total+=value.price*value.quantity;
// return acc;
// },{})
// console.log(result)

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 12 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 15 }
// ];

// const result1=people.reduce((acc,value)=>{
//     if(!acc.adults)acc.adults=[];
//     if(!acc.teenagers)acc.teenagers=[];

//     if(value.age>18 ) acc.adults.push(value.name)
//         else acc.teenagers.push(value.name)
//     return acc;
// },{})
// console.log(result1)

const sym = Symbol("id");
const person = {
  [sym]: 123,
  name: "ram",
  age: 22,
};
Object.defineProperty(person, "age", {
  enumerable: false,
});

// const newPerson = Object.create(person);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log(Object.getOwnPropertyDescriptor(person,"age"));
// console.log(Object.getOwnPropertyDescriptors(person));
// console.log(Object.getPrototypeOf(newPerson));



// const student = {};

// Object.defineProperty(student, "age", {
//   get() {
//     return this._age;
//   },
//   set(value) {
//     if (value < 0) throw Error("Invalid age");
//     this._age = value;
//   },
// });
// student.age=-23;
// console.log(student);
