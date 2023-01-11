const form = document.getElementById("form");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const form4 = document.getElementById("form4");
const form5 = document.getElementById("form5");

// Declare and set default values for financial variables
let income = 5000;
let yearlyIncome = income * 12;
let fixedCostsPercent = 0.5;
let savingsPercent = 0.15;
let investmentsPercent = 0.15;
let guiltFreePercent = 0.2;
let fixedCosts = income * fixedCostsPercent;
let savings = income * savingsPercent;
let investments = income * investmentsPercent;
let guiltFree = income * guiltFreePercent;
let totalPercent = (fixedCostsPercent + savingsPercent + investmentsPercent + guiltFreePercent) * 100;
let totalSaved = savings * 12;
let val = document.getElementById("myRange").value;

// Update HTML elements with initial calculated values
document.getElementById("monthlyIncome").value = income;
document.getElementById("yearlyIncome").textContent = yearlyIncome.toLocaleString();
document.getElementById("totalPercent").textContent = totalPercent;
document.getElementById("totalSaved").textContent = totalSaved;
document.getElementById("fixedCosts").textContent = fixedCosts;
document.getElementById("fixedCostsPercent").value = fixedCostsPercent * 100;
document.getElementById("investments").textContent = investments;
document.getElementById("investmentsPercent").value = investmentsPercent * 100;
document.getElementById("savings").textContent = savings;
document.getElementById("savingsPercent").value = savingsPercent * 100;
document.getElementById("guiltFree").textContent = guiltFree;
document.getElementById("guiltFreePercent").value = guiltFreePercent * 100;
document.getElementById("yearsSaved").innerHTML = val;
document.getElementById("totalSaved").innerHTML = (val * totalSaved).toLocaleString();

// Set up event listeners for form elements
form5.addEventListener("input", updateValues);
form4.addEventListener("input", updateValues);
form3.addEventListener("input", updateValues);
form2.addEventListener("input", updateValues);
form.addEventListener("input", updateValues);

// Event listener function to update financial variables and HTML elements
function updateValues() {
  // Update income value
  income = document.getElementById("monthlyIncome").value;

  // Update percentage values based on user input
  fixedCostsPercent = document.getElementById("fixedCostsPercent").value / 100;
  savingsPercent = document.getElementById("savingsPercent").value / 100;
  investmentsPercent = document.getElementById("investmentsPercent").value / 100;
  guiltFreePercent = document.getElementById("guiltFreePercent").value / 100;

  // Recalculate financial variables based on updated income and percentage values
  yearlyIncome = income * 12;
  fixedCosts = income * fixedCostsPercent;
  savings = income * savingsPercent;
  investments = income * investmentsPercent;
  guiltFree = income * guiltFreePercent;
  totalPercent = (fixedCostsPercent + savingsPercent + investmentsPercent + guiltFreePercent) * 100;

  // Round financial variables to the nearest whole number
  yearlyIncome = Math.round(yearlyIncome).toLocaleString();
  fixedCosts = Math.round(fixedCosts);
  savings = Math.round(savings);
  investments = Math.round(investments);
  guiltFree = Math.round(guiltFree);
  totalPercent = Math.round(totalPercent);
  totalSaved = savings * 12;

  if (totalPercent != 100) {
    document.getElementById("totalPercent").style.color = "red";
  } else {
    document.getElementById("totalPercent").style.color = "green";
  }

  // Update HTML elements with new calculated values
  document.getElementById("yearlyIncome").textContent = yearlyIncome;
  document.getElementById("totalPercent").textContent = totalPercent;
  document.getElementById("fixedCosts").textContent = fixedCosts;
  document.getElementById("investments").textContent = investments;
  document.getElementById("savings").textContent = savings;
  document.getElementById("guiltFree").textContent = guiltFree;

  updateSaved();
}

function updateSaved() {
  val = document.getElementById("myRange").value;
  document.getElementById("yearsSaved").innerHTML = val;
  document.getElementById("totalSaved").innerHTML = (val * totalSaved).toLocaleString();
}