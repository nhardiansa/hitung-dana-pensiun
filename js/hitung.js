annualOutcomeInput.addEventListener("blur", function(){
  monthlyOutcomeInput.value = Math.round(this.value / 12)
  
})