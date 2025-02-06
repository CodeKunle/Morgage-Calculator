function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById("loanTerm").value) * 12;
    
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }
    
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    const totalPayment = monthlyPayment * loanTerm;
    
    document.getElementById("monthlyPayment").innerText = `Your Monthly Payment: €${monthlyPayment.toFixed(2)}`;
    document.getElementById("totalPayment").innerText = `Total you'll repay over the term: €${totalPayment.toFixed(2)}`;
}