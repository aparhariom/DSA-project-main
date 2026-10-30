document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("studentLoginForm");

    const registerForm =
        document.getElementById("registerForm");


    /*
     * STUDENT LOGIN
     */

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document.getElementById("email")
                    .value.trim();

                const password =
                    document.getElementById("password")
                    .value.trim();


                if (!email || !password) {

                    alert("Please enter email and password.");

                    return;
                }


                /*
                 * Temporary frontend authentication.
                 *
                 * Later this will be replaced
                 * with backend API authentication.
                 */

                localStorage.setItem(
                    "studentLoggedIn",
                    "true"
                );

                localStorage.setItem(
                    "studentEmail",
                    email
                );


                window.location.href =
                    "dashboard.html";

            }
        );

    }


    /*
     * STUDENT REGISTRATION
     */

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name")
                    .value.trim();

                const email =
                    document.getElementById("registerEmail")
                    .value.trim();

                const password =
                    document.getElementById("registerPassword")
                    .value;

                const confirmPassword =
                    document.getElementById("confirmPassword")
                    .value;


                if (
                    password !==
                    confirmPassword
                ) {

                    alert(
                        "Passwords do not match."
                    );

                    return;
                }


                const student = {

                    name: name,

                    email: email,

                    password: password

                };


                localStorage.setItem(
                    "student",
                    JSON.stringify(student)
                );


                alert(
                    "Registration successful!"
                );


                window.location.href =
                    "login.html";

            }
        );

    }

});