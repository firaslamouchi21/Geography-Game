const questions = [
    {
        question: "what mountain is this?",
        options: [ "Jugurtha Tableland", "Dyr el kef", "Slata mountain"],
        correctAnswer: "Jugurtha Tableland",
        imageUrl: "FEKYYEmXMAc4Qmq.webp",
    },
    {
        question: "what mountain is this?",
        options: ["Jugurtha Tableland", "Dyr Mountain", "Ebbah Mountain"],
        correctAnswer: "Dyr Mountain",
        imageUrl: "jbal_dyr.webp"
    },
    {
        question: "what mountain is this?",
        options: ["Kbouch Mountain", "malleg forest", "foret des pignons"],
        correctAnswer: "malleg forest",
        imageUrl: "https://wildyness.com/uploads/0000/408/2022/05/12/nebeur-el-kef-hammouda-belakhal-wildynesscom.jpg"
    },
    {
        question: "what mountain is this?",
        options: ["Bou reba7 Mountain", "Kbouch Mountain", "Es salla mountain"],
        correctAnswer: "Kbouch Mountain",
        imageUrl: "https://media.discordapp.net/attachments/1171789213491011664/1177274048540057801/b4427b0d96533b2f.jpg?ex=6571e8e5&is=655f73e5&hm=f3db289372655e2ebce1b8288ac94f82aba8663546aa33ae40b7f783bfc4a0cc&=&format=webp&width=1033&height=581"
    },
    {
        question: "what mountain is this?",
        options: ["jbel maiiza", "Ebbah Mountain", "Malleg forest"],
        correctAnswer: "Ebbah Mountain",
        imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNNFDTY4_NSReBI7T4jJ0VlzmxoEl2DB3Bp4t_R=s1360-w1360-h1020"
    }
    
];

let currentQuestion = 0;
let userScore = 0;

function showQuestion() {
    const questionDiv = $("#question");
    const optionsDiv = $("#options");
    const imageContainer = $("#imageContainer");

    questionDiv.text(questions[currentQuestion].question);
    optionsDiv.empty();
    imageContainer.empty();

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const optionBtn = $("<button>").text(questions[currentQuestion].options[i]);
        optionBtn.click(() => checkAnswer(questions[currentQuestion].options[i]));
        optionsDiv.append(optionBtn);
    }

    
    const image = $("<img>").attr("src", questions[currentQuestion].imageUrl);
    imageContainer.append(image);
}


function checkAnswer(selectedAnswer) {
    const resultDiv = $("#result");
    const correctResultDiv = $("#correctResult");
    const incorrectResultDiv = $("#incorrectResult");

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        correctResultDiv.text("Correct! Well done!");
        userScore++;
    } else {
        incorrectResultDiv.text(`Wrong! The correct answer is ${questions[currentQuestion].correctAnswer}.`);
    }

    
    $("#options button").prop("disabled", true);

    
    $("#nextBtn").show();

    
    const imageContainer = $("#imageContainer");

    
    imageContainer.empty();

    const correctAnswerImage = $("<img>").attr("src", questions[currentQuestion].imageUrl);
    imageContainer.append(correctAnswerImage);
}




function nextQuestion() {
    const resultDiv = $("#result");
    const correctResultDiv = $("#correctResult");
    const incorrectResultDiv = $("#incorrectResult");

    
    resultDiv.text("");
    correctResultDiv.text("");
    incorrectResultDiv.text("");
    $("#imageContainer").empty();

   
    $("#options button").prop("disabled", false);

    
    $("#nextBtn").hide();

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        
        $("#question").text("Quiz Completed!");
        $("#options").empty();
        resultDiv.text(`Your Score: ${userScore} out of ${questions.length}`);
    }
}

$(document).ready(function () {
   
    showQuestion();
});