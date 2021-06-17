annualOutcomeInput.addEventListener('keyup', function(){
  if (annualOutcomeInput.value === "") {
    monthlyOutcomeInput.value = ""
  } else {this.value = stringDoting(this.value)
    monthlyOutcomeInput.value = stringDoting(Math.round(filteringInput(this.value) / 12))
  }
})

monthlyOutcomeInput.addEventListener('keyup', function(){
  if(monthlyOutcomeInput.value === ""){
    annualOutcomeInput.value = ""
  } else {
    this.value = stringDoting(this.value)
    annualOutcomeInput.value = stringDoting(Math.round(filteringInput(this.value) * 12))
  }
})

INPUT.forEach(e => {
  e.addEventListener('keyup', function(e){
    
    const ageNow = ageNowInput.value
    const agePension = agePensionInput.value
    const inflation = parseInt(inflationInput.value)

    const total = countAnnualOutcomePension(filteringInput(annualOutcomeInput.value), ageNow, agePension, inflation)

    const totalAnnual = stringDoting(total.annualOut)
    const totalNeed = stringDoting(total.needFunds)

    if(isNaN(total.annualOut)){
      annualOutcomePension.innerText = 'Rp. 0'
      needPensionFunds.innerText = 'Rp. 0'
    } else {
      annualOutcomePension.innerText = `Rp. ${totalAnnual}`
      needPensionFunds.innerText = `Rp. ${totalNeed}`
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