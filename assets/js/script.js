//  1: create element using tags
//  2: Modify attributes
//  3: Append the element to something on the page

const contestant = document.getElementById("contestant");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecetScore");

const HighScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("highScores");

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

contestant.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !contestant.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.prevenDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: contestant.value
  };

  HighScores.push(score);
  

  HighScores.sort( (a,b) => b.score - a.score) 

  HighScores.splice(5);
  localStorage.setItem("highScores", JSON.stringify(HighScores));
  window.location.assign("/");

  console.log(HighScores);

  }

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("body");

var secondsLeft = 20;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left in quiz.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

var highScoresButton = document.getElementById("highscores-btn");
var nextButton = document.getElementById("next-btn");
var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var shuffledQuestions, currentQuestionIndex;

//startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }

  
var questions = [
  {
    question: "Who invented the C programming language?",
    answers: [
      { text: "John Smith", correct: false },
      { text: "Bill Johnson", correct: false },
      { text: "Dennis Ritchie", correct: true },
      { text: "Alan Turing", correct: false },
    ],
  },
  {
    question: "Which is considered to be the computers short-term memory?",
    answers: [
      { text: "REM", correct: false },
      { text: "ROM", correct: false },
      { text: "RAM", correct: true },
      { text: "RIM", correct: false },
    ],
  },

  {
    question: "What allows multiple programs to run on a computer?",
    answers: [
      { text: "NIC", correct: false },
      { text: "OS", correct: true },
      { text: "API", correct: false },
      { text: "GUI", correct: false },
    ],
  },
  {
    question: "What does GUI stand for?",
    answers: [
      { text: "Graphical User Interface", correct: true },
      { text: "Gain Upper Intensity", correct: false },
      { text: "Graph User Interpreter", correct: false },
      { text: "Graphical Unload Items", correct: false },
    ],
  },
];

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}


// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  window.alert("GAME OVER");
}

setTime();

}


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
console.log("Paul, your question?")

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
function addQuestion() {


}