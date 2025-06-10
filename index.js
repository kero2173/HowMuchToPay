function calculateToPay() {
  const amount = parseFloat(document.getElementById('amountWanted').value);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById('resultToPay').innerText = "اكتب رقم صحيح.";
    return;
  }
  const toPay = (amount / 0.7).toFixed(2);
  document.getElementById('resultToPay').innerText = `لازم تدفع: ${toPay} جنيه`;
}

function calculateBalance() {
  const paid = parseFloat(document.getElementById('amountPaid').value);
  if (isNaN(paid) || paid <= 0) {
    document.getElementById('resultBalance').innerText = "اكتب رقم صحيح.";
    return;
  }
  const balance = (paid * 0.7).toFixed(2);
  document.getElementById('resultBalance').innerText = `هيوصلك رصيد: ${balance} جنيه`;
}
