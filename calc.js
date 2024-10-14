function appendNumber(number) {
    document.getElementById('display').value += number;
  }
  
  function appendOperator(operator) {
    document.getElementById('display').value += operator;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
  }
  
  function calculate() {
    let expression = document.getElementById('display').value;
    try {
      let result = eval(expression);
      document.getElementById('display').value = result;
    } catch {
      document.getElementById('display').value = 'Error';
    }
  }