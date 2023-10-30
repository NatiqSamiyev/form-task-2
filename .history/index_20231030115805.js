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
let ul =document.querySelector('ul')

// btn.addEventListener("click", submitForm);
form.addEventListener("submit", submitForm);

function submitForm(a) {
  a.preventDefault();
  ul.innerHTML+=
  `
  <li>
  <div class="image-box">
    <img class="image-1" src="./image/Oval.svg" alt="" />
    <img class="image-2" src="./image/Shape.svg" alt="" />
  </div>
 
  <p></p>
</li>

<li>
  <div class="image-box">
    <img class="image-1" src="./image/Oval.svg" alt="" />
    <img class="image-2" src="./image/Path.svg" alt="" />
  </div>
  <p>${emailInput.value}</p>
</li>

<li>
  <div class="image-box">
    <img class="image-1" src="./image/Oval.svg" alt="" />
    <img class="image-2" src="./image/Shape (1).svg" alt="" />
  </div>
  <p>${</p>
</li>
  
  `

}

// select action
selectBtn.addEventListener('click',showOption)
function showOption() {
  optionBox.classList.toggle('active')
  selectSvg.classList.toggle('no-rotate')
  selectSvg.classList.toggle("rotate")
}


for (let index = 0; index < optionList.length; index++) {
optionList[index].addEventListener('click',()=> selectList(optionList[index]))
}

function selectList(event) {
 console.log(event); 
 selectBtn.innerText=event.innerText
 showOption()
}




