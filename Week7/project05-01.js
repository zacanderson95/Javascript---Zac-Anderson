"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Zac Anderson
      Date: 10/9/2022

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   countdown();
   timeID = window.setInterval(countdown, 1000);
};

function countdown() {
   if (timeLeft = 0) {
      window.clearInterval(timeID);
      var totalCorrect = checkAnswers().value;
         if (totalCorrect = correctAnswers.length) {
            window.alert("Congrats on 100%");
         }
         else {
            window.alert("You scored a " + totalCorrect + "/" + correctAnswers.length);
            var timeLeft = quizTime;
            quizClock.value = timeLeft;
            overlay.className = "hidequiz";
         }
   }
   else {
      timeLeft = timeLeft - 1;
      quizClock.value = timeLeft;
   }

};



















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

