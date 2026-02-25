//Async JS

// Async tasks - timers(webAPI), network request(fetch and axios), fs, db operations, event listeners, promise based and async/await

// exe of various async code
// console.log("start..");
// setTimeout(() => {
//   console.log("macrotask queue");
// });
// Promise.resolve().then(() => {
//   console.log("microtask queue");
//   setTimeout(() => {
//     console.log("settimeout inside then..");
//   }, 200);
// });
// console.log("endd");

//callback and callback hell

// function getUser(id, callback) {
//   fetch(`https://dummyjson.com/users/${id}`)
//     .then((res) => res.json())
//     .then((user) => callback(user));
// }

// getUser(1, function (user){
//     console.log(user.id,"user",user.firstName)
// })

// function getUser(id, callback) {
//   fetch(`https://dummyjson.com/users/${id}`)
//     .then((res) => res.json())
//     .then((user) => callback(user));
// }

// function getPosts(uersId, callback) {
//   fetch(`https://dummyjson.com/posts/user/${uersId}`)
//     .then((res) => res.json())
//     .then((posts) => callback(posts));
// }

// function getComments(postId, callback) {
//   fetch(`https://dummyjson.com/comments/post/${postId}`)
//     .then((res) => res.json())
//     .then((comments) => callback(comments));
// }

// getUser(1,function(user){
//     getPosts(user.id,function (posts){
//         getComments(posts.posts[0].id,function(comments){
//             console.log("user",user.id);
//             console.log("posts",posts.posts[0].title);
//             console.log("comments",comments.comments.length);

//         })
//     })
// })

//promise and async/await version

// function getUser(id) {
//   return fetch(`https://dummyjson.com/users/${id}`).then((res) => res.json());
// }
// function getPosts(userId) {
//   return fetch(`https://dummyjson.com/posts/user/${userId}`).then((res) =>
//     res.json(),
//   );
// }
// function getComments(postId) {
//   return fetch(`https://dummyjson.com/comments/post/${postId}`).then((res) =>
//     res.json(),
//   );
// }

//Promise version
// getUser(1)
//   .then((user) => {
//     console.log(user.firstName);
//     return getPosts(user.id);
//   })
//   .then((posts) => {
//     console.log(posts.posts[0].title);
//     return getComments(posts.posts[0].id);
//   })
//   .then((comments) => {
//     console.log(comments.comments.length);
//   })
//   .catch((err) => console.log("ERROR : ", err));

// async/await version

// async function loadAndPrintAPIData() {
//   try {
//     const user = await getUser(1);
//     const posts = await getPosts(user.id);
//     const comments = await getComments(posts.posts[0].id);

//     console.log("userName :", user.firstName);
//     console.log("post title :", posts.posts[0].title);
//     console.log("total comments :", comments.comments.length);
//   } catch (error) {
//     console.log("Error :", error)
//   }
// }
// loadAndPrintAPIData();

// // // Promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("promise resolved"), 2000);
// });

// promise.then((res) => console.log(res));
// console.log(promise);
// setTimeout(()=>console.log(promise),3000)

// //WITH ASYNC AWAIT

// console.log("start");
// async function promiseExecution() {
//   console.log("before promise");
//   const result = await promise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
//   console.log("after promise");
// }
// promiseExecution();
// console.log("end");

// promise methods

// Promise.resolve(10).then(console.log);
// Promise.resolve(10).then(Math.sqrt).then(console.log);

// Promise.reject("Eror").catch(console.log)

// Promise.resolve("promisee one")
//   .then((res) => {
//     console.log("one from p1");
//     return res + "from first callback";
//   })
//   .then((data) => console.log(data));
// Promise.resolve("promisee two")
//   .then((res) => {
//     console.log("one from p2");
//     return res + "from first callback";
//   })
//   .then((data) => console.log(data));

// Promise.All() method

// const promiseOne = Promise.resolve(10);
// // const promiseTwo = Promise.resolve(12);
// const promiseTwo = Promise.reject("error");
// const promiseThree = Promise.resolve(14);

// Promise.all([promiseOne, promiseTwo, promiseThree]).then((res) =>
//   console.log(res),
// ).catch((err)=>console.log(err))

// const timerPromiseOne = new Promise((res) => setTimeout(() => res(10), 4000));
// const timerPromiseTwo = new Promise((res) => setTimeout(() => res(10), 5000));

// timerPromiseOne.then(console.log);
// timerPromiseTwo.then(console.log);
// Promise.all([timerPromiseOne, timerPromiseTwo]).then((data) =>
//   console.log(data),
// );

// promise.allSettled(), race() and any() method

// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("error");
// const p3 = Promise.resolve(30);

// Promise.allSettled([p1, p2, p3])
//   .then(results => console.log(results));

// const p1=new Promise((res)=>setTimeout(()=>res("promise one"),4000));
// const p2=new Promise((res,rej)=>setTimeout(()=>rej("promise  two error"),2000));
// const p3=new Promise((res)=>setTimeout(()=>res("promise three"),3000));

// Promise.race([p1,p2,p3]).then(console.log).catch(console.log)
// Promise.any([p1,p2,p3]).then(console.log).catch(console.log)

// const dummyUsers = fetch("https://dummyjson.com/users/?limit=2")
//   .then((res) => res.json())
//   .then((data) => ({
//     source: "users",
//     data: data,
//   }));

// const dummyPosts = fetch("https://dummyjson.com/posts/user/1")
//   .then((res) => res.json())
//   .then((data) => ({
//     source: "posts",
//     data: data,
//   }));

// Promise.any([dummyUsers, dummyPosts])
//   .then((result) => {
//     console.log("Data from", result.source);
//     console.log("data:", result.data);
//   })
//   .catch((err) => console.log("error from the catch",err));

// async/await

// const fetchPosts = async () => {
//   try {
//     const res = await fetch("https://dummyjson.com/posts/user/1");
//     console.log(res);
//     const posts = await res.json();
//     console.log(posts);
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log("start");
// fetchPosts();
// console.log("end");

// const userName=async()=>{
//     return "sam";
// }
// userName().then(console.log)

//timers - setTimeout,setinterval

// setTimeout(() => console.log("timeout callback"));
// setTimeout(() => console.log("timeout callback two"), 2000);

// setInterval(() => console.log("interval callback"));
// setInterval(() => console.log("interval callback two"), 4000);

const timerId = setTimeout(() => console.log("timerId "),3000);
console.log(timerId);

const timerIdOne = setTimeout(() => console.log("timerIdOne"),3000);
const timerIdTwo = setTimeout(() => console.log("timerIdTwo"),5000);
clearTimeout(timerIdOne)