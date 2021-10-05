// Date/time update every min. Use setInterval() method.
setInterval(currentTimeHey, 60000);

//grab date/time from moment API 
function currentTimeHey() {
  let dateTime = moment().format('LLLL');
  $("#currentTime").text(dateTime); //display in header
  //console.log(dateTime);  used to check
}

currentTimeHey(); //call fn

//will need to grab and manipulate the children of the divs w/ class of "row"
$(".row").each(function (index, element) { //grab each element w/ this class
  console.log("index", index) // creates an index number for as many divs that have class="row". Spits out 0-8
  console.log($(element).children("button"))
  console.log($(element).children("input"))

  timeChecker(element); //run the timeChecker fn

  // setting inputs with saved tasks
  let task = localStorage.getItem("task-" + index);
  console.log(task);
  $(element).children("input").val(task); //grab input element's value (whatever user typed in) and put it in local storage

  // attaching click listener to each button
  $(element).children("button").click(function (event) {
    event.preventDefault();
    console.log($(element).children("input").val())
    localStorage.setItem("task-" + index, $(element).children("input").val());
  })
})

//styling example: grabbedElVariable.style.color = "color"
// function timeChecker(node) {
//   if ($(node).attr("data-hour") < moment().format('HH')) {
//       ($(node).attr("data-hour").css("background-color", "gray");
//   } else if ($(node).attr("data-hour") === moment().format('HH')) {
//     ($(node).attr("data-hour").css("background-color", "red");
//   }  else {
//     ($(node).attr("data-hour") > moment().format('HH')) 
//   ($(node).attr("data-hour").css("background-color", "green");
//   }
//     console.log($(node).attr("data-hour"))
//     console.log(moment().format('HH'))
//   }

  function timeChecker(node) {
    console.log(node)
    if ($(node).attr("data-hour") < moment().format('HH')) {
        $("input").css("background-color", "gray")
    } else if ($(node).attr("data-hour") === moment().format('HH')) {
      $("input").css("background-color", "red")
    }  else if ($(node).attr("data-hour") > moment().format('HH')) {
      $("input").css("background-color", "green")
    }
      console.log($(node).attr("data-hour"))
      console.log(moment().format('HH'))
    }