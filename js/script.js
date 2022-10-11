//console.log('test');
//The "Name" Field
document.getElementById("name").focus();

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

registration.addEventListener("change", (e) => {
    var cost = e.target.getAttribute("data-cost");
    var totalData = +cost;
});
console.log(cost);
console.log(typeof cost);