/* =========================================================
   SMARTEXAM - APP.JS
   Main frontend application logic
========================================================= */

"use strict";


/* =========================================================
   STORAGE KEYS
========================================================= */

const STORAGE_KEYS = {

    exams: "smartExam_exams",

    results: "smartExam_results",

    studentLoggedIn: "studentLoggedIn",

    studentEmail: "studentEmail",

    adminLoggedIn: "adminLoggedIn",

    adminEmail: "adminEmail",

    currentExam: "smartExam_currentExam"

};


/* =========================================================
   DEFAULT EXAMS
========================================================= */

const DEFAULT_EXAMS = [

    {
        id: "exam_dsa_001",

        title: "Data Structures & Algorithms",

        subject: "Data Structures",

        duration: 30,

        description:
            "Test your knowledge of arrays, stacks, queues, linked lists and trees.",

        createdAt: new Date().toISOString(),

        questions: [

            {
                id: "q1",

                text:
                    "Which data structure follows LIFO principle?",

                options: [
                    "Queue",
                    "Stack",
                    "Array",
                    "Linked List"
                ],

                answer: 1,

                marks: 1
            },

            {
                id: "q2",

                text:
                    "Which data structure follows FIFO principle?",

                options: [
                    "Stack",
                    "Tree",
                    "Queue",
                    "Graph"
                ],

                answer: 2,

                marks: 1
            },

            {
                id: "q3",

                text:
                    "What is the average time complexity of binary search?",

                options: [
                    "O(n)",
                    "O(log n)",
                    "O(n²)",
                    "O(1)"
                ],

                answer: 1,

                marks: 1
            },

            {
                id: "q4",

                text:
                    "Which data structure consists of nodes connected by edges?",

                options: [
                    "Array",
                    "Stack",
                    "Graph",
                    "Queue"
                ],

                answer: 2,

                marks: 1
            }

        ]

    },


    {

        id: "exam_cpp_001",

        title: "C++ Programming Fundamentals",

        subject: "C++",

        duration: 25,

        description:
            "Test your understanding of C++ programming fundamentals.",

        createdAt: new Date().toISOString(),

        questions: [

            {
                id: "q1",

                text:
                    "Which symbol is used to end a C++ statement?",

                options: [
                    ".",
                    ":",
                    ";",
                    ","
                ],

                answer: 2,

                marks: 1

            },

            {
                id: "q2",

                text:
                    "Which keyword is used to create a class in C++?",

                options: [
                    "object",
                    "class",
                    "structural",
                    "define"
                ],

                answer: 1,

                marks: 1

            },

            {
                id: "q3",

                text:
                    "Which operator is used for scope resolution?",

                options: [
                    ".",
                    "::",
                    "->",
                    ":"
                ],

                answer: 1,

                marks: 1

            }

        ]

    }

];


/* =========================================================
   INITIALIZE APPLICATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeStorage();

        initializeLogout();

        initializeUserInformation();

        initializeExamPage();

    }
);


/* =========================================================
   STORAGE INITIALIZATION
========================================================= */

function initializeStorage() {

    const exams =
        localStorage.getItem(
            STORAGE_KEYS.exams
        );


    if (!exams) {

        localStorage.setItem(
            STORAGE_KEYS.exams,
            JSON.stringify(
                DEFAULT_EXAMS
            )
        );

    }


    const results =
        localStorage.getItem(
            STORAGE_KEYS.results
        );


    if (!results) {

        localStorage.setItem(
            STORAGE_KEYS.results,
            JSON.stringify([])
        );

    }

}


/* =========================================================
   GET EXAMS
========================================================= */

function getExams() {

    try {

        return JSON.parse(
            localStorage.getItem(
                STORAGE_KEYS.exams
            )
        ) || [];

    }

    catch (error) {

        console.error(
            "Unable to read exams:",
            error
        );

        return [];

    }

}


/* =========================================================
   SAVE EXAMS
========================================================= */

function saveExams(exams) {

    localStorage.setItem(
        STORAGE_KEYS.exams,
        JSON.stringify(exams)
    );

}


/* =========================================================
   GET RESULTS
========================================================= */

function getResults() {

    try {

        return JSON.parse(
            localStorage.getItem(
                STORAGE_KEYS.results
            )
        ) || [];

    }

    catch (error) {

        console.error(
            "Unable to read results:",
            error
        );

        return [];

    }

}


/* =========================================================
   SAVE RESULTS
========================================================= */

function saveResults(results) {

    localStorage.setItem(
        STORAGE_KEYS.results,
        JSON.stringify(results)
    );

}


/* =========================================================
   EXAM PAGE
========================================================= */

function initializeExamPage() {

    const examGrid =
        document.getElementById(
            "examGrid"
        );


    if (!examGrid) {

        return;

    }


    const exams =
        getExams();


    updateExamStatistics(
        exams
    );


    populateSubjectFilter(
        exams
    );


    renderExams(
        exams
    );


    const search =
        document.getElementById(
            "examSearch"
        );


    const filter =
        document.getElementById(
            "subjectFilter"
        );


    if (search) {

        search.addEventListener(
            "input",
            function () {

                filterExams(
                    exams
                );

            }
        );

    }


    if (filter) {

        filter.addEventListener(
            "change",
            function () {

                filterExams(
                    exams
                );

            }
        );

    }

}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateExamStatistics(
    exams
) {

    const totalExams =
        document.getElementById(
            "totalExams"
        );


    const totalQuestions =
        document.getElementById(
            "totalQuestions"
        );


    const totalSubjects =
        document.getElementById(
            "totalSubjects"
        );


    if (totalExams) {

        totalExams.textContent =
            exams.length;

    }


    if (totalQuestions) {

        const count =
            exams.reduce(
                function (
                    total,
                    exam
                ) {

                    return total +
                        exam.questions.length;

                },
                0
            );


        totalQuestions.textContent =
            count;

    }


    if (totalSubjects) {

        const subjects =
            new Set(
                exams.map(
                    exam =>
                        exam.subject
                )
            );


        totalSubjects.textContent =
            subjects.size;

    }

}


/* =========================================================
   SUBJECT FILTER
========================================================= */

function populateSubjectFilter(
    exams
) {

    const filter =
        document.getElementById(
            "subjectFilter"
        );


    if (!filter) {

        return;

    }


    const subjects =
        [
            ...new Set(
                exams.map(
                    exam =>
                        exam.subject
                )
            )
        ];


    filter.innerHTML =
        `<option value="all">
            All Subjects
        </option>`;


    subjects.forEach(
        function (subject) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                subject;


            option.textContent =
                subject;


            filter.appendChild(
                option
            );

        }
    );

}


/* =========================================================
   FILTER EXAMS
========================================================= */

function filterExams(
    exams
) {

    const search =
        document.getElementById(
            "examSearch"
        );


    const filter =
        document.getElementById(
            "subjectFilter"
        );


    const searchValue =
        search
            ? search.value
                .trim()
                .toLowerCase()
            : "";


    const subjectValue =
        filter
            ? filter.value
            : "all";


    const filtered =
        exams.filter(
            function (exam) {

                const matchesSearch =
                    exam.title
                        .toLowerCase()
                        .includes(searchValue) ||

                    exam.subject
                        .toLowerCase()
                        .includes(searchValue);


                const matchesSubject =
                    subjectValue === "all" ||
                    exam.subject === subjectValue;


                return (
                    matchesSearch &&
                    matchesSubject
                );

            }
        );


    renderExams(
        filtered
    );

}


/* =========================================================
   RENDER EXAMS
========================================================= */

function renderExams(
    exams
) {

    const grid =
        document.getElementById(
            "examGrid"
        );


    const empty =
        document.getElementById(
            "noExams"
        );


    if (!grid) {

        return;

    }


    grid.innerHTML = "";


    if (exams.length === 0) {

        if (empty) {

            empty.classList.remove(
                "hidden"
            );

        }

        return;

    }


    if (empty) {

        empty.classList.add(
            "hidden"
        );

    }


    exams.forEach(
        function (exam) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "exam-card";


            const questionCount =
                exam.questions
                    ? exam.questions.length
                    : 0;


            card.innerHTML = `

                <div class="exam-card-top">

                    <span class="subject-tag">
                        ${escapeHTML(exam.subject)}
                    </span>

                    <span class="duration">
                        ⏱ ${exam.duration} min
                    </span>

                </div>


                <h2>
                    ${escapeHTML(exam.title)}
                </h2>


                <p>
                    ${escapeHTML(
                        exam.description ||
                        "Online examination"
                    )}
                </p>


                <div class="exam-meta">

                    <span>
                        📝 ${questionCount} Questions
                    </span>

                    <span>
                        🎯 ${
                            getTotalMarks(exam)
                        } Marks
                    </span>

                </div>


                <button
                    class="btn btn-primary start-exam"
                    data-exam-id="${exam.id}">

                    Start Exam →

                </button>

            `;


            grid.appendChild(
                card
            );

        }
    );


    document
        .querySelectorAll(
            ".start-exam"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        startExam(
                            button.dataset.examId
                        );

                    }
                );

            }
        );

}


/* =========================================================
   TOTAL MARKS
========================================================= */

function getTotalMarks(
    exam
) {

    return exam.questions.reduce(
        function (
            total,
            question
        ) {

            return total +
                Number(
                    question.marks || 1
                );

        },
        0
    );

}


/* =========================================================
   START EXAM
========================================================= */

function startExam(
    examId
) {

    const exams =
        getExams();


    const exam =
        exams.find(
            function (item) {

                return item.id === examId;

            }
        );


    if (!exam) {

        alert(
            "Exam could not be found."
        );

        return;

    }


    localStorage.setItem(
        STORAGE_KEYS.currentExam,
        JSON.stringify(exam)
    );


    /*
    This page should be created next:
    student/exam.html
    */

    window.location.href =
        "student/exam.html";

}


/* =========================================================
   LOGOUT
========================================================= */

function initializeLogout() {

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (!logoutButton) {

        return;

    }


    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                STORAGE_KEYS.studentLoggedIn
            );

            localStorage.removeItem(
                STORAGE_KEYS.studentEmail
            );

            localStorage.removeItem(
                STORAGE_KEYS.adminLoggedIn
            );

            localStorage.removeItem(
                STORAGE_KEYS.adminEmail
            );


            window.location.href =
                "index.html";

        }
    );

}


/* =========================================================
   USER INFORMATION
========================================================= */

function initializeUserInformation() {

    const studentEmail =
        localStorage.getItem(
            STORAGE_KEYS.studentEmail
        );


    const adminEmail =
        localStorage.getItem(
            STORAGE_KEYS.adminEmail
        );


    const currentEmail =
        document.getElementById(
            "currentEmail"
        );


    const resultEmail =
        document.getElementById(
            "resultUserEmail"
        );


    const adminEmailElement =
        document.getElementById(
            "adminEmail"
        );


    if (
        studentEmail &&
        currentEmail
    ) {

        currentEmail.textContent =
            studentEmail;

    }


    if (
        studentEmail &&
        resultEmail
    ) {

        resultEmail.textContent =
            studentEmail;

    }


    if (
        adminEmail &&
        adminEmailElement
    ) {

        adminEmailElement.textContent =
            adminEmail;

    }

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        String(value ?? "");


    return div.innerHTML;

}