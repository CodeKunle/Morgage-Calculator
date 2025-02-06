
function calculateMortgage() {
    const mortgageAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const mortgageTerm = parseFloat(document.getElementById("loanTerm").value) * 12;
    
    if (isNaN(mortgageAmount) || isNaN(interestRate) || isNaN(mortgageTerm) || mortgageAmount <= 0 || mortgageTerm <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }
    
    const monthlyPayment = (mortgageAmount * interestRate) / (1 - Math.pow(1 + interestRate, -mortgageTerm));
    const totalPayment = monthlyPayment * mortgageTerm;
    
    document.getElementById("monthlyPayment").innerText = `Your Monthly Payment: €${monthlyPayment.toFixed(2)}`;
    document.getElementById("totalPayment").innerText = `Total you'll repay over the term: €${totalPayment.toFixed(2)}`;
}