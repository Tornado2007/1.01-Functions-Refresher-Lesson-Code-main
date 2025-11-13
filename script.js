// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here
}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers () {
  // TODO: Write your code here
}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here
}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)
document.getElementById('btnChangeTitle').addEventListener('click', changeTitle)
document.getElementById('btnChangeoutputtextcolor').addEventListener('click', changeOutputTextColor)
document.getElementById('btnChangeBGcolor').addEventListener('click', changeBGColor)
document.getElementById('btnDoubleumber').addEventListener('click', doubleNumber)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Cycle the output box text color (switch to a different color each time clicked).
  3) Change BOTH the text and background color of #out.
  4) Angry Mode (toggle) — switch the Bootstrap theme colors to look "angry."
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

function changeTitle() {
  const title = prompt("What do you want to change the title to?");
  if (!title) {
  render("<div>Please type something here</div>");
  return;
}
else {
  document.getElementById("title").innerHTML = title;
}
}

function changeOutputTextColor(){
let colorIndex = 0;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
colorIndex++;
if (colorIndex >= colors.length) {
  colorIndex = 0;
}}

function changeBGColor(){
document.getElementById("out").classList.remove("bg-light")
let randomColor = Math.floor(Math.random() * 6);
if (randomColor === 0) {
  document.getElementById("out").style.backgroundColor = "red";
// ... (and so on for 1 through 5)
}}

function doubleNumber(){
const num = prompt("Enter a number.");
if (isNaN(num)) {
  render("<div>Please enter an ACTUAL number</div>");
}
else {
  render(num * 2)
}}
