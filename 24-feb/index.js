// window and documant events

window.addEventListener("resize", () => console.log("innerwidth",window.innerWidth));
window.addEventListener("offline", () => console.log("offline"));
window.addEventListener("online", () => console.log("online"));

// 8) Clipboard events

// const inpElement=document.getElementById("name");
// document.addEventListener("copy", (e) => {
//     e.clipboardData.setData("text", "Copied from My LMS");
//     e.preventDefault();
// });
// inpElement.addEventListener("copy",()=>{
//   console.log("copy event");
// })
// inpElement.addEventListener("cut",()=>{
//   console.log("cut event");
// })
// inpElement.addEventListener("paste",(e)=>{
//   const data=e.clipboardData.getData("text");
//   console.log("paste event",data);
//   // inpElement.value=data.toUpperCase();

// })
//7) form events
// const loginForm = document.getElementById("loginForm");
// const input = document.getElementById("input");
// const select = document.getElementById("select");
// const checkbox = document.getElementById("checkbox");

// input.focus();
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form submitted");

//   const data = new FormData(loginForm);
//   console.log("formdata of input", data.get("input"));
//   console.log("formdata ", data);
//   loginForm.reset();
// });
// input.addEventListener("focus", () => {
//   console.log("focused");
// });
// input.addEventListener("blur", () => {
//   console.log("blured");
// });
// loginForm.addEventListener("reset", () => {
//   console.log("Form Reset");
// });
// select.addEventListener("change", (e) => {
//   console.log("seelected item", e.target.value);
// });

// checkbox.addEventListener("change", (e) => {
//   console.log(e.target.checked);
// });

// input.addEventListener("input", () => console.log("typing"));
// input.addEventListener("change", () => console.log("changed"));
// input.addEventListener("focus", () => {
//   input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", () => {
//   input.style.border = "1px solid grey";
// });

//6)keyboard event
// const input = document.getElementById("inputElement");
// input.addEventListener("keyup", (e) => {
//   const enteredValue = e.target.value;
//   if (enteredValue.length > 6) console.log("req met");
//   else console.log("req not met");
// });
// input.addEventListener("keydown",(e)=>{
//   console.log("keydown pressed",`key-${e.key} code-${e.code} keyCode-${e.keyCode} ctrlKey-${e.ctrlKey} shiftKey-${e.shiftKey} altKey-${e.altKey} `);

// })

// 5) event delegation
// document.getElementById("container").addEventListener("click",(e)=>{
//   if(e.target.tagName==="BUTTON") console.log(e.target.innerText);

// })

//4) drag and drop - drag start, dragove and drop
// document.addEventListener("wheel", (e) => {
//   console.log( "scrolling",e.deltaX);
// });
// const drag = document.getElementById("drag");
// const drop = document.getElementById("drop");
// drag.addEventListener("dragstart", (e) => {
//   console.log("dragstart");
//   e.dataTransfer.setData("text", "Dragged Element");
// });
// drop.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   console.log("dragover");
// });
// drop.addEventListener("drop", (e) => {
//   e.preventDefault();
//   console.log("drop");
//   drop.appendChild(drag);
//   const data = e.dataTransfer.getData("text");
//   console.log(data)
// });

//3)right click, mouseOver(bubbles) and mouseenter, mouseout(child or parent, will bubble ) and mouseleave(only parent leave)
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');

// parent.addEventListener("mouseout",()=>{
//   console.log("mouseout");

// })
// parent.addEventListener("mouseleave",()=>{
//   console.log("mouseleave");

// })
// document.addEventListener("contextmenu",()=>{
//   alert("right clicked");
// })

// parent.addEventListener("mouseenter", () => {
//   console.log("mouseenter");
// });
// parent.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });

//2) Event bubblingg
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// child.addEventListener('click', (event) => {
//   event.stopPropagation();
//   alert("child");
// });
// parent.addEventListener('click', () => {
//   alert("parent");
// });
// document.body.addEventListener('click', () => {
//   alert("body");
// });

//1) button click event
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("click");
// });
// document.getElementById("btn").addEventListener("mouseup", () => {
//   console.log("relese");
// });
// document.getElementById("btn").addEventListener("mousedown", () => {
//   console.log("press");
// });
