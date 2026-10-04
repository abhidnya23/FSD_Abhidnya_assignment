document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        // Get values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value;
        let confirmPassword =
            document.getElementById("confirmPassword").value;


        // Error elements

        let nameError = document.getElementById("nameError");

        let emailError = document.getElementById("emailError");

        let phoneError = document.getElementById("phoneError");

        let passwordError =
            document.getElementById("passwordError");

        let confirmPasswordError =
            document.getElementById("confirmPasswordError");

        let successMessage =
            document.getElementById("successMessage");


        // Clear previous messages

        nameError.innerText = "";

        emailError.innerText = "";

        phoneError.innerText = "";

        passwordError.innerText = "";

        confirmPasswordError.innerText = "";

        successMessage.innerText = "";


        let isValid = true;


        // Name validation

        if (name === "") {

            nameError.innerText = "Name is required.";

            isValid = false;

        } else if (name.length < 3) {

            nameError.innerText =
                "Name must contain at least 3 characters.";

            isValid = false;
        }


        // Email validation

        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            emailError.innerText = "Email is required.";

            isValid = false;

        } else if (!emailPattern.test(email)) {

            emailError.innerText =
                "Please enter a valid email address.";

            isValid = false;
        }


        // Phone validation

        let phonePattern = /^[0-9]{10}$/;

        if (phone === "") {

            phoneError.innerText =
                "Phone number is required.";

            isValid = false;

        } else if (!phonePattern.test(phone)) {

            phoneError.innerText =
                "Phone number must contain 10 digits.";

            isValid = false;
        }


        // Password validation

        if (password === "") {

            passwordError.innerText =
                "Password is required.";

            isValid = false;

        } else if (password.length < 6) {

            passwordError.innerText =
                "Password must contain at least 6 characters.";

            isValid = false;
        }


        // Confirm password

        if (confirmPassword === "") {

            confirmPasswordError.innerText =
                "Please confirm your password.";

            isValid = false;

        } else if (password !== confirmPassword) {

            confirmPasswordError.innerText =
                "Passwords do not match.";

            isValid = false;
        }


        // Final result

        if (isValid) {

            successMessage.innerText =
                "Registration successful!";

            document
                .getElementById("registrationForm")
                .reset();
        }

    });