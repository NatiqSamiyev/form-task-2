let btn = document.querySelector("button");
let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
let subjectInput = document.querySelector(".subject-input");
let messageInput = document.querySelector(".message-input");
let selectBtn= document.querySelector('.select-box button')
let optionBox =document.querySelector('.option-box')
let selectSvg= document.querySelector('.select-box svg')
let bottomBox=document.querySelector('.bottom-box')



// btn.addEventListener("click", submitForm);
form.addEventListener("submit", submitForm);

function submitForm(a) {
   let p=document.createElement('p')
    p.innerText=
    bottomBox.append(p)

     a.preventDefault();
     
  
   console.log(p);

 
}

// select action
selectBtn.addEventListener('click',showOption)
function showOption() {
  // optionBox.style.display= 'block'
  optionBox.classList.toggle('active')
  selectSvg.classList.toggle("rotate")
}







