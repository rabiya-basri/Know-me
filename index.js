var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's Your Name ");
console.log("Welcome " +userName+ " to DO YOU KNOW Rabiya Basri?");
var score = 0;
//function play
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("Right!");
    score = score+1;
  }else{
    console.log("Wrong");
    
  }
  console.log("Your CurrentScore is: ",score);
  console.log("_____________");
}

var questions = [{
question:"Where Do I live? ",
  answer:"Bangalore"
},
{
  question:"My favourite colour Would be? ",
  answer:"Black"
},
{
  question:"My favourite SuperHero would be? ",
  answer:"BlackPanther"
},
{
  question:"My favourite Place To Visite? ",
  answer:"Kashmir"},
  {
  question:"Do I like Pet's? ",
  answer:"no"},
  {
  question:"Do I like To Read Books? ",
  answer:"yes"},
];
for(var i=0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("YAY! You SCORED: ", score);