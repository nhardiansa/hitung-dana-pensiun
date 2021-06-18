if (annualOutcomePension.innerText == 'Rp.0'){
  annualReturnInput.disabled = true
  alreadyFundPensionInput.disabled = true
} else{
  annualReturnInput.disabled = false
  alreadyFundPensionInput.disabled = false
}

INPUT.forEach(e => {
  e.addEventListener('keyup', function(){
    if (annualOutcomePension.innerText == 'Rp.0'){
      annualReturnInput.disabled = true
      alreadyFundPensionInput.disabled = true
    } else{
      annualReturnInput.disabled = false
      alreadyFundPensionInput.disabled = false
    }

    if(alreadyFundPensionInput.value !== "") {
      alreadyFundPensionInput.value = stringDoting(filteringInput(alreadyFundPensionInput.value))
    }

    const rateOfPeriod = parseInt(annualReturnInput.value)
    const numOfPay = agePensionInput.value - ageNowInput.value
    const presentValue = parseInt(filteringInput(alreadyFundPensionInput.value))
    const futureValue = filteringInput(needPensionFunds.innerText)
    // console.log(rateOfPeriod,numOfPay,presentValue,futureValue*-1)

    // console.log(futureValue)
    const result = pmt(rateOfPeriod/100, numOfPay, presentValue, -futureValue, 0)
    const resultMonthly = result / 12
    
    if(isNaN(result)){
      monthlyInvestedYear.innerText = 'Rp. 0'
      annualInvestedYear.innerText = 'Rp. 0'
    } else {
      monthlyInvestedYear.innerText = 'Rp. ' + stringDoting(Math.round(resultMonthly))
      annualInvestedYear.innerText = 'Rp. ' + stringDoting(Math.round(result))
    }
    
  })
})


function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
  future_value = typeof future_value !== 'undefined' ? future_value : 0;
  type = typeof type !== 'undefined' ? type : 0;

if(rate_per_period != 0.0){
  // Interest rate exists
  var q = Math.pow(1 + rate_per_period, number_of_payments);
  return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

} else if(number_of_payments != 0.0){
  // No interest rate, but number of payments exists
  return -(future_value + present_value) / number_of_payments;
}

return 0;
}

// const result = pmt(10/100, 9, 700, -3202,0)
// console.log(Math.round(result))