var questionEl = document.querySelector('#question-block');
var highscoreEl = document.querySelector('#highscore-check');
var answerEl = document.querySelector('#answer-block');
var timerEl = document.querySelector('#timer-count');
var feedbackEl = document.querySelector('#feedback-block');
var startButton = document.querySelector('#startBtn');

var timer;
var timerCount;

// Lists of the questions as a object 
var quizQuestion = [
    {
        question: "here is question 1?",
        answers: {
            a: 'Test 1',
            b: 'Test 2',
            c: 'Test 3',
            d: 'Test 4'
        },
        correctAnswer: 'd'
    },
    {
        question: "here is question 2?",
        answers: {
            a: 'Test 1',
            b: 'Test 2',
            c: 'Test 3',
            d: 'Test 4'
        },
        correctAnswer: 'a'
    },
    {
        question: "here is question 3?",
        answers: {
            a: 'Test 1',
            b: 'Test 2',
            c: 'Test 3',
            d: 'Test 4'
        },
        correctAnswer: 'b'
    },
];


// The init function is called when the page loads
function init(){

};


// Test on the event listner to ensure the correct function is working 
startButton.addEventListener('click', function(){
    for (var i = 0; i < quizQuestion.length; i++)    
    console.log(quizQuestion[i]);

});


// Function that handles the timer for the set of quiz questions beginning with the start button (the timer starts from a high # and descends and when the set of questions are finished then the number it lands will be the score)
function startTimer(){
    timer = setInterval(function(){
        timercount--;
        timerEl.textContent = timerCount;
        if(timerCount >= 0){
            
        }
        // Timer runs out and finishes the 
        if (timerCount === 0){
            clearInterval(timer);
            
        }
    },1000);
};

// Function for starting the Quiz after clicking the start button 
function startQuiz(){
    timerCount = 50;
    startButton.disabled = true;
    renderQuestions();
    startTimer();
};

// Function for filling up the questions in the question-block not criteria on amount of question (start with 1) 
function renderQuestions(){
    for (var i = 0; i < quizQuestion.length ;i++) {
        quizQuestion[i].question;
        quizQuestion[i].answers;
        
    }
};


// Function to check if the selected answer from the user is correct from the set of quiz questions
// Function to provide the feedback phrase after the user selects an answer. This will not continue after choosing the wrong answer.


// Function to place the timer count (this will be used as the score) in the local storage 
function setTimeScored(){
  
};

// Function to prompt placing your name after completing the quiz questions (end of the quiz) 
function recordName(){

};

// Function to place the name in the local storage 
function setName(){

};

// Function to change the web page to represent the highscore after clicking the anchor for highscore link. This will pull the name and timer count from the local storage.
function highscoreResults(){
    
};





