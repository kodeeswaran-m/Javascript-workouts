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

const user = {
  name: "sam",
  greet() {
    console.log(this.name, "user", "this", this);
  },
};
user.greet();

const user1 = {
  name: "sam",
  greet() {
    console.log(this.name, "user1");
  },
};
const fn = user1.greet;
fn();

const user2 = {
  name: "sam",
  greet: () => {
    console.log(this.name, "user2", "this", this);
  },
};
user2.greet();

const user3 = {
  name: "Sam",
  greet() {
    function inner() {
    console.log(this.name, "user3");
    }
    inner();
  },
};

user3.greet();
