const annualOutcomeInput = document.getElementById('annual-spending')
const monthlyOutcomeInput = document.getElementById('monthly-spending')

const ageNowInput = document.getElementById('age-now')
const agePensionInput = document.getElementById('age-pension')

const inflationInput = document.getElementById('inflation-percentage')

const annualOutcomePensionInput = document.querySelector(".annual-spending p.total")
const needPensionFundsInput = document.querySelector(".funds-required p.total")

// FILTERED INPUT
const INPUT = [
  annualOutcomeInput, monthlyOutcomeInput, ageNowInput, agePensionInput, inflationInput, annualOutcomePensionInput, needPensionFundsInput
]

INPUT.forEach(e => {
  setInputFilter(e, function(value) {
    return /^-?\d*$/.test(value);
  });
});