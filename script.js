var questionEl = document.getElementById('question-block');
var answerEl = document.getElementById('answers-buttons');

var startButton = document.getElementById('startBtn');
var timerEl = document.getElementById('timer-count');
var nextBtn = document.getElementById('next-btn');

// Variables to call out the highscore havent got to this yet
var highscoreEl = document.getElementById('highscore-check');
var feedbackEl = document.getElementById('feedback-block');

var currentQuestionIndex = 0;
var score = 0;
var timer;
var timerCount;

// Lists of the questions as a object 
const quizQuestion = [
    { 
        question: "What is the most general base class from which all element objects in a Document inherit?",
        answers: [
            {btnText: '.children'},
            {btnText: 'class'},
            {btnText: 'Element'},
            {btnText: 'HTML'},
        ],
        correctAnswer: 'Element'
    },
    {
        question: "here is question 2?",
        answers: [
            {btnText: 'Test 1'},
            {btnText: 'Test 2'},
            {btnText: 'Test 3'},
            {btnText: 'Test 4'},
        ],
        correctAnswer: 'Test 1'
    },
    {
        question: "here is question 3?",
        answers: [
            {btnText: 'Test 1'},
            {btnText: 'Test 2'},
            {btnText: 'Test 3'},
            {btnText: 'Test 4'},
        ],
        correctAnswer: 'Test 4'
    },
    {
        question: "here is question 4?",
        answers: [
            {btnText: 'Test 1'},
            {btnText: 'Test 2'},
            {btnText: 'Test 3'},
            {btnText: 'Test 4'},
        ],
        correctAnswer: 'Test 3'
    },

];

// Event listner to ensure the correct function is working 
startButton.addEventListener('click', function(){
    startButton.disable = false;
    startQuiz();
    // startTimer();
    }
);


// Function for starting the Quiz after clicking the start button 
function startQuiz(){
    currentQuestionIndex = 0;
    timerCount = 50;
    // startButton.disabled = true; hide the start button stle.siplay =''
    nextBtn.innerHTML = "Next";
    showQuestion();
    startTimer();
};

// Function that handles the timer for the set of quiz questions beginning with the start button (the timer starts from a high # and descends and when the set of questions are finished then the number it lands will be the score)
function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount > 0){
            // IF the rendered questioned are rendered and completed then I would like the timer to stop and run another funstion to store the timer on local storage  ""setTimeScore()""
            
            console.log('timer is above 0');
        }
        if (timerCount === 0) {
            clearInterval(timer);
            timerEl.textContent = 0;
            console.log('Thanks for taking the quiz');   
        }
        
        // if (timerCount < 0) {
        //     timerEl.textContent = 0;
        //     clearInterval(timer);
        // }

    },1000);
};

// Function for filling up the questions in the question-block not criteria on amount of question (start with 1) 
function showQuestion(){   
    resetState();
    var currentQuestion = quizQuestion[currentQuestionIndex];
    var questionNo = currentQuestionIndex +1;
    questionEl.innerHTML = questionNo + '. ' + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.btnText; // .text is to be use interchageably between "btnText"????
    button.classList.add('btn');
    answerEl.appendChild(button);


    //console.log(typeof(answer.btnText));
  
    // console.log(key);

    if (currentQuestion.correctAnswer){
        button.dataset.answers = quizQuestion.correctAnswer;
        // console.log(button.dataset.answers.valueOf());
    }
    //console.log(currentQuestion.answers);
    //console.log(button.dataset);

    button.addEventListener('click', selectAnswer);
   });
};

function selectAnswer(event){
    var selectedBtn = event.target;
    console.log(selectedBtn.answers); //as of 12:41pm 9.22.23 it is undefined
    
    var isCorrect = selectedBtn.dataset.correctAnswer === "true";
    console.log(isCorrect);

    if (isCorrect){
        selectedBtn.classList.add('correct');
        nextBtn.style.display = 'block';
    }else {
        selectedBtn.classList.add('incorrect');
    }
    
}

function resetState (){
    nextBtn.style.display = 'none';
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild);
    }
};

function init(){
    answerEl.style.display = "none";
    nextBtn.style.display = "none";
};

// init();
