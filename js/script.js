//console.log('test');
//The "Name" Field
const personName = document.querySelector("#name");
personName.focus();

//"Job Role" Section
var otherJob = document.getElementById("other-job-role");
otherJob.style.display = "none";

let jobOption = document.querySelector("#title");
    jobOption.addEventListener("change", (e) => {
        if(e.target.value === "other") {
            otherJob.style.display = "block";
        } else {
            otherJob.style.display = "none";
        }
});

//"T-Shirt Info" Section
var designChosen = document.getElementById("shirt-designs");
var shirtColor = document.getElementById("color");
    shirtColor.disabled = true;
var colorOption = shirtColor.children;

designChosen.addEventListener('change', (e) => {
    shirtColor.disabled = false;
    for (let i = 0; i < colorOption.length; i ++) {
        if (e.target.value === colorOption[i].getAttribute("data-theme")) {
            colorOption[i].hidden = false;
            colorOption[i].setAttribute("selected", true);
        } else {
            colorOption[i].hidden = true;
            colorOption[i].removeAttribute("selected");
        }
    }
});

//"Register for Activities" Section
const registration = document.getElementById("activities");
const total = document.getElementById("activities-cost");
let totalCost = 0;
const checkbox = document.querySelectorAll("input[type=checkbox]");

registration.addEventListener("change", (e) => {
    const cost = e.target.getAttribute("data-cost");
    const totalData = +cost;

    if (e.target.checked) {
        totalCost += totalData;
    } else {
        totalCost -= totalData;
    }
    total.innerHTML = `Total: $${totalCost}`
});

//"Payment Info" Section:
let payWith = document.getElementById('payment');
let creditCard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

payWith.children[1].setAttribute('selected', true);

payWith.addEventListener("change", (e) => {
    if (e.target.value === 'credit-card') {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    if (e.target.value === "paypal") {
        creditCard.style.display = 'none';
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    }
    if (e.target.value === "bitcoin") {
        creditCard.style.display = 'none';
        paypal.style.diplay = 'none';
        bitcoin.style.display = 'block';
    }
});

//Form Validation
const form = document.querySelector('form');

const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

function nameValidation() {
    let nameValue = personName.value;
    let testName = /^[^\s][a-zA-z|\s]*$/i.test(nameValue);
    if(!testName.test(nameValue)){
        return false;
    } else{
        return true;
    }
}

function emailValidation() {
    let emailValid = emailAddress.value;
    let testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!testEmail.test(emailValid)){
        return false;
    } else {
        return true;
    }
}

function cardValidation() {
    let cardValid = cardNumber.value;
    let testCard = /^\d{13,16}$/;
    if(!testCard.test(cardValid)){
        return false;
    } else {
        return true;
    }
}

function zipValidation() {
    let zipValid = zipCode.value;
    let testZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/; 
    if(!testZip.test(zipValid)){
      return false;
    } else{
      return true;
    }
  }
  
function cvvValidation() {
    let cvvValid = cvvInput.value;
    let testCvv = /^\d{3}$/;
    if(!testCvv.test(cvvValid)){
      return false;
    } else{
      return true;
    }
  }


function notValidForm(element){
    element.parentElement.classList.add("not-valid");
    element.parentElement.classList.remove("valid");
    element.parentElement.querySelector(".hint").style.display = "block";
  }
  
function validForm(element){
    element.parentElement.classList.add("valid");
    element.parentElement.classList.remove("not-valid");
    element.parentElement.querySelector(".hint").style.display = "none";
  
}

form.addEventListener("submit", (e) => {
    const nameInput = nameValidation();
    const emailInput = emailValidation();
    const cardInput = cardValidation();
    const zipInput = zipValidation();
    const cvvInput = cvvValidation();

    if(nameInput == false) {
        e.preventDefault();
        notValidForm(personName);
    } else {
        validForm(personName);
    }

    if(emailInput == false) {
        e.preventDefault();
        notValidForm(emailAddress);
    } else {
        validForm(emailAddress);
    }   

    if()

    if(cardInput == false) {
        e.preventDefault();
        notValidForm(cardNumber);
    } else {
        validForm(cardNumber);
    }

    if(nameInput == false) {
        e.preventDefault();
        notValidForm(nameField);
    } else {
        validForm(nameField);
    }

})
