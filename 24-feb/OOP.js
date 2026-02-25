// encapsulation and abstraction

// class BankAccount {
//   constructor(balance) {
//     this._balance = balance;
//   }
//   get balance() {
//     return this._balance;
//   }
//   set balance(value) {
//     if (value < 0) {
//       throw Error("negative");
//     }
//     this._balance = value;
//   }
// }
// const bankAcc=new BankAccount(20000);
// console.log(bankAcc.balance)
// bankAcc.balance=25000;
// console.log(bankAcc.balance);

// class User {
//   #balance;
//   constructor(name, balance) {
//     this.name = name;
//     this.#balance = balance;
//     // this.balance = balance;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//     // this.balance += amount;
//   }
// //   get balance() {
// //     return this.#balance;
// //   }
//   getbalance() {
//     return this.#balance;
//     // return this.balance;
//   }
// }
// const user = new User("sam", 5000);
// user.deposit(500);
// console.log(user.balance);
// user.balance = 40000;
// console.log(user.getbalance());

// Inheritance

// Prototype Inheritance
// const user = {
//   login() {
//     console.log("LoggedIn:)");
//     return "successfully";
//   },
// };
// const student = Object.create(user);
// student.name = "sam";
// console.log(student.name);
// console.log(student.login());

//class inheritance

// class User {
//   constructor(name) {
//     this.name = name;
//     console.log("user constructor");
//   }
//   login() {
//     console.log(`${this.name} loggedIn:)`);
//   }
// }
// class Student extends User {
//     // constructor(name){
//     //     super(name);
//     //     console.log("studdent constructor");
//     // }
//   greet() {
//     console.log("Welcome Back!!");
//   }
// }

// const studentOne=new Student("ram");
// studentOne.login();
// studentOne.greet();

//method overriding

// class User {
//   login() {
//     console.log("user login");
//   }
// }
// class Admin extends User {
//   login() {
//     console.log("admin login");
//   }
// }

// const user = new User();
// user.login();

//mixins

// const Employee = {
//     greetEmployee() { console.log("welcome Employee"); }
// };
// const Admin = {
//     greetAdmin() { console.log("welcome admin"); }
// };
// class User {
//     login(){
//         console.log("welcome back!!");
//     }
// }

// Object.assign(User.prototype, Employee, Admin);

// const u = new User();
// u.greetAdmin();
// u.greetEmployee();

// this keyword

// const user = {
//   name: "sam",
//   greet() {
//     console.log(this.name, "user", "this", this);
//   },
// };
// user.greet();

// const user1 = {
//   name: "sam",
//   greet() {
//     console.log(this.name, "user1");
//   },
// };
// const fn = user1.greet;
// fn();

// const user2 = {
//   name: "sam",
//   greet: () => {
//     console.log(this.name, "user2", "this", this);
//   },
// };
// user2.greet();

// const user3 = {
//   name: "Sam",
//   greet() {
//     function inner() {
//     console.log(this.name, "user3");
//     }
//     inner();
//   },
// };

// user3.greet();

//25-feb

// getter and setter methods

// class User {
//   #_name="sam";
//   constructor(name) {
//     this.#_name = name||this.#_name;
//   }
//   get name() {
//     return this.#_name;
//   }
//   set name(value) {
//     this.#_name = value;
//   }
// }
// const sam=new User();
// console.log(sam.name);

// const ram=new User("ram");
// console.log(ram.name)

//Method chaining

// class Inc {
//   constructor(count = 0) {
//     this.count = count;
//   }
//   increment() {
//     this.count += 1;
//     return this;
//   }
// }

// const incrementObj = new Inc();
// incrementObj.increment().increment().increment();
// console.log(incrementObj.count);

// propertyIsEnumerable(), toLocaleString()
// const user={
//   name:"ram",
//   age:10
// }

// Object.defineProperty(user,"name",{
//   enumerable:false
// })

// console.log(user.propertyIsEnumerable("name"));
// console.log(user.propertyIsEnumerable("age"));

// const bankBalance = 1234567;
// console.log(bankBalance.toLocaleString("en-GB"));
// console.log(bankBalance.toLocaleString("en-US"));
// console.log(  bankBalance.toLocaleString("en-IN", {style: "currency", currency: "INR"}));
// console.log(  bankBalance.toLocaleString("en-US", {style: "currency", currency: "USD"}));

// const obj = { name: "sree" };

// console.log(obj.hasOwnProperty("name"));
// console.log(obj.isPrototypeOf({}));
// console.log(obj.propertyIsEnumerable("name"));
// console.log(obj.toString());
// console.log(obj.toLocaleString());
// console.log(obj.valueOf());

//JSON -  text format used to store or transmit data

// const course = {
//   title: "JS",
//   price: 1000,
//   created: new Date()
// };
// console.log(JSON.stringify(course));

//JSON parse
// const jsonData=`{
//   "name":"sam",
//   "age":23,
//   "place":"tiruppur"
// }`;
// console.log(JSON.parse(jsonData))

// const json = '{"name":"ram","price": "100"}';
// console.log(JSON.parse(json));

// const obj = JSON.parse(json, (key, value) => {
//   if (key === "price") return Number(value)
//   return value
// })
// console.log(obj)

//JSON stringify

// const jsObject={
//   company:"Aspire Syatems",
//   "founded in":1996
// };
// console.log(JSON.stringify(jsObject));

//replacer and space formatting args

// console.log(JSON.stringify(jsObject,["company"]));
// console.log(JSON.stringify(jsObject, null, 2));

// rawJSON()
// const data = {
//   info: '{"name":"sam"}'
// };
// console.log(JSON.stringify(data));

// const rawData = {
//   info: JSON.rawJSON('{"name":"sam"}') // not supporting in node js env
// };
// console.log(JSON.stringify(rawData));

// class Payment{
//     constructor(amount){
//         this.amount=amount;
//     }
//     processPayment(){
//       throw  new Error("Implement it in the child class")
//     }
// }

// class UpiPayment extends Payment{
//     #upiId;
//     constructor(upiId,amount){
//         super(amount)
//         this.#upiId=upiId;
//     }
//     processPayment(){
//         console.log(`${this.amount} is processed via UPI.`);

//     }
// }
// class CreditCardPayment extends Payment{
//     #cardNumber;
//     constructor(cardNumber,amount){
//         super(amount)
//         this.#cardNumber=cardNumber;
//     }
//     processPayment(){
//         console.log(`${this.amount} is processed via credit card.`);

//     }
// }

// const paymentOne=new UpiPayment("sam@oksbi",2000);
// const paymentTwo=new CreditCardPayment("1234 4321 2345 5678",7000);

// paymentOne.processPayment();
// paymentTwo.processPayment();

class BankAccount {
  #balance=0;
  constructor(accountHolder) {
    console.log(new.target);
    
    if (new.target === BankAccount) {
      throw new Error("cannot create instance for this class");
    }
    this.accountHolder = accountHolder;
  }
  depost(amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit number");
    }
    this.#balance += amount;
    this.logAction("Deposit", amount);
  }
  withdrawal(amount) {
    if (!this.canWithdraw(amount)) {
      throw new Error("Amount is over the withdrawal limit");
    }
    this.#balance-=amount;
    this.logAction("withdrawal", amount);
  }
  canWithdraw() {
    throw new Error("Implement this function in instance class");
  }
  getBalance() {
    return this.#balance;
  }
  logAction(type, amount) {
    console.log(
      `${type} of Rupees ${amount} from ${this.accountHolder} account.`,
    );
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountHolder) {
    super(accountHolder);
    this.minimumBalance = 1000;
  }
  canWithdraw(amount) {
    return this.getBalance() - amount >= this.minimumBalance;
  }
}
class CurrentAccount extends BankAccount {
  constructor(accountHolder) {
    super(accountHolder);
    this.overDraftLimit = 5000;
  }
  canWithdraw(amount) {
    return this.getBalance() - amount >= -this.overDraftLimit;
  }
}

const saving = new SavingsAccount("sam");
const current = new CurrentAccount("ram");

// saving.depost(5000);
// saving.withdrawal(3000);
// saving.withdrawal(2000);

current.depost(5000);
current.withdrawal(4000);
current.withdrawal(4000);
current.withdrawal(1999);
current.withdrawal(2);