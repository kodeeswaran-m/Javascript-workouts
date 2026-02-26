// ES6 features

//Arrow vs normal function in object literals

// const user = {
//   name: "ram",
//   greet: function () {
//     setTimeout(function () {
//       console.log(`Hello ${this.name}`);
//     });
//   },
// };

// user.greet();

// const user = {
//   name: "ram",
//   greet: function () {
//     setTimeout(() => {
//       console.log(`Hello ${this.name}`);
//     });
//   },
// };

// user.greet();

// tagged template

// function tag(strings, ...value){
//     console.log(strings);
//     console.log(value);

// }

// tag `Hello ${"sam"}, Welcome back! ${123}`

// Object destructing

// const user = {
//   name: "sam",
//   age: undefined,
//   email: "sam@gmail.com",
//   address: { city: "chennai", state: "tamilnadu", pincode: 232445 },
// };
// const {
//   name: userName,
//   age = 25,
//   email,
//   address: { city },
// } = user;
// console.log(userName, age, email, city);

// const {name, ...rest}=user;
// console.log(rest);

// const user1 = {};
// const {
//   address: { value },
// } = user1;
// console.log(value);

// property and method shortand

// const name = "sam";
// const age = 23;
// const user = {
//   name,
//   age,
//   greet() {
//     console.log(`welcome back ${this.name}`);
//   },
// };
// user.greet();
// console.log(user);

// const createUser = (key, value) => {
//   return {
//     [key]: value,
//   };
// };
// console.log(createUser("email", "sam@gmail.com"));

//iterator and iterable

// iterable is a data structure that can be iterated over. It implements the method [Symbol.iterator]().
// When we call this method, it returns an iterator.
// iterator is the object returned by an iterable when [Symbol.iterator]() is called.
// It has a next() method which returns objects of the form: { value:, done: }

// const arr = [10,20,30];
// const it = arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// generator function

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = numbers();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Map and map methods in js

// const map1 = new Map();
// const map2 = new Map([
//   ["name", "sam"],
//   ["age", 25],
// ]);
// console.log(map1);
// console.log(map2);

// const map = new Map();
// map.set("name", "Sam");
// map.set("age", 22);
// map.set("number", 9597785984);
// map.set("demo", "demo");

// console.log(map);
// console.log(map.get("name"));
// console.log(map.has("name"));
// console.log(map.delete("demo"));
// console.log(map);
// console.log(map.size);
// console.log(map.clear());
// console.log(map);

// for (const k of map.keys()) console.log(k);
// for (const v of map.values()) console.log(v);
// for (const [k,v] of map.entries()) console.log(k,v);

//seet and its methods

// const set = new Set();
// set.add(33);
// set.add(73);
// set.add(37);
// set.add(22);
// set.add(100);

// console.log(set);
// console.log(set.has(33));
// console.log(set.delete(37));
// console.log(set);
// console.log(set.size);
// console.log(set.clear());
// console.log(set);

// const objectOne={foundedIn:1996};
// Object.assign(objectOne, {companyName:"HDFC"});// nested objects are shared - shallow copyy
// console.log(objectOne)

// const obj=Object.assign({},{a:1},{d:3})
// console.log(obj)

// const user={
// name:"ravi",
// age:30
// };
// Object.defineProperty(user,"name",{
//     enumerable:false
// });

// const demo=Object.assign({},user)
// console.log(demo)

// console.log(Object.is(NaN, NaN))
// console.log(Object.is(0,-0))

// const user={
//     name:"ram",
//     age:25
// }

// const userDetails={
//     collegeName:"BIT",
//     passedOutYear:2020
// }

// Object.defineProperty(userDetails,"passedOutYear",{
//     enumerable:false
// })

// Object.setPrototypeOf(user,userDetails)

// console.log(user.collegeName,user.passedOutYear)

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// numbers.copyWithin(0,5);
// console.log(numbers)

// typed array

// const buffer = new ArrayBuffer(4);
// const buffer2= new ArrayBuffer(8)
// const view = new Uint8Array(buffer);
// const int16 = new Int16Array(buffer2);
// view[0] = 1;
// view[1] = 1;
// view[2] = 0;
// view[3] = 0;

// console.log(view);
// console.log(int16);

// Proxies

// const user = {
//   name: "ram",
//   age: 25,
//   password: "214efwef",
//   email: "sram@gmail.com",
// };

// const proxy = new Proxy(user, {
//   get(target, prop) {
//     console.log(`the prop is ${prop} and its value is ${target[prop]}`);
//     return target[prop];
//   },
//   set(target, prop, value) {
//     if (value < 0) return;
//     console.log(
//       `the prop is ${prop} and its current value is ${target[prop]} and its new value is ${value}`,
//     );
//     target[prop] = value;
//     return value;
//   },
//   has(target, prop) {
//     if (prop === "password") return false;
//     return prop in target;
//   },
//   deleteProperty(target, prop) {
//     if (prop === "name") return;
//     return delete target[prop];
//   },
// });

// console.log(proxy.name);
// proxy.age=-20
// console.log(proxy)
// console.log("password" in proxy);
// console.log(delete proxy.name)
// console.log(delete proxy.email)
// console.log(proxy);

// function addition(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }

// const functionProxy = new Proxy(addition, {
//   apply(target, thisArgs, args) {
//     console.log(`This function is called with ${args}`);
//     if(args[0]<=0&&args[1]<=0) return target(0,0)
//     return target(...args);
//   },
// });

// console.log(functionProxy(-22, -22));
// console.log(functionProxy(22, 22));


// function User(name,age){
//     this.name=name;
//     this.age=age
// }

// const userProxy=new Proxy(User,{
//     construct(target, props){
//         if(props[1]<=18) return new target(props[0],null);
//         return new target(...props)
//     }
// })

// const userOne=new User("ram",12);
// console.log(userOne)


// proxy without reflect


const base = {
  get name() {
    return this._name;
  }
};

const obj = Object.create(base);
obj._name = "Sam";

const proxy = new Proxy(base, {
  get(target, prop) {
    return target[prop]; 
  }
});

const child = Object.create(proxy);
child._name = "Admin";

console.log(child.name);