annualOutcomeInput.addEventListener('keyup', function(){
  monthlyOutcomeInput.value = Math.round(this.value / 12)
})

monthlyOutcomeInput.addEventListener('keyup', function(){
  annualOutcomeInput.value = Math.round(this.value * 12)
})

INPUT.forEach(e => {
  e.addEventListener('keyup', function(e){
    const ageNowInput = parseInt(document.getElementById('age-now').value)
    const agePensionInput = parseInt(document.getElementById('age-pension').value)
    const inflationInput = parseInt(document.getElementById('inflation-percentage').value)

    const annualOutcomePension = document.querySelector(".annual-spending p.total")
    const needPensionFunds = document.querySelector(".funds-required p.total")

    const total = countAnnualOutcomePension(annualOutcomeInput.value, ageNowInput, agePensionInput, inflationInput)

    if(isNaN(total.annualOut)){
      annualOutcomePension.innerText = 'Rp.0'
      needPensionFunds.innerText = 'Rp.0'
    } else {
      annualOutcomePension.innerText = `Rp. ${total.annualOut}`
      needPensionFunds.innerText = `Rp. ${total.needFunds}`
    }
  })
});

function countAnnualOutcomePension(annualOutcome, ageNow, agePension, inflation){
  let infla

  if(isNaN(inflation)){
    infla = 4
  } else {
    infla = inflation
  }

  let annualOut = Math.round(annualOutcome * Math.pow((1 + (infla / 100)),(agePension - ageNow)))
  let needFunds = Math.round(annualOut / (infla / 100))
  return {annualOut, needFunds}
}