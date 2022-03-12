// Form elements
const signupForm = document.querySelector("#signup");
const passwordField = document.querySelector("#signupPassword");
const verifyField = document.querySelector("#verifyPassword");
const submitButton = document.querySelector("#submitButton");

const registerUser = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#signupUsername").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();
    const password = passwordField.value.trim();

    
    if (validate()) {

        // Confirms there are no matching usernames in database already
        const usernameResponse = await fetch('/api/users/signup-username', {
            method: "POST",
            body: JSON.stringify({
                name: username
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        // If username is not taken, confirm email is unique
        if (usernameResponse.ok) {

            // Confirms there are no matching emails in database already
            const emailResponse = await fetch('/api/users/signup-email', {
                method: "POST",
                body: JSON.stringify({
                    email: email
                }),
                headers: { 'Content-Type': 'application/json' }
            })

            // If email is not taken, submit user info to create account
            if (emailResponse.ok) {
                const userResponse = await fetch('/api/users/signup-create', {
                    method: "POST",
                    body: JSON.stringify({ 
                        name: username,
                        email: email,
                        password: password
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });

                if (userResponse.ok) {
                    setTimeout(() => {
                        document.location.replace('/');
                    }, 500);
                } else {
                    alert("Server error: Please try again")
                }

            } else {
                alert("Email already exists");
            }

        } else {
            alert("Username already exists");
        }
        
    } else {
        alert(" ");
    }
}


const validate = () => {
    const username = document.querySelector("#signupUsername").value.trim();
    const email = document.querySelector("#signupEmail").value.trim();

    if (
        username.length > 0 &&
        email.length > 0 &&
        checkLength() &&
        verifyPassword()
    ) {
        submitButton.removeAttribute("disabled");
        return true;
    } else {
        submitButton.setAttribute("disabled", "");
        return false;
    }
}



signupForm.addEventListener("input", validate);
signupForm.addEventListener("submit", registerUser);

// Call validate function on page load
validate();