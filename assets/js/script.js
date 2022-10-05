//  1: create element using tags
//  2: Modify attributes
//  3: Append the element to something on the page


const nextButton = document.getElementById("next-btn")

const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")

const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

var shuffledQuestions, currentQuestionIndex 


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
}

)

function startGame(){
  console.log("started")
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() -.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
} 
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}



function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState(){
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct){
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}



const questions = [
  {
    question: "Who invented the C programming language?", 
    answers: [
      { text: "John Smith", correct: false }, 
      { text: "Bill Johnson", correct: false },
      { text: "Dennis Ritchie", correct: true }, 
      { text: "Alan Turing", correct: false }
    ]
  },
  {
    question: "Which is considered to be the computers short-term memory?", 
    answers: [
      { text: "REM", correct: false }, 
      { text: "ROM", correct: false },
      { text: "RAM", correct: true }, 
      { text: "RIM", correct: false }
    ]
  },

{
    question: "What allows multiple programs to run on a computer?", 
    answers: [
      { text: "NIC", correct: false }, 
      { text: "OS", correct: true },
      { text: "API", correct: false }, 
      { text: "GUI", correct: false }
    ]
  },
  {
    question: "What does GUI stand for?", 
    answers: [
      { text: "Graphical User Interface", correct: true }, 
      { text: "Gain Upper Intensity", correct: false },
      { text: "Graph User Interpreter", correct: false }, 
      { text: "Graphical Unload Items", correct: false }
    ]
  },
]

/*var timeEl = document.querySelector("#timer");
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
document.getElementById("start").addEventListener("click", setTime);

/*var timeEl = document.querySelector("#timer");
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
  }*/

