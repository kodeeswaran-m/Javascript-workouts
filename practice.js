// const date = new Date();
// console.log(new Intl.DateTimeFormat('en-IN').format(date));
// console.log(new Intl.DateTimeFormat('en-US').format(date));

// const amount = 12345678901;
// console.log(new Intl.NumberFormat('en-IN', {
//   style: 'currency',
//   currency: 'INR'
// }).format(amount));
// console.log(new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// }).format(amount));

// const date = new Date();

// const tamilDate = new Intl.DateTimeFormat('ta-IN', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'
// }).format(date);

// console.log(tamilDate);

// const rtf = new Intl.RelativeTimeFormat('ta-IN', { numeric: 'auto' });

// console.log(rtf.format(-1, 'day'));
// console.log(rtf.format(2, 'day'));

// const students = [
//     { id: 1, name: "Sam", marks: [80, 70, 90], city: "Chennai" },
//     { id: 2, name: "Ram", marks: [60, 50, 40], city: "Madurai" },
//     { id: 3, name: "Sree", marks: [100, 90, 95], city: "Chennai" },
//     { id: 4, name: "John", marks: [35, 45, 30], city: "Salem" },
//     { id: 4, name: "John", marks: [70, 75, 64], city: "Salem" },
//   ];

// const orders = [
//   {
//     id: 1,
//     user: "Sam",
//     items: [
//       { name: "Pen", price: 10, qty: 2 },
//       { name: "Book", price: 100, qty: 1 },
//     ],
//   },
//   { id: 2, user: "Ram", items: [{ name: "Bag", price: 500, qty: 1 }] },
// ];

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const products = [
//   { id: 1, name: "Laptop", price: 50000, category: "Electronics", stock: 10 },
//   { id: 2, name: "Phone", price: 20000, category: "Electronics", stock: 0 },
//   { id: 3, name: "Shirt", price: 1500, category: "Clothes", stock: 50 },
//   { id: 4, name: "Shoes", price: 3000, category: "Clothes", stock: 5 },
// ];

// Get all students from Chennai

// const studentsFromChennai=students.filter((student)=>student.city==="Chennai");
// console.log(studentsFromChennai);

// // Add new field averageMarks to each student

// const studentsWithAverageMarks=students.map((student)=>{
//     const average=student.marks.reduce((acc,value)=>acc+value,0)/student.marks.length;
//     return {...student,averageMarks:Math.trunc(average)}
// })
// console.log(studentsWithAverageMarks)

// Get product names where stock = 0

// const outOfStockProduct=products.reduce((acc,product)=>{
//     if(product.stock===0)  acc.push(product.name);
//     return acc;
// },[]);

// const outOfStockProduct = products
//   .filter((product) => product.stock === 0)
//   .map((item) => item.name);

// console.log(outOfStockProduct);

// Flatten the matrix into [1,2,3,4,5,6,7,8,9]

// const flattenedArray=matrix.flat();
// console.log(flattenedArray)

// Get students who passed (average ≥ 50)

// const passedStudents=students.filter((student)=>{
//     const average=student.marks.reduce((acc,val)=>acc+val)/student.marks.length;
//     console.log("average",average)
//     return Math.trunc(average)>=50;

// }).map(item=>item.name)

// console.log(passedStudents);

// Find total order value for each order

// const filteredData=orders.map((order)=>{
//     const totalOrderValue=order.items.reduce((acc,val)=>acc+val.price*val.qty,0);
//     return totalOrderValue;
// })

// console.log(filteredData);

// Convert products array → object {id: product}

// const object=products.reduce((acc,item)=>{
//   acc[item.id]=item;
//     return acc;
// },{})
// console.log(object)

// const objectTwo=Object.fromEntries(products.map((prod)=>[prod.id,prod]));
// console.log(objectTwo)

// Count how many students in each city

// const studentsCount=students.reduce((count,stud)=>{
//   count[stud.city]=(count[stud.city]||0)+1;
//   return count;
// },{});
// console.log(studentsCount);

// Find highest mark student

// const highest=students.reduce((best, stud)=>{
//   const average=Math.trunc(stud.marks.reduce((acc,val)=>acc+val)/stud.marks.length);
//   console.log(average, stud.name)
//   if(!best||average>best.avgMark) return{...stud, avgMark:average};
//   return best;
// },null)

// console.log(highest);

// const highest=students.map((stud)=>({
//   name:stud.name,
//   totalMarks:stud.marks.reduce((tot,val)=>tot+val)
// })).sort((stud1,stud2)=>stud2.totalMarks-stud1.totalMarks);
// console.log(highest[0].name)

// Group products by category

// const prodByCategory=products.reduce((acc,prod)=>{
//   if(!acc[prod.category])
//   acc[prod.category]=[];
//   acc[prod.category].push(prod);

//   return acc;
// },{})

// console.log(prodByCategory);

// Get top 2 students by average marks

// const topTwo=students.map((stud)=>({
//   ...stud,
//   totalmark:stud.marks.reduce((tot,val)=>tot+val)
// })).sort((stud1,stud2)=>stud1.totalmark-stud2.totalmark).slice(-2)

// console.log(topTwo)

// Find total revenue from all orders

// const totalRevenue=orders.reduce((total,order)=>{
//   const sum=order.items.reduce((acc,item)=>acc+item.price*item.qty,0);
//   return total+sum;
// },0)

// console.log(totalRevenue);

// Create array of order item names only

// const orderItemNames=orders.reduce((acc,order)=>{
//   return [...acc,...order.items.map(item=>item.name)]
//   // return acc;
// },[])
// console.log(orderItemNames);

// Find products low stock (<10)

// const lowStockProducts=products.filter((product)=>product.stock<10);
// console.log(lowStockProducts);

// Nested reduce → sum all matrix numbers
// const sum=matrix.reduce((total,item)=>{
//   return total+item.reduce((acc,item)=>acc+item,0)
// },0);
// console.log(sum);

// Convert students → { city : [students] }

// const convertedStudents=students.reduce((acc,student)=>{
//   if(!acc[student.city]) acc[student.city]=[];
//   acc[student.city].push(student);
//   return acc;
// },{})

// console.log(convertedStudents)

// Find student whose total marks closest to 200

// const closest = students.reduce((closest, student) => {
//   const total=student.marks.reduce((acc,val)=>acc+val,0);
//   console.log(total,student.name);

//   if(!closest||Math.abs(total-200)<closest?.close){
//     return {
//       ...student,
//       close:Math.abs(total-200)
//     }
//   }

//   return closest;
// }, null);

// console.log(closest)

// const names = ["sam", "RAM", "sRee", "john doe", "  mohan  "];

// const sentences = [
//   "welcome to mern stack",
//   "javascript is awesome",
//   "react native course available",
// ];

// const emails = ["Sam@Gmail.com", "ram@yahoo.COM", "  sree@outlook.com  "];

// const courseTitles = [
//   "mern-stack-masterclass",
//   "react_native_bootcamp",
//   "angular complete guide",
// ];

// Convert all names → uppercase

// const uppercaseNames=names.map((name)=>name.toUpperCase());
// console.log(uppercaseNames);

// Capitalize first letter of each name

// const capitalisedNames=names.map((name)=>name[0].toUpperCase()+name.slice(1).toLowerCase());
// console.log(capitalisedNames);

// Remove spaces from " mohan "

// const result=names.map((name)=>{
//   if(name.trim()==="mohan") return name.trim();
//   return name;
// })

// console.log(result)

// Count number of characters in each sentence

// const count=sentences.map((sentence)=>{
// return sentence.length;
// })
// console.log(count);
// Check if "javascript" exists in a sentence
// const isExist=sentences.some((sentence)=>{
//   if(sentence.toLowerCase().includes("javascript")) return true;
//   return false;
// })

// console.log(isExist);

// Convert "john doe" → "John Doe"
// console.log(
//   names.map((name) => {
//     if (name === "john doe")
//       return name
//         .split(" ")
//         .map(
//           (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(),
//         ).join(" ");
//     return name;
//   }),
// );

// Convert "mern-stack-masterclass" → "Mern Stack Masterclass"

// const string= "mern-stack-masterclass";
// console.log(string.split("-").map((item)=>item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join(" "));

// Replace all "a" → "@"

// const result=emails.map(email=>{
//   return email.replaceAll('a','@')
// })

// console.log(result);

// Extract domain from emails

// const result=emails.map((email)=>{
//   return email.slice(email.lastIndexOf("@")+1,email.lastIndexOf("."));
// })
// console.log(result)

// const string="sam1000ram2000";
// const result=string.replaceAll(/\d+/g,(str)=>Number(str)+20);
// console.log(result)

const students = {
  s1: { name: "Sam", age: 22, course: "MERN", completed: true },
  s2: { name: "Ram", age: 18, course: "React", completed: false },
  s3: { name: "Sree", age: 25, course: "MERN", completed: true },
};

const course = {
  id: 101,
  title: "MERN Stack",
  price: 5000,
  instructor: {
    name: "John",
    experience: 5,
  },
};

const payments = {
  Sam: 5000,
  Ram: 0,
  Sree: 5000,
};

// Get all student names

// const result=Object.values(students).map((student)=>student.name);
// console.log(result)

// Count total students
// console.log(Object.entries(students).length)

// Get students who completed course
// const result=Object.values(students).filter((student)=>{
//   if(student.completed===true) return student;
// })

// console.log(result)

// Convert payments → { name:"Sam", amount:5000 } format

// const modifiedPayments = Object.entries(payments).reduce((acc, val) => {
//    acc.push({ name: val[0], payments: val[1] });
//    return acc;
// }, []);
// console.log(modifiedPayments)


// Freeze an object and try modifying
// Object.freeze(payments);
// payments.demo=1000;
// console.log(payments);

// Rename key "title" → "courseTitle"
// const result = {...course,courseTitle:course.title};
// delete result.title;
// console.log(result)

// const {title,...rest}=course;
// const resultOne={...rest,courseTitle:title};
// console.log(resultOne);

// Check if object is empty

// Remove all students who didn’t complete course
