let btn = document.querySelector(".submit-btn");
let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
// let subjectInput = document.querySelector(".subject-input");
let messageInput = document.querySelector(".message-input");
let selectBtn= document.querySelector('.select-box button')
let optionBox =document.querySelector('.option-box')
let selectSvg= document.querySelector('.select-box svg')
let bottomBox=document.querySelector('.bottom-box')
let optionList= document.querySelectorAll('.option-box p')


// btn.addEventListener("click", submitForm);
form.addEventListener("submit", submitForm);

function submitForm(a) {
  a.preventDefault();
   let p=document.createElement('p')
    // p.innerText=subjectInput
    bottomBox.append(p)

}

// select action
selectBtn.addEventListener('click',showOption)
function showOption() {
  optionBox.classList.toggle('active')
  selectSvg.classList.toggle("rotate")
  selectSvg.styl
}


for (let index = 0; index < optionList.length; index++) {
optionList[index].addEventListener('click',()=> selectList(optionList[index]))
}

function selectList(event) {
 console.log(event); 
 selectBtn.innerText=event.innerText
 showOption()
}




