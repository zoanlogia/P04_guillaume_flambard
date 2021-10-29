function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
modalbg = document.querySelector(".bground");
modalBtn = document.querySelectorAll(".modal-btn");
form = document.getElementById('form');
formData = document.querySelectorAll(".formData");
closeBtn = document.getElementsByClassName('close');
firstName = document.getElementById("first");
lastName = document.getElementById("last");
email = document.getElementById('email');
birthdate = document.getElementById('birthdate');
quantity = document.getElementById('quantity');
locations = document.getElementsByName('location')
regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
checkbox1 = document.getElementById('checkbox1');
checkbox2 = document.getElementById('checkbox2');
textControl = document.getElementsByClassName('text-control');
firstNameValue = firstName.value.trim()
lastNameValue = lastName.value.trim()
emailValue = email.value.trim()
birthdateValue = birthdate.value.trim()
quantityValue = quantity.value.trim()

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function hide() {
  modalbg.style.display = "none";
}

// on click outside the modal, the modal close

window.onclick = function (e) {
  if (e.target == modalbg) {
    modalbg.style.display = "none";
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validate()
  // return confirm('heeeyyy')
})

function validate() {

  if (firstNameValue === '' || firstNameValue < 2) {
    formData[0].setAttribute('data-error-visible', 'true');
    return false
  } else {
    formData[0].setAttribute('data-error-visible', 'false');
    textControl[0].style.border = "3px solid #31b531"
  }
  if (lastNameValue === '' || lastNameValue < 2) {
    formData[1].setAttribute('data-error-visible', 'true');
    return false
  } else {
    formData[1].setAttribute('data-error-visible', 'false');
    textControl[1].style.border = "3px solid #31b531"
  }
  if (emailValue == emailValue.match(regex) || emailValue == "") {
    formData[2].setAttribute('data-error-visible', 'true');
    return false
  } else {
    formData[2].setAttribute('data-error-visible', 'false');
    textControl[2].style.border = "3px solid #31b531"
  }
  if (birthdateValue == '') {
    formData[3].setAttribute('data-error-visible', 'true');
    return false
  } else {
    formData[3].setAttribute('data-error-visible', 'false');
    textControl[3].style.border = "3px solid #31b531"
  }
  if (isNaN(quantityValue) || quantityValue == '' || quantityValue <= 0 || quantityValue > 99) {
    formData[4].setAttribute('data-error-visible', 'true');
    return false
  } else {
    formData[4].setAttribute('data-error-visible', 'false');
    textControl[4].style.border = "3px solid #31b531"
  }
  if (checkbox1.checked !== true) {
    formData[6].setAttribute('data-error-visible', 'true');
    return false
  } else {
    formData[6].setAttribute('data-error-visible', 'false');
  }
  for (var i = 0; i < locations.length; i++) {
    if (locations[i].checked == false) {
      formData[5].setAttribute('data-error-visible', 'true');
      return false
    } else {
      formData[5].setAttribute('data-error-visible', 'false');
      return true
    }
  }
}