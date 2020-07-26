(function() {
  
    // Cache elements
    const rangeSlider = document.getElementById('range-slider');
    const rangeAmount = document.getElementById('range-amount')
    const paymentAmountEl = document.getElementById('payment-amount-output');
    const repaymentEls = document.querySelectorAll('input[type="radio"]');
  
    // Set currency format
    const moneyFormat = wNumb({
      prefix: '',
      thousand: ',',
      mark: '.',
      decimals: 2
    });
  
    const moneyFormatNoDecimals = wNumb({
      prefix: '',
      thousand: ',',
      decimals: 0
    });
  
    // Options to pass range slider
    const sliderOptions = {
      start: [ 24000 ],
      step: 1000,
      range: {
        min: [  1000 ],
        max: [ 50000 ]
      },
      pips: {
        mode: 'range',
        density: 100,
        format: moneyFormatNoDecimals
      },
      format: moneyFormat,
      behaviour: 'snap',
      connect: [ true, false ]
    };
  
    // Interest rate
    const interestRate = .33;
  
    // Update slider amount on screen
    function setLoanAmount() {
      let loanAmount = getLoanAmount();
      rangeAmount.textContent = moneyFormatNoDecimals.to(loanAmount);
    }
  
    // Update payment amount on screen
    function setPaymentAmount() {
      let paymentAmount = getPaymentAmount(getLoanAmount(), getNumberOfYears(), getPaymentsPerYear());
      paymentAmountEl.textContent = moneyFormat.to(paymentAmount);
    }
  
    // Formula for loan calculation https://www.thebalance.com/loan-payment-calculations-315564
    function getPaymentAmount(loanAmount, numberOfYears, paymentsPerYear) {
      let n = numberOfYears * paymentsPerYear;
      let i = interestRate / paymentsPerYear;
      let A = loanAmount;
      let D = (Math.pow((1 + i), n) - 1) / (i * Math.pow((1 + i), n));
      return A / D;


      
    }
  
    // Get loan amount from range slider
    function getLoanAmount() {
      let loanAmount = Number(rangeSlider.noUiSlider.get().replace(/\$|,/g, ''));
      return isNaN(loanAmount) ? 0 : loanAmount;
    }
  
  
    // Get number of years by dividing number of months by 12
    function getNumberOfYears() {
      let repaymentTerm = Number(document.querySelector('input[name="number-of-years"]:checked').value);
      return isNaN(repaymentTerm) ? 0 : (repaymentTerm / 12);
    }
  
    // Get payments per year. 12 if monthly, 52 if weekly
    function getPaymentsPerYear() {
      let repaymentFrequency = Number(document.querySelector('input[name="payments-per-year"]:checked').value);
      return isNaN(repaymentFrequency) ? 0 : repaymentFrequency;
    }
  
    // Initialize range slider
    noUiSlider.create(rangeSlider, sliderOptions);
  
    // Calculate loan amount on range update
    rangeSlider.noUiSlider.on('update', () => {
      setPaymentAmount();
      setLoanAmount();
    });
  
    // Calculate loan amount on radio change
    for (let i = 0; i < repaymentEls.length; i++) {
      repaymentEls[i].addEventListener('change', () => {
        setPaymentAmount();
      });
    }
    
  })();