var readlineSync = require("readline-sync")
function Greeting() {
  var Player = readlineSync.question("Enter Your Name : ")
  console.log("Hi " + Player + "!\n"+"lets check how well you know about the INDIA")
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (answer.toUpperCase() === userAnswer.toUpperCase()) {
    console.log("Yes Right!")
    score += 1

  }
  else {
    console.log("Wrong")
  }
  console.log("Your current score : ", score)

}

var questions = [{
  question: "What is the capital of INDIA?",
  answer: "New Delhi"
}, {
  question: "Who is Current Prime minister of INDIA?",
  answer: "Narendra Modi"
}, {
  question: "What is national song of INDIA?",
  answer: "Vande Mataram"
}, {
  question: "Who is Current President of INDIA?",
  answer: "Droupadi murmu"
}, {
  question: "How many states are there in India?",
  answer: "28"
}]
Greeting()
var score = 0
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
console.log("Your Final score : ", score)
