const username = document.getElementById("name");
const jobMenu = document.getElementById("title");
const jobRole = document.getElementById("other-job-role");
const design = document.getElementById("design");
const color = document.getElementById("color");
const colors = color.children;
const field = document.getElementById("activities");
const total = document.getElementById("activities-cost");
let totalCost = 0;
const paymentBox = document.getElementById("payment");
const credit = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const email = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cv = document.getElementById("cvv");
const form = document.querySelector("form");
const checkBox = document.querySelectorAll('input[type="checkbox"]');

//Highlight name field at page load
username.focus();

// console.log(jobMenu)
//hide text area for job role
jobRole.style.display = "none";

jobMenu.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    jobRole.style.display = "";
  } else {
    jobRole.style.display = "none";
  }
});

// console.log(color);

//disable color choices until theme selected.
color.disabled = true;

design.addEventListener("change", (e) => {
  color.disabled = false;
  for (let i = 0; i < colors.length; i++) {
    const value = e.target.value;
    const attr = colors[i].getAttribute("data-theme");

    if (value === attr) {
      colors[i].hidden = false;
      colors[i].setAttribute("selected", true);
    } else {
      colors[i].hidden = true;
      colors[i].setAttribute("selected", false);
    }
  }
});

// console.log(field);
// console.log(total);

//user can select activites and total is updated
field.addEventListener("change", (e) => {
  const dataCost = +e.target.getAttribute("data-cost");
  // console.log(dataCost);
  // console.log(typeof dataCost);
  if (e.target.checked === true) {
    totalCost += dataCost;
  } else if (e.target.checked === false) {
    totalCost -= dataCost;
  }
  total.innerHTML = `Total:$${totalCost}`;
});

// console.log(paymentBox);
// console.log(credit);
// console.log(paypal);
// console.log(bitcoin);

//set credit card as default
paypal.style.display = "none";
bitcoin.style.display = "none";
paymentBox.children[1].setAttribute("selected", "");

//change payment info based on method selection
paymentBox.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    paypal.style.display = "";
    bitcoin.style.display = "none";
    credit.style.display = "none";
  } else if (e.target.value === "bitcoin") {
    paypal.style.display = "none";
    bitcoin.style.display = "";
    credit.style.display = "none";
  } else {
    paypal.style.display = "none";
    bitcoin.style.display = "none";
    credit.style.display = "";
  }
});

function validActivity() {
  const selectedActs = totalCost > 0;
  return selectedActs;
}

function validName() {
  const name = username.value;
  const nameTest = /^\D+ ?(\D+)? \D+$/.test(name);

  if (!nameTest) {
    isNotValid(username);
    document.getElementById("name-hint").innerText =
      "Name field must contain a first and last name";
  } else {
    isValid(username);
  }
  return nameTest;
}

function validEmail() {
  const emails = email.value;
  const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emails);

  if (!emailTest) {
    if (emails === "") {
      isNotValid(email);
      document.getElementById("email-hint").innerText =
        "Email address cannot be blank";
    } else {
      isNotValid(email);
    }
  } else {
    isValid(email);
  }
  return emailTest;
}

function validCard() {
  const cardNum = cardNumber.value;
  const cardTest = /^\d{13,16}$/.test(cardNum);
  return cardTest;
}

function validZip() {
  const zipCode = zip.value;
  const zipTest = /^\d{5}$/.test(zipCode);
  return zipTest;
}

function validCvv() {
  const cardCv = cvv.value;
  const cvTest = /^\d{3}$/.test(cardCv);
  return cvTest;
}

function isValid(element) {
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.lastElementChild.style.display = "";
}

function isNotValid(element) {
  element.parentElement.classList.add("not-valid");
  element.parentElement.classList.remove("valid");
  element.parentElement.lastElementChild.style.display = "block";
}

form.addEventListener("submit", (e) => {
  if (!validName()) {
    e.preventDefault();
  }

  if (!validEmail()) {
    e.preventDefault();
  }
  if (!validActivity()) {
    e.preventDefault();
    isNotValid(total);
  } else {
    isValid(total);
  }

  if (paymentBox.value === "credit-card") {
    if (!validCard()) {
      e.preventDefault();
      isNotValid(cardNumber);
    } else {
      isValid(cardNumber);
    }
    if (!validZip()) {
      e.preventDefault();
      isNotValid(zip);
    } else {
      isValid(zip);
    }

    if (!validCvv()) {
      e.preventDefault();
      isNotValid(cv);
    } else {
      isValid(cv);
    }
  }
});

console.log(checkBox);

for (let i = 0; i < checkBox.length; i++) {
  const choice = checkBox[i];

  choice.addEventListener("focus", (e) => {
    e.target.parentElement.classList.add("focus");
  });

  choice.addEventListener("blur", (e) => {
    e.target.parentElement.classList.remove("focus");
  });
}

field.addEventListener("change", (e) => {
  const clicked = e.target;
  const dates = clicked.getAttribute("data-day-and-time");

  for (let i = 0; i < checkBox.length; i++) {
    const checkBoxDate = checkBox[i].getAttribute("data-day-and-time");
    if (dates === checkBoxDate && clicked !== checkBox[i]) {
      if (clicked.checked) {
        checkBox[i].disabled = true;
        checkBox[i].parentElement.classList.add("disabled");
      } else {
        checkBox[i].disabled = false;
        checkBox[i].parentElement.classList.remove("disabled");
      }
    }
  }
});

username.addEventListener("keyup", validName);
email.addEventListener("keyup", validEmail);
