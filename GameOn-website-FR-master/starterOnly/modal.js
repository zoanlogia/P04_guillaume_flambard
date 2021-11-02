function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ===============================
//         DECLARATIONS
// ===============================

// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const form = document.getElementById('form');
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const locations = document.getElementsByName('location')

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function hide() {
  modalbg.style.display =
    "none";
}

const STATE = {
  name: '',
  lastname: '',
  email: '',
  birthdate: '',
  qtty: '',
  location: '',
  cgu: '',
  newsLetter: ''
}

const initState = () => {

  STATE.name = firstName.value
  STATE.lastname = lastName.value
  STATE.email = email.value
  STATE.birthdate = birthdate.value
  STATE.qtty = quantity.value
  STATE.location = locations
  STATE.cgu = checkbox1.checked
  STATE.newsLetter = checkbox2.checked
}

const isValidDOM = element => {

  element.parentElement.classList.remove('error');
  element.parentElement.classList.add('success');
  element.parentElement.setAttribute('data-error-visible', 'false');
}

const isNotValidDOM = element => {

  element.parentElement.classList.remove('success');
  element.parentElement.classList.add('error');
  element.parentElement.setAttribute('data-error-visible', 'true');
}

const validation = () => {

  STATE.name.length > 2 ? isValidDOM(firstName) : isNotValidDOM(firstName)
  STATE.lastname.length > 2 ? isValidDOM(lastName) : isNotValidDOM(lastName)
  STATE.email.match(regex) && STATE.email !== "" ? isValidDOM(email) : isNotValidDOM(email)
  STATE.birthdate !== "" ? isValidDOM(birthdate) : isNotValidDOM(birthdate)
  STATE.qtty > 0 && STATE.qtty !== "" ? isValidDOM(quantity) : isNotValidDOM(quantity)
  STATE.cgu == true ? isValidDOM(checkbox1) : isNotValidDOM(checkbox1)


  for (var i = 0; i < STATE.location.length; i++) {

    if (STATE.location[i].checked == true) {

      formData[5].classList.remove('error')
      formData[5].classList.add('success')
      formData[5].setAttribute('data-error-visible', 'false')
      return confirm('okk')
    } else {

      formData[5].classList.add('error');
      formData[5].classList.remove('success')
      formData[5].setAttribute('data-error-visible', 'true')
      return false
    }
  }
}

// ===============================
//            INIT
// ===============================

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// on click outside the modal, the modal close

window.onclick = function (e) {
  if (e.target == modalbg) {
    modalbg.style.display = "none";
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  initState()
  validation()

})