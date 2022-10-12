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

form.addEventListener("submit", (e) => {

    let nameValue = personName.value;
    const testName = /^[^\s][a-zA-z|\s]*$/i.test(nameValue);
    testInput(testName, personName, e);

    
})
