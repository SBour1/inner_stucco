const loginForm = document.querySelector("#login");
const passwordFromForm = document.querySelector("#loginPassword");

const logUserIn = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#loginEmail").value.trim();
  const password = passwordFromForm.value.trim();

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
  } else {
    alert("Email or password not recognized. Please try again.");
  }
};

loginForm.addEventListener("submit", logUserIn);
