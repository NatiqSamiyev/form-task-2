let btn = document.querySelector("button");
let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
let subjectInput = document.querySelector(".subject-input");
let messageInput = document.querySelector(".message-input");
let selectBtn= document.querySelector('.select-box button')
let optionBox =document.querySelector('.option-box')
let selectSvg= document.querySelector('.select-box svg')
// btn.addEventListener("click", submitForm);
form.addEventListener("submit", submitForm);
function submitForm(a) {
  a.preventDefault();
  console.log(subjectInput.value, emailInput.value);
}

// emailInput.addEventListener("");



// select action
selectBtn.addEventListener('click',showOption)
function showOption() {
  // optionBox.style.display= 'block'
  optionBox.classList.toggle('active')
  sele
}