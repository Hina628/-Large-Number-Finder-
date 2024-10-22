function findLargerNumber() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('result');
  
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers!";
      result.className = 'result';
      return;
    }
  
    if (num1 > num2) {
      result.textContent = `${num1} is larger!`;
      result.className = 'result larger';
    } else if (num2 > num1) {
      result.textContent = `${num2} is larger!`;
      result.className = 'result larger';
    } else {
      result.textContent = "Both numbers are equal!";
      result.className = 'result equal';
    }
  }
  