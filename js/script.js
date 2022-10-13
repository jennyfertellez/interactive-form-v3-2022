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
const registration = document.getElementById("activities");
const total = document.getElementById("activities-cost");
let totalCost = 0;


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

//"Payment Info" Section
//Updates the payment option when a payment method is selected 
let payWith = document.getElementById('payment');
let creditCard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

payWith.children[1].setAttribute('selected', true);

payWith.addEventListener("change", (e) => {
    //paying with credit card removes the paypal and bitcoin option 
    if (e.target.value === 'credit-card') {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    //paying with paypal removes the credit card and bitcoin option 
    if (e.target.value === "paypal") {
        creditCard.style.display = 'none';
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    }
    //paying with bitcoin removes the credit card and paypal option
    if (e.target.value === "bitcoin") {
        creditCard.style.display = 'none';
        paypal.style.diplay = 'none';
        bitcoin.style.display = 'block';
    }
});

//Form Validation
//Form must have all fields required filled out correctly before submitting the form 
//Missing information will cause the form to redirect and not submit 
const form = document.querySelector('form');

const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

function testInput(input,validInput, e) {
    if(!input){
        validInput.parentNode.classList.add('not-valid');
        validInput.parentNode.classList.remove('valid');
        validInput.parentNode.lastElementChild.style.display = 'block';
        e.preventDefault();
       } else {
       validInput.parentNode.classList.add('valid');
       validInput.parentNode.classList.remove('not-valid');
       validInput.parentNode.lastElementChild.style.display = 'none';
       }
};

const checkbox = document.querySelectorAll("input[type=checkbox]");

//Indication that a field is valid or invalid
function activitiesSelected(e) {
    if(checkbox.length == 0){
        registration.classList.add('not-valid');
        registration.classList.remove('valid');
        registration.lastElementChild.style.display = 'block';
        e.preventDefault();
    } else {
        registration.classList.add('valid');
        registration.classList.remove('not-valid');
        registration.lastElementChild.style.display = 'none';
    }
}
form.addEventListener("submit", (e) => {
//Name field is filled out
    let nameValue = personName.value;
    let testName = /^[^\s][a-zA-z|\s]*$/i.test(nameValue);
    testInput(testName, personName, e);
//Email field is filled out
    let emailValid = emailAddress.value;
    let testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    testInput(testEmail, emailAddress, e);
//Credit card field is filled out
if (payWith === 'credit-card'){
    let cardValid = cardNumber.value;
    let testCard = /^\d{13,16}$/;
    testInput(testCard, cardNumber, e);
//Zipcode field is filled out and has a limitation of 5 digits
    let zipValid = zipCode.value;
    let testZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    testInput(testZip, zipCode, e);
//CVV field is filled out and has a limitation of 3  digits
    let cvvValid = cvvInput.value;
    let testCvv = /^\d{3}$/;
    testInput(testCvv, cvvInput, e);
}});

//Accessibility
//Accomodoations made for users with impairments
checkbox.forEach(activity => {
    activity.addEventListener('focus', e => {
        e.target.parentNode.classList.add('focus');
    })
    activity.addEventListener('blur', e => {
        e.target.parentNode.classList.remove('focus');
    })
});