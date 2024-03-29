const loginForm = document.getElementById("form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "alokgupta5100@gmail.com" && password === "1234") {
    window.location.href = "welcome.html";
  } else {
    alert("Invaild email or password. Please try again");
  }
  loginForm.reset();
});
