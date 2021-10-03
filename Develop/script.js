// Global Variables
let saveBtnEl = $(".saveBtn"); //selects all instances of class = "saveBtn"
let descriptionEl = $(".description");//selects all instances of class = "desription"
let hourEl = $(".hour");//selects all instances of class = "hour"


//grab the current date and display it in the header within the p tag with the id of currentDay
let dateTime = moment().format('LLLL');   
console.log(dateTime);
displaydateTime = $("#currentDay").text(dateTime);


$(document).ready(function() { // makes js wait until DOM is loaded

let timeComparison = 
}

})


//save text from time block in local storage when save button clicked
saveBtnEl.click(function() { // we attach this to each element in the .each() method
  console.log(descriptionEl.val());
  localStorage.setItem("task", descriptionEl.val())
})


//problem: there are multiple save buttons and multiple descriptionEls

$(".row").each(function(index, element) {
  console.log("index", index)
  // console.log("element", element)
  console.log($(element).children("button"))
  // look up "this" or use the element
  // select each elements button
  // attach event listener
})



// use jquery to grab all elements on page by class and loop thru them... and then affect their css that way, in that loop. Use data attributes wisely...put a lot of info in your HTML so you can use jquery -->

// jQuery .each() method
 
//styling example: grabbedElVariable.style.color = "color"

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
//   {thirteen: ""},
//   {fourteen: ""},
//   {fifteen: ""},
//   {sixteen: ""},
//   {seventeen: ""}
// ]


// localStorage.setItem("name", "Brooke")

// let name = localStorage.getItem("name")

// console.log(name)