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
    const usernameResponse = await fetch("/api/users/signup-username", {
      method: "POST",
      body: JSON.stringify({
        name: username,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (usernameResponse.ok) {
      const emailResponse = await fetch("/api/users/signup-email", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (emailResponse.ok) {
        const userResponse = await fetch("/api/users/signup-create", {
          method: "POST",
          body: JSON.stringify({
            name: username,
            email: email,
            password: password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (userResponse.ok) {
          setTimeout(() => {
            document.location.replace("/");
          }, 500);
        } else {
          alert("Server error: Please try again");
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
};

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
};

signupForm.addEventListener("input", validate);
signupForm.addEventListener("submit", registerUser);

validate();
