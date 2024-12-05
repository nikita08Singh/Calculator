let currentNumber = '';
let previousNumber = '';
let operation;

function appendNumber(number){
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op)
{
    if(currentNumber == '') return;
    if(previousNumber != ''){
        compute();
    }
    operation = op;
    displayOperation();
    previousNumber = currentNumber;
    currentNumber = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
      default:
        return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
  }

  function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
  }

function deleteNumber(){
    if(currentNumber != 0)
    {
        let n = currentNumber.length;
        currentNumber = currentNumber.replace(currentNumber[n-1], '');
        updateDisplay();
    } 
}

function updateDisplay()
{
    document.getElementById('display').value = currentNumber;
}

function displayOperation()
{
    document.getElementById('display').value = operation;
}
