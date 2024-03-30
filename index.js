const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userName = document.getElementById("userName").value;

  if (userName === "Alok" && email === "alokgupta5100@gmail.com" && password === "1234") {
    window.location.href = "https://www.google.com/";
  } else {
    alert("Invaild email or password. Please try again");
  }
  loginForm.reset();
});
