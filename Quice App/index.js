const questions = [
    {
        question: "What will the following code output? console.log(typeof null);",
        options: ["number", "undefined","object", "null"],
        answer: 2
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: [" Undefined", "Null", "Boolean", " Character"],
        answer: 3
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [" Both A and B", "//", "/* */", " #"],
        answer: 1
    },
    {
        question: "What is the result of 2 + '2' in JavaScript?",
        options: ["4", "22", "undefined", "NaN"],
        answer: 1
    },
    {
        question: "What will the following code output? console.log(0 == '0');",
        options: ["true", "false", "undefined", "TypeError"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = '';

    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        quizDiv.innerHTML += `<h2>${question.question}</h2>`;
        question.options.forEach((option, index) => {
            quizDiv.innerHTML += `<button onclick="checkAnswer(${index})">${option}</button>`;
        });
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];

    if (selectedIndex === question.answer) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const quizDiv = document.getElementById('quiz');
    const resultDiv = document.getElementById('result');

    quizDiv.innerHTML = '';
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
}

function nextQuestion() {
    loadQuestion();
}

loadQuestion();
