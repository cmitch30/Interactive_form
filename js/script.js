const nameSlot = document.getElementById('name')
nameSlot.focus()

const jobMenu = document.querySelector('select')
// console.log(jobMenu)
const jobRole = document.getElementById("other-job-role");
jobRole.style.display = 'none'

jobMenu.addEventListener('change', (e) => {
if(e.target.value === 'other'){
    jobRole.style.display = 'block'
    jobRole.value = '';
} else {
    jobRole.style.display ='none'
}
})

const design = document.querySelector('#design')
const color = document.querySelector('#color')
console.log(color)
color.disabled = true

design.addEventListener('change', (e) => {
    color.disabled= false
 const colors = color.children

 for (let i = 0; i < colors.length; i++) {
    let element = colors[i]
    console.log(element)
    const value = e.target.value
    const attr = element.getAttribute("data-theme");

    if (value === attr) {
        element.hidden = false;
        element.setAttribute('selected', true);
    } else {
        element.hidden = true;
        element.setAttribute("selected", false);
    }
 }
})

const field = document.querySelector(".activities");
const total = document.querySelector('fieldset > p')
console.log(field)
console.log(total)

let totalCost = 0

field.addEventListener('change', (e) => {
    const dataCost = +(e.target.getAttribute("data-cost"));
    console.log(dataCost)
    console.log(typeof dataCost)
    if (e.target.checked === true) {
        totalCost += dataCost
    } else if(e.target.checked === false) {
        totalCost -= dataCost
    }
    total.innerHTML = `Total:$${totalCost}`
})

const paymentBox = document.querySelector("#payment");
const credit = document.querySelector('#credit-card')
const paypal = document.querySelector('#paypal')
const bitcoin = document.querySelector('#bitcoin')
console.log(paymentBox)
console.log(credit);
console.log(paypal);
console.log(bitcoin);
paypal.style.display = 'none'
bitcoin.style.display = "none";
paymentBox.children[1].setAttribute('selected', '')

paymentBox.addEventListener('change', (e) => {
    if (e.target.value === 'paypal') {
        paypal.style.display = 'block'
        bitcoin.style.display = "none";
        credit.style.display = "none";
    } else if(e.target.value === 'bitcoin') {
            paypal.style.display = "none";
            bitcoin.style.display = "block";
            credit.style.display = "none";
    } else {
            paypal.style.display = "none";
            bitcoin.style.display = "none";
            credit.style.display = "block";
    }
})