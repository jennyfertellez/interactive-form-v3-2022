//console.log('test');
//The "Name" Field
//Name field is focus
const personName = document.querySelector("#name");
personName.focus();

//"Job Role" Section
//"Other" option is hidden until it is clicked on 
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
//Tshirt menu is modify to show the color options available once customers pick a theme
var designChosen = document.getElementById("shirt-designs");
var shirtColor = document.getElementById("color");
    shirtColor.disabled = true;
var colorOption = shirtColor.children;

designChosen.addEventListener('change', (e) => {
    e.preventDefault();
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
//Updates the total amount owed once items are checked or unchecked
const registration = document.querySelector(".activities");
const total = document.getElementById("activities-cost");
let totalCost = 0;

registration.addEventListener("change", (e) => {
    const cost = e.target.getAttribute("data-cost");
    const totalData = +cost;

    if (e.target.checked === true) {
        totalCost += totalData;
    } else {
        totalCost -= totalData;
    }
    total.innerHTML = `Total: $${totalCost}`
  
});

//"Payment Info" Section
//Updates the payment option when a payment method is selected 
let payWith = document.getElementById('payment');
let creditCard = document.querySelector('.credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

payWith.children[1].selected = true;

payWith.addEventListener("change", (e) => {
    //paying with paypal removes the credit card and bitcoin option 
    if (e.target.value === "paypal") {
        creditCard.style.display = "none";
        bitcoin.style.display = "none";
        paypal.style.display = "block";
    } 
    //paying with credit card removes the paypal and bitcoin option 
    else {
        creditCard.style.display = "block";
        bitcoin.style.display = "none";
        paypal.style.display = "none";
    }
    //paying with bitcoin removes the credit card and paypal option
    if (e.target.value === "bitcoin") {
        creditCard.style.display = "none";
        paypal.style.display = "none";
        bitcoin.style.display = "block";
    }
});

//Form Validation
//Form must have all fields required filled out correctly before submitting the form 
//Missing information will cause the form to redirect and not submit 
const form = document.querySelector('form');

const emailAddress = document.getElementById('email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.getElementById('cvv');

//Helper Functions
// Testing sections are meeting the requirements before submission
function nameValidation() {
    let nameValue = personName.value;
    let nameIsValid = /^[a-zA-z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
    return nameIsValid;
}

function emailValidation() {
    let emailValue = emailAddress.value;
    let emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    return emailIsValid;
}

/*function activitiesValidation() {
    let activitiesIsValid = totalCost > 0;
    return activitiesIsValid;
}*/

function activitiesSelected(e){
    const checkBoxes = document.querySelectorAll("input[type=checkbox]");
    if(checkBoxes.length == 0) {
        registration.classList.add('not-valid');
            registration.classList.remove('valid');
            registration.lastElementChild.style.display = 'block';
            e.preventDefault();
        } else {
            //Valid
            registration.classList.add('valid');
            registration.classList.remove('not-valid');
            registration.lastElementChild.style.display = 'none';
        }
}

function creditCardValidation() {
    let cardValid = cardNumber.value;
    let creditCardIsValid = /^[0-9]{13,16}$/.test(cardValid);
    return creditCardIsValid;
}

function cvvValidation() {
    let cvvValid = cvv.value;
    let cvvIsValid = /^\d{3}$/.test(cvvValid);
    return cvvIsValid;
}

function zipValidation() {
    let zipValid = zipCode.value;
    let zipcodeIsValid = /^\d{5}$/.test(zipValid);
    return zipcodeIsValid;
}
//Submit button is listening to prevent users from submitting the form with errors 
form.addEventListener("submit", (e) => {
    if (!nameValidation()){
        e.preventDefault();
        personName.parentElement.classList.add('not-valid');
        personName.parentElement.classList.remove('valid');
        personName.nextElementSibling.style.display = 'block';
    } else {
        personName.parentElement.classList.add('valid');
        personName.parentElement.classList.remove('not-valid');
        personName.nextElementSibling.style.display = 'none';
    }

    if (!emailValidation()){
        e.preventDefault();
        emailAddress.parentElement.classList.add('not-valid');
        emailAddress.parentElement.classList.remove('valid');
        emailAddress.nextElementSibling.style.display = 'block';
    } else {
        emailAddress.parentElement.classList.add('valid');
        emailAddress.parentElement.classList.remove('not-valid');
        emailAddress.nextElementSibling.style.display = 'none';
    }
    
    /*if (!activitiesValidation()){
        e.preventDefault();
        registration.parentElement.classList.add('not-valid');
        registration.parentElement.classList.remove('valid');
        registration.nextElementSibling.style.display = 'inherit';
    } else {
        registration.parentElement.classList.add('valid');
        registration.parentElement.classList.remove('not-valid');
        registration.nextElementSibling.style.display = 'none';
    } */

//Ensuring all credit card fiels components are included before submission
if (payWith.value === 'credit-card'){
    if (!creditCardValidation()){
        e.preventDefault();
        cardNumber.parentElement.classList.add('not-valid');
        cardNumber.parentElement.classList.remove('valid');
        cardNumber.nextElementSibling.style.display = 'block';
    } else {
        cardNumber.parentElement.classList.add('valid');
        cardNumber.parentElement.classList.remove('not-valid');
        cardNumber.nextElementSibling.style.display = 'none';
    }

    if (!cvvValidation()){
        e.preventDefault();
        cvv.parentElement.classList.add('not-valid');
        cvv.parentElement.classList.remove('valid');
        cvv.nextElementSibling.style.display = 'block';
    } else {
        cvv.parentElement.classList.add('valid');
        cvv.parentElement.classList.remove('not-valid');
        cvv.nextElementSibling.style.display = 'none';
    }

    if (!zipValidation()){
        e.preventDefault();
        zipCode.parentElement.classList.add('not-valid');
        zipCode.parentElement.classList.remove('valid');
        zipCode.nextElementSibling.style.display = 'block';
    } else {
        zipCode.parentElement.classList.add('valid');
        zipCode.parentElement.classList.remove('not-valid');
        zipCode.nextElementSibling.style.display = 'none';
    }
}
});

//Accessibility
//Accomodoations made for users with impairments
const checkBoxes = document.querySelectorAll("input[type=checkbox]");

checkBoxes.forEach(activity => {
    activity.addEventListener('focus', e => {
        e.target.parentNode.classList.add('focus');
    });
    activity.addEventListener('blur', e => {
        e.target.parentNode.classList.remove('focus');
    })
}); 