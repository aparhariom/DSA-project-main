/* =========================================================
   SMARTEXAM - ADMIN.JS
   Admin examination and question management
========================================================= */

"use strict";


let questionCounter = 0;


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeAdminPage();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeAdminPage() {

    const form =
        document.getElementById(
            "createExamForm"
        );


    if (!form) {

        return;

    }


    const addButton =
        document.getElementById(
            "addQuestionButton"
        );


    if (addButton) {

        addButton.addEventListener(
            "click",
            function () {

                addQuestion();

            }
        );

    }


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            createExam();

        }
    );


    /*
    Add first question automatically
    */

    addQuestion();

}


/* =========================================================
   ADD QUESTION
========================================================= */

function addQuestion() {

    questionCounter++;


    const container =
        document.getElementById(
            "questionsContainer"
        );


    const emptyMessage =
        document.getElementById(
            "emptyQuestionMessage"
        );


    if (!container) {

        return;

    }


    if (emptyMessage) {

        emptyMessage.style.display =
            "none";

    }


    const questionCard =
        document.createElement(
            "div"
        );


    questionCard.className =
        "question-card";


    questionCard.dataset.questionNumber =
        questionCounter;


    questionCard.innerHTML = `

        <div class="question-card-header">

            <h3>
                Question ${questionCounter}
            </h3>

            <button
                type="button"
                class="remove-question">

                Remove

            </button>

        </div>


        <div class="form-group">

            <label>
                Question *
            </label>

            <textarea
                class="question-text"
                rows="3"
                placeholder="Enter your question..."
                required></textarea>

        </div>


        <div class="options-grid">

            <div class="option-group">

                <label>
                    Option A *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="0"
                    placeholder="Enter option A"
                    required>

            </div>


            <div class="option-group">

                <label>
                    Option B *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="1"
                    placeholder="Enter option B"
                    required>

            </div>


            <div class="option-group">

                <label>
                    Option C *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="2"
                    placeholder="Enter option C"
                    required>

            </div>


            <div class="option-group">

                <label>
                    Option D *
                </label>

                <input
                    type="text"
                    class="question-option"
                    data-option="3"
                    placeholder="Enter option D"
                    required>

            </div>

        </div>


        <div class="question-settings">

            <div class="form-group">

                <label>
                    Correct Answer *
                </label>

                <select
                    class="correct-answer"
                    required>

                    <option value="">
                        Select correct answer
                    </option>

                    <option value="0">
                        Option A
                    </option>

                    <option value="1">
                        Option B
                    </option>

                    <option value="2">
                        Option C
                    </option>

                    <option value="3">
                        Option D
                    </option>

                </select>

            </div>


            <div class="form-group">

                <label>
                    Marks *
                </label>

                <input
                    type="number"
                    class="question-marks"
                    min="1"
                    max="100"
                    value="1"
                    required>

            </div>

        </div>

    `;


    container.appendChild(
        questionCard
    );


    const removeButton =
        questionCard.querySelector(
            ".remove-question"
        );


    removeButton.addEventListener(
        "click",
        function () {

            questionCard.remove();

            renumberQuestions();

        }
    );

}


/* =========================================================
   RENUMBER QUESTIONS
========================================================= */

function renumberQuestions() {

    const cards =
        document.querySelectorAll(
            ".question-card"
        );


    const emptyMessage =
        document.getElementById(
            "emptyQuestionMessage"
        );


    cards.forEach(
        function (
            card,
            index
        ) {

            const heading =
                card.querySelector(
                    "h3"
                );


            if (heading) {

                heading.textContent =
                    `Question ${index + 1}`;

            }

        }
    );


    if (
        cards.length === 0 &&
        emptyMessage
    ) {

        emptyMessage.style.display =
            "block";

    }

}


/* =========================================================
   CREATE EXAM
========================================================= */

function createExam() {

    const title =
        document.getElementById(
            "examTitle"
        ).value.trim();


    const subject =
        document.getElementById(
            "examSubject"
        ).value.trim();


    const duration =
        Number(
            document.getElementById(
                "examDuration"
            ).value
        );


    const description =
        document.getElementById(
            "examDescription"
        ).value.trim();


    /*
    Basic validation
    */

    if (!title) {

        alert(
            "Please enter the exam title."
        );

        return;

    }


    if (!subject) {

        alert(
            "Please enter the exam subject."
        );

        return;

    }


    if (
        !Number.isInteger(duration) ||
        duration <= 0
    ) {

        alert(
            "Please enter a valid exam duration."
        );

        return;

    }


    /*
    Get question cards
    */

    const cards =
        document.querySelectorAll(
            ".question-card"
        );


    if (cards.length === 0) {

        alert(
            "Please add at least one question."
        );

        return;

    }


    const questions = [];


    let questionError =
        false;


    cards.forEach(
        function (
            card,
            index
        ) {

            const text =
                card.querySelector(
                    ".question-text"
                ).value.trim();


            const optionInputs =
                card.querySelectorAll(
                    ".question-option"
                );


            const options =
                Array.from(
                    optionInputs
                ).map(
                    function (input) {

                        return input.value.trim();

                    }
                );


            const correctAnswer =
                card.querySelector(
                    ".correct-answer"
                ).value;


            const marks =
                Number(
                    card.querySelector(
                        ".question-marks"
                    ).value
                );


            if (!text) {

                questionError = true;

                return;

            }


            if (
                options.some(
                    option =>
                        option === ""
                )
            ) {

                questionError = true;

                return;

            }


            if (correctAnswer === "") {

                questionError = true;

                return;

            }


            if (
                !Number.isInteger(marks) ||
                marks <= 0
            ) {

                questionError = true;

                return;

            }


            questions.push({

                id:
                    "q_" +
                    Date.now() +
                    "_" +
                    index,

                text: text,

                options: options,

                answer:
                    Number(
                        correctAnswer
                    ),

                marks: marks

            });

        }
    );


    if (questionError) {

        alert(
            "Please complete all question fields correctly."
        );

        return;

    }


    /*
    Create exam object
    */

    const exam = {

        id:
            "exam_" +
            Date.now(),

        title: title,

        subject: subject,

        duration: duration,

        description:
            description ||
            "Online examination",

        createdAt:
            new Date().toISOString(),

        questions:
            questions

    };


    /*
    Get existing exams
    */

    let exams = [];


    try {

        exams =
            JSON.parse(
                localStorage.getItem(
                    "smartExam_exams"
                )
            ) || [];

    }

    catch (error) {

        exams = [];

    }


    /*
    Add new exam
    */

    exams.push(
        exam
    );


    /*
    Save
    */

    localStorage.setItem(
        "smartExam_exams",
        JSON.stringify(
            exams
        )
    );


    alert(
        "Exam created successfully!"
    );


    /*
    Go to exams page
    */

    window.location.href =
        "../exams.html";

}