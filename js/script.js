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
})