
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
const form = document.getElementById("form");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.getElementsByName("location");
const location1 = document.getElementById("location1");

const pattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function hide() {
  modalbg.style.display = "none";
}

const STATE = {
  name: "",
  lastname: "",
  email: "",
  birthdate: "",
  qtty: "",
  location: "",
  cgu: "",
  newsLetter: "",
};

const initState = () => {
  STATE.name = firstName.value;
  STATE.lastname = lastName.value;
  STATE.email = email.value;
  STATE.birthdate = birthdate.value;
  STATE.qtty = quantity.value;
  STATE.location = [];
  STATE.cgu = checkbox1.checked;
  STATE.newsLetter = checkbox2.checked;
};

const isValidDOM = (element) => {
  element.parentElement.classList.remove("error");
  element.parentElement.classList.add("success");
  element.parentElement.setAttribute("data-error-visible", "false");
};

const isNotValidDOM = (element) => {
  element.parentElement.classList.remove("success");
  element.parentElement.classList.add("error");
  element.parentElement.setAttribute("data-error-visible", "true");
};

const displayConfirmMessage = () => {
  const message = document.querySelector(".confirmation");
  message.style.display = "block";

  setTimeout(() => {
    modalbg.style.display = "none";
  }, 4000);
  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
};

const validation = () => {
  STATE.name.length > 2 ? isValidDOM(firstName) : isNotValidDOM(firstName);
  STATE.lastname.length > 2 ? isValidDOM(lastName) : isNotValidDOM(lastName);
  STATE.email.match(regex) && STATE.email !== ""
    ? isValidDOM(email)
    : isNotValidDOM(email);
  STATE.birthdate.match(pattern) && STATE.birthdate.length == 10 && STATE.birthdate !== ""
    ? isValidDOM(birthdate)
    : isNotValidDOM(birthdate);
  STATE.qtty > 0 && STATE.qtty !== "" && STATE.qtty <= 99 && STATE.qtty >= 1
    ? isValidDOM(quantity)
    : isNotValidDOM(quantity);
  STATE.cgu == true ? isValidDOM(checkbox1) : isNotValidDOM(checkbox1);

  for (let i = 0; locations[i].checked; ++i) {
    STATE.location.push(locations[i].value);
  }

  STATE.location.value !== "" && STATE.location.length > 0
    ? isValidDOM(location1)
    : isNotValidDOM(location1);

  const error = document.querySelector(".error");
  if (error === null) {
    displayConfirmMessage();
  }
};

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
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  initState();
  validation();
  console.log("RESPONSE :", STATE);
});
