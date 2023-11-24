const questions = [
    {
        question: "Which country does this flag belong to?",
        options: ["Iraq", "Kuwait", "Cuba", "Yemen"],
        correctAnswer: "Cuba",
        imageUrl: "cuba.png",
    },
    {
        question: "Identify the country from the flag.",
        options: ["Mexico", "Australia", "New Zealand", "Canada"],
        correctAnswer: "Canada",
        imageUrl: "canada.png"
    },
    {
        question: "To which country does this flag belong?",
        options: ["Japan", "Cuba", "South Korea", "North Korea"],
        correctAnswer: "North Korea",
        imageUrl: "north-korea.png"
    },
    {
        question: "Identify the country from the flag.",
        options: ["Iran", "Poland", "Romania", "Indonesia"],
        correctAnswer: "Indonesia",
        imageUrl: "indonesia.png"
    },
    {
        question: "To which country does this flag belong?",
        options: ["Palestine", "Jordan", "Uae", "Bahrain"],
        correctAnswer: "Palestine",
        imageUrl: "palestine.png"
    },
    {
        question: "Identify the country from the flag.",
        options: ["Iran", "Somalia", "Iraq", "India"],
        correctAnswer: "Iraq",
        imageUrl: "iraq.png"
    },
    {
        question: "To which country does this flag belong?",
        options: ["Cuba", "Netherlands", "Peru", "Thailand"],
        correctAnswer: "Peru",
        imageUrl: "peru.png"
    },
    {
        question: "Identify the country from the flag.",
        options: ["Australia", "Bolivia", "Lebanon", "New Zealand"],
        correctAnswer: "New Zealand",
        imageUrl: "new-zealand.png"
    },
    {
        question: "To which country does this flag belong?",
        options: ["Pakistan", "Djibouti", "South Korea", "Guatemala"],
        correctAnswer: "Djibouti",
        imageUrl: "djibouti.png"
    },
    {
        question: "The preson Who will answer this question will have a precious gift ",
        options: ["Vatican", "Fiji", "Sri-lanka", "Guatemala"],
        correctAnswer: "Sri-lanka",
        imageUrl: "sri-lanka.png"
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
