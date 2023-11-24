console.log(document.getElementById('option1').innerText);


const questions = [
    {
        question: 'where is paris ',
        // options: ['Paris', 'baku', 'buenos aires', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', ' Cape Town', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'paris'
    },
    {
        question: 'where is baku',
        // options: ['Paris','baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'baku'
    },
    {
        question: 'where is cape town ?',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'cape town'
    },
    {
        question: 'where is tirana ?',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'tirana'
    },
    {
        question: 'where is  tblisi ',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'tblisi'
    },
    {
        question: 'where is  vienna',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'Vienna'
    },
    {
        question: 'where is  ulaanbatar ',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'ulaanbatar'
    },
    {
        question: 'where is Tokyo ' ,
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'tokyo'
    },
    {
        question: 'where is mosscow ',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'mosscow'
    },
    {
        question: 'where is mosscow' ,
        // options: ['Paris', 'baku', ' cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'cairo'
    },
    

    {
        question: 'where is colombo ',
    //   options :  ['Paris', 'baku', 'cape', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', 'Conakry', 'buenos aires '] ,
        correctAnswer: 'colombo'
    },


    {
        question: 'where is ottawa' ,
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'ottawa'
    },

    {
        question: 'where is  canbberra ',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'canberra'
    },

    {
        question: 'where is  conakry',
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'conakry'
    },

    {
        question: 'where is buenos' ,
        // options: ['Paris', 'baku', 'cape town', 'tirana', 'tblisi', 'Vienna', 'ulaanbatar', 'Tokyo', 'Moscow', 'Cairo', 'Colombo', 'Ottawa', 'canberra', '	Conakry', 'buenos aires '],
        correctAnswer: 'buenos aires '
    },
];


let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('questionText');
const result = document.getElementById('result');

displayQuestion();

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    document.getElementById('option1').addEventListener('click', () => checkAnswer(document.getElementById('option1').getAttribute('alt')));
    document.getElementById('option2').addEventListener('click', () => checkAnswer(document.getElementById('option2').getAttribute('alt')));
    document.getElementById('option3').addEventListener('click', () => checkAnswer(document.getElementById('option3').getAttribute('alt')));
    document.getElementById('option4').addEventListener('click', () => checkAnswer(document.getElementById('option4').getAttribute('alt')));
    document.getElementById('option5').addEventListener('click', () => checkAnswer(document.getElementById('option5').getAttribute('alt')));
    document.getElementById('option6').addEventListener('click', () => checkAnswer(document.getElementById('option6').getAttribute('alt')));
    document.getElementById('option7').addEventListener('click', () => checkAnswer(document.getElementById('option7').getAttribute('alt')));
    document.getElementById('option8').addEventListener('click', () => checkAnswer(document.getElementById('option8').getAttribute('alt')));
    document.getElementById('option9').addEventListener('click', () => checkAnswer(document.getElementById('option9').getAttribute('alt')));
    document.getElementById('option10').addEventListener('click', () => checkAnswer(document.getElementById('option10').getAttribute('alt')));
    document.getElementById('option11').addEventListener('click', () => checkAnswer(document.getElementById('option11').getAttribute('alt')));
    document.getElementById('option12').addEventListener('click', () => checkAnswer(document.getElementById('option12').getAttribute('alt')));
    document.getElementById('option13').addEventListener('click', () => checkAnswer(document.getElementById('option13').getAttribute('alt')));
    document.getElementById('option14').addEventListener('click', () => checkAnswer(document.getElementById('option14').getAttribute('alt')));
    document.getElementById('option15').addEventListener('click', () => checkAnswer(document.getElementById('option15').getAttribute('alt')));

    result.textContent = '';
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        result.textContent = 'Correct!';
        score++; 
    } else {
        result.textContent = 'Incorrect! Please try again.';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore(); 
    }
}

function showScore() {
    questionText.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
    for (let i = 1; i <= 15; i++) {
        document.getElementById(`option${i}`).style.display = 'none';
    }
    result.textContent = '';
}