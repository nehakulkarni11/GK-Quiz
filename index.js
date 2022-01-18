const readlineSync = require('readline-sync');
var score = 0;
var player = readlineSync.question("What is your name? ");
console.log("WELCOME " + player + " Let's check your General Knowledge-2022");
console.log("****************************************************");

function game(question, option, answer){
   console.log("OPTIONS ARE: " + option);
  var userAnswer = readlineSync.question(question);
   
   if (userAnswer.toUpperCase()=== answer.toUpperCase()){
    console.log("ABSOLUTELY RIGHT!");
    score = score + 1;
  } else {
    console.log("MEH, NEVERMIND");
  }
  console.log("CURRENT SCORE: " + score);
  console.log("=======================================");
}

let questionData =[{
    question: "1) INDIA'S MOST POPULATED CITY IS? ",
    option: "Mumbai, Chennai, Delhi, Kolkata",
    answer: "Mumbai"
  },{
    question: "2) Giddha is the popular folk dance of? ",
    option: "Bengal, Assam, Punjab, Maharashtra",
    answer: "Punjab"
 },{
   question: "3) About what % is earth's surface water? ",
   option: "71 , 63.3, 47.8, 100",
   answer: "71"
 },{
   question: "4) What country is sushi from? ",
   option: "Indonesia, South Korea, Japan, Malyasia",
   answer: "Japan"
 },{
   question: "5)Longest river on earth is? ",
   option: "Yangtze, Amazon, Nile, Mississippi",
   answer: "Nile"
 },{
    question: "6)Bermuda Triangle is located in which region? ",
    option: "Atlantic, Pacific, Artic, Indian",
    answer: "Atlantic"
  },{
    question: "7)Capital of Finlad is? ",
    option: "Conakry, Parague, Helsinki, Rome",
   answer: "Helsinki"
  },{
    question: "8)White elephants are found in? ",
    option: "Sri Lanka, Malaysia, Thailand, Singapore",
  answer: "Thailand"
  },{
    question: "9) Largest desert on earth is? ",
    option: "Arabian, Thar, Gobi, Sahara",
    answer: "Sahara"
  },{
    question: "10) Planet closest to earth is? ",
    option: "Venus, Jupiter, Mars, Saturn",
    answer: "Venus"
  }
  ]

for (var i=0; i<questionData.length; i++) 
{
  var currentQuestion = questionData[i];
  game(currentQuestion.question, currentQuestion.option, currentQuestion.answer)


}


console.log("YAY!!! You've Scored: " + score);