// Global Variables
let saveBtnEl = $(".saveBtn");
let descriptionEl = $(".description");
let hourEl = $(".hour");

// event listner on save button that console.logs the value of the textarea
$(document).ready(function() { // makes js wait until DOM is loaded

})

saveBtnEl.click(function() { // we attach this to each element in the .each() method
  console.log(descriptionEl.val());
  localStorage.setItem("task9", descriptionEl.val())
})

//there are multiple save buttons and multiple descriptionEls

$(".row").each(function(index, element) {
  console.log("index", index)
  // console.log("element", element)
  console.log($(element).children("button"))
  // look up "this" or use the element
  // select each elements button
  // attach event listener
})

// jQuery .each() method

// if (localStorage.getItem("task")) {
//   console.log("true")
// } else {
//   console.log("false")
// }

// let tasks = localStorage.getItem("tasks") ||
// [
//   {nine: ""},
//   {ten: ""},
//   {eleven: ""},
//   {twelve: ""},
//   {one: ""},
//   {two: ""},
//   {three: ""},
//   {four: ""},
//   {five: ""}
// ]


// localStorage.setItem("name", "Brooke")

// let name = localStorage.getItem("name")

// console.log(name)