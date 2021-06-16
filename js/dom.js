// Bagian Hitung
// input
let annualOutcomeInput = document.getElementById('annual-spending')
let monthlyOutcomeInput = document.getElementById('monthly-spending')

const ageNowInput = document.getElementById('age-now')
const agePensionInput = document.getElementById('age-pension')

const inflationInput = document.getElementById('inflation-percentage')

// result
const annualOutcomePension = document.querySelector(".annual-spending p.total")
const needPensionFunds = document.querySelector(".funds-required p.total")


// Bagian Persiapan/Prepare
// input
const annualReturnInput = document.querySelector('.input-funds > .return > input')
const alreadyFundPensionInput = document.querySelector('.input-funds > .already-funds > input')

// result
const monthlyInvestedYear = document.querySelector(".funds-prepared > .monthly-investation > .total")
const annualInvestedYear = document.querySelector(".funds-prepared > .annual-investation > .total")


// FILTERED INPUT
let INPUT = [
  annualOutcomeInput, monthlyOutcomeInput, ageNowInput, agePensionInput, inflationInput, monthlyInvestedYear, annualInvestedYear
]

INPUT.forEach(e => {
  setInputFilter(e, function(value) {
    return /^-?\d*$/.test(value);
  });
});