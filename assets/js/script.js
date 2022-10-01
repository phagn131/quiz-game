//  1: create element using tags
//  2: Modify attributes
//  3: Append the element to something on the page

var timeEl = document.querySelector("#timer");
var secondsLeft = 120;
var start = document.getElementById("start-timer");

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till quiz end.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        menubar.HTML="";
      }
  
    }, 1000);
  }

// set var variables

//Set function declaration
//if (x === y) {
//} else (x == y){
//} 

 //log values
 //get the number of pieces from the user and replace the pieceCount
//var pieceCount = parseInt(prompt("How many pieces?"));
//var colors = ["blue", "purple", "red", "yellow", "pink", "brown"];

//console.log(pieceCount);
//for(var i = 0; i < pieceCount; i++){
//  var wrapper = document.createElement("div");
//  var h1Dup = document.createElement("h1");
//  h1Dup.textContent = text;
document.getElementById("start-timer").addEventListener("click",setTime);