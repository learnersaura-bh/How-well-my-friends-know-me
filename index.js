var readlinesync = require("readline-sync")
var userName = readlinesync.question("What is your name ")
console.log("Welcome! ", userName, " to My Quiz and let's see how well do you know me")
var score = 0;

function quiz(question, answer) {
  var userAnswer = readlinesync.question(question)
  if (userAnswer === answer) {
    console.log("Well! Sahi Jawab")
    score = score + 1;
  }
  else {
    console.log("Sorry! Afsos Galat Jawaab")
  }
  console.log("Current Score: ", score)
  console.log("..........................")
}

var questions = [
  {
    question: "where do i live? ",
    answer: "delhi"
  },
  {
    question: "Which musical instrument do i play? ",
    answer: "guitar"
  },
  {
    question: "WHat is my Birth year? ",
    answer: '1999'
  },
  {
    question: "Which is my favourite sports? ",
    answer: "cricket"
  },
  {
    question: "What is my last name? ",
    answer: "rawat"
  }]

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}
console.log("You scored: ", score, "points");
console.log("Thanks for attempting")