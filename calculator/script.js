let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(operator) {
  if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += operator;
    updateDisplay(currentInput);
  }
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay(currentInput);
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}

function calculate() {
  try {
    const result = eval(currentInput);
    updateDisplay(result);
    currentInput = result.toString();
  } catch (error) {
    updateDisplay('Error');
    currentInput = '';
  }
}
