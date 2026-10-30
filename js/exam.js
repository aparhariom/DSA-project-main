/*
 * SAMPLE QUESTION DATABASE
 *
 * Later this data will come from MySQL
 * through a Java backend API.
 */


const questions = [

    {
        id: 1,

        question:
            "Which data structure follows the LIFO principle?",

        options: [
            "Queue",
            "Stack",
            "Linked List",
            "Graph"
        ],

        answer: 1,

        marks: 2
    },


    {
        id: 2,

        question:
            "Which data structure follows the FIFO principle?",

        options: [
            "Stack",
            "Tree",
            "Queue",
            "Heap"
        ],

        answer: 2,

        marks: 2
    },


    {
        id: 3,

        question:
            "What is the average time complexity of searching in a hash table?",

        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],

        answer: 2,

        marks: 2
    },


    {
        id: 4,

        question:
            "Which algorithm is commonly used for sorting in O(n log n) time?",

        options: [
            "Bubble Sort",
            "Merge Sort",
            "Linear Search",
            "Sequential Search"
        ],

        answer: 1,

        marks: 2
    },


    {
        id: 5,

        question:
            "Which data structure is commonly used in BFS?",

        options: [
            "Stack",
            "Queue",
            "Heap",
            "Array"
        ],

        answer: 1,

        marks: 2
    }

];


let currentQuestion = 0;


/*
 * Stores student's answers.
 *
 * Example:
 *
 * answers[0] = 1
 * means first question answer is option 1.
 */

const answers =
    new Array(questions.length)
    .fill(null);


/*
 * Stores questions marked
 * for review.
 */

const reviewQuestions =
    new Set();


/*
 * TIMER
 */

let timeLeft = 30 * 60;


function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;


    document.getElementById(
        "timer"
    ).textContent =

        `${String(minutes).padStart(2, "0")}:` +

        `${String(seconds).padStart(2, "0")}`;


    if (timeLeft <= 0) {

        clearInterval(timerInterval);

        submitExam();

        return;
    }


    timeLeft--;

}


const timerInterval =
    setInterval(
        updateTimer,
        1000
    );


/*
 * LOAD QUESTION
 */

function loadQuestion(index) {

    if (
        index < 0 ||
        index >= questions.length
    ) {
        return;
    }


    currentQuestion = index;


    const question =
        questions[index];


    document.getElementById(
        "questionNumber"
    ).textContent =

        `Question ${index + 1}`;


    document.getElementById(
        "questionText"
    ).textContent =

        question.question;


    const optionsContainer =
        document.getElementById(
            "options"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        (option, optionIndex) => {

            const label =
                document.createElement(
                    "label"
                );


            label.className = "option";


            if (
                answers[index] ===
                optionIndex
            ) {

                label.classList.add(
                    "selected"
                );

            }


            label.innerHTML = `

                <input
                    type="radio"
                    name="answer"
                    value="${optionIndex}"
                    ${answers[index] === optionIndex
                        ? "checked"
                        : ""}
                >

                ${option}

            `;


            label
                .querySelector("input")
                .addEventListener(
                    "change",
                    function () {

                        answers[index] =
                            optionIndex;

                        loadQuestion(index);

                    }
                );


            optionsContainer.appendChild(
                label
            );

        }
    );


    renderQuestionNumbers();

}


/*
 * QUESTION NAVIGATION
 */

function nextQuestion() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion(
            currentQuestion
        );

    }

}


function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion(
            currentQuestion
        );

    }

}


/*
 * MARK FOR REVIEW
 */

function markForReview() {

    if (
        reviewQuestions.has(
            currentQuestion
        )
    ) {

        reviewQuestions.delete(
            currentQuestion
        );

    } else {

        reviewQuestions.add(
            currentQuestion
        );

    }


    renderQuestionNumbers();

}


/*
 * QUESTION NAVIGATION PANEL
 */

function renderQuestionNumbers() {

    const container =
        document.getElementById(
            "questionNumbers"
        );


    container.innerHTML = "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                index + 1;


            button.className =
                "question-number";


            if (
                answers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }


            if (
                reviewQuestions.has(index)
            ) {

                button.classList.add(
                    "review"
                );

            }


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            button.addEventListener(
                "click",
                function () {

                    loadQuestion(index);

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/*
 * SUBMIT EXAM
 */

function submitExam() {

    const confirmed =
        confirm(
            "Are you sure you want to submit the exam?"
        );


    if (!confirmed) {

        return;

    }


    clearInterval(
        timerInterval
    );


    let score = 0;


    questions.forEach(
        (question, index) => {

            if (
                answers[index] ===
                question.answer
            ) {

                score +=
                    question.marks;

            }

        }
    );


    const result = {

        score: score,

        totalMarks:
            questions.reduce(
                (total, question) =>
                    total + question.marks,
                0
            ),

        answers: answers,

        date:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "examResult",
        JSON.stringify(result)
    );


    window.location.href =
        "result.html";

}


/*
 * INITIAL LOAD
 */

loadQuestion(0);

updateTimer();