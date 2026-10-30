/* =========================================================
   SMARTEXAM - RESULT.JS
   Result management and display
========================================================= */

"use strict";


document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeResultsPage();

    }
);


/* =========================================================
   INITIALIZE RESULTS
========================================================= */

function initializeResultsPage() {

    const tableBody =
        document.getElementById(
            "resultsTableBody"
        );


    if (!tableBody) {

        return;

    }


    const results =
        getStoredResults();


    const currentEmail =
        localStorage.getItem(
            "studentEmail"
        );


    /*
    Show current student results
    */

    let studentResults =
        results;


    if (currentEmail) {

        studentResults =
            results.filter(
                function (result) {

                    return (
                        result.studentEmail
                            ?.toLowerCase() ===
                        currentEmail.toLowerCase()
                    );

                }
            );

    }


    updateResultStatistics(
        studentResults
    );


    renderResults(
        studentResults
    );

}


/* =========================================================
   GET RESULTS
========================================================= */

function getStoredResults() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "smartExam_results"
            )
        ) || [];

    }

    catch (error) {

        console.error(
            "Unable to load results:",
            error
        );

        return [];

    }

}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateResultStatistics(
    results
) {

    const attempted =
        document.getElementById(
            "attemptedCount"
        );


    const average =
        document.getElementById(
            "averageScore"
        );


    const best =
        document.getElementById(
            "bestScore"
        );


    if (attempted) {

        attempted.textContent =
            results.length;

    }


    if (results.length === 0) {

        if (average) {

            average.textContent =
                "0%";

        }


        if (best) {

            best.textContent =
                "0%";

        }


        return;

    }


    const percentages =
        results.map(
            function (result) {

                return Number(
                    result.percentage || 0
                );

            }
        );


    const total =
        percentages.reduce(
            function (
                sum,
                value
            ) {

                return sum + value;

            },
            0
        );


    const averageScore =
        total /
        percentages.length;


    const bestScore =
        Math.max(
            ...percentages
        );


    if (average) {

        average.textContent =
            `${averageScore.toFixed(1)}%`;

    }


    if (best) {

        best.textContent =
            `${bestScore.toFixed(1)}%`;

    }

}


/* =========================================================
   RENDER RESULTS
========================================================= */

function renderResults(
    results
) {

    const tableBody =
        document.getElementById(
            "resultsTableBody"
        );


    const empty =
        document.getElementById(
            "noResults"
        );


    if (!tableBody) {

        return;

    }


    tableBody.innerHTML = "";


    if (results.length === 0) {

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


    /*
    Sort latest result first.
    This demonstrates sorting,
    useful for the DSA project.
    */

    const sortedResults =
        [...results].sort(
            function (
                a,
                b
            ) {

                return new Date(
                    b.date
                ) -
                new Date(
                    a.date
                );

            }
        );


    sortedResults.forEach(
        function (result) {

            const row =
                document.createElement(
                    "tr"
                );


            const percentage =
                Number(
                    result.percentage || 0
                );


            const passed =
                result.status === "Passed";


            row.innerHTML = `

                <td>
                    <strong>
                        ${escapeHTML(
                            result.examTitle
                        )}
                    </strong>
                </td>


                <td>
                    ${escapeHTML(
                        result.subject ||
                        "-"
                    )}
                </td>


                <td>
                    ${result.score}
                    /
                    ${result.totalMarks}
                </td>


                <td>
                    <strong>
                        ${percentage.toFixed(1)}%
                    </strong>
                </td>


                <td>

                    <span class="
                        result-status
                        ${passed
                            ? "passed"
                            : "failed"}
                    ">

                        ${
                            passed
                                ? "Passed"
                                : "Failed"
                        }

                    </span>

                </td>


                <td>
                    ${formatDate(
                        result.date
                    )}
                </td>


                <td>

                    <button
                        class="btn btn-small btn-secondary view-result"
                        data-result-id="${result.id}">

                        View

                    </button>

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );


    /*
    Add View buttons
    */

    document
        .querySelectorAll(
            ".view-result"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        showResultDetails(
                            button.dataset.resultId
                        );

                    }
                );

            }
        );

}


/* =========================================================
   RESULT DETAILS
========================================================= */

function showResultDetails(
    resultId
) {

    const results =
        getStoredResults();


    const result =
        results.find(
            function (item) {

                return (
                    item.id === resultId
                );

            }
        );


    if (!result) {

        alert(
            "Result not found."
        );

        return;

    }


    const percentage =
        Number(
            result.percentage || 0
        );


    const message =

        "EXAM RESULT\n\n" +

        "Exam: " +
        result.examTitle +
        "\n\n" +

        "Subject: " +
        result.subject +
        "\n\n" +

        "Score: " +
        result.score +
        " / " +
        result.totalMarks +
        "\n\n" +

        "Percentage: " +
        percentage.toFixed(1) +
        "%\n\n" +

        "Status: " +
        result.status +
        "\n\n" +

        "Date: " +
        formatDate(
            result.date
        );


    alert(
        message
    );

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(
    dateString
) {

    if (!dateString) {

        return "-";

    }


    const date =
        new Date(
            dateString
        );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "-";

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

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
        String(
            value ?? ""
        );


    return div.innerHTML;

}