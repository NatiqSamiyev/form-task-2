let btn = document.querySelector("button");
let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
let subjectInput = document.querySelector(".subject-input");
let messageInput = document.querySelector(".message-input");

btn.addEventListener("click", submitForm);
form.addEventListener("submit", submitForm);
function submitForm(a) {
  a.preventDefault();

  console.log(subjectInput.value, emailInput.value);
}

// emailInput.addEventListener("");
