let annualOutcomeInput = document.getElementById('annual-spending')
let monthlyOutcomeInput = document.getElementById('monthly-spending')

const ageNowInput = document.getElementById('age-now')
const agePensionInput = document.getElementById('age-pension')

const inflationInput = document.getElementById('inflation-percentage')

const annualOutcomePension = document.querySelector(".annual-spending p.total")
const needPensionFunds = document.querySelector(".funds-required p.total")

// FILTERED INPUT
let INPUT = [
  annualOutcomeInput, monthlyOutcomeInput, ageNowInput, agePensionInput, inflationInput
]

INPUT.forEach(e => {
  setInputFilter(e, function(value) {
    return /^-?\d*$/.test(value);
  });
});