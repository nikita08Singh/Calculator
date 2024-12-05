let currentNumber = '';
let prevNumber = '';
let operation;

function appendNumber(number){
    currentNumber += number;
    updateDisplay();
}

function pi(){
    prevNumber = currentNumber;
    currentNumber = prevNumber * 3.14;
    updateDisplay();
}

// needs to be more re-fined
function exp(){
    prevNumber = currentNumber;
    currentNumber = Math.exp(prevNumber);
    updateDisplay();
}

function square(){
    prevNumber = currentNumber;
    currentNumber = prevNumber * prevNumber;
    updateDisplay();
}


function chooseOpertaion(op)
{
    if(currentNumber == '') return;
    if(prevNumber != '') compute();

    operation = op;
    displayOperation();
    prevNumber = currentNumber;
    currentNumber = '';
}

function compute(){
    let computation;
    const prev = parseFloat(prevNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch(operation){
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

function clear(){
    currentNumber = '';
    prevNumber = '';
    operation = undefined;
    updateDisplay();
}

function displayOperation()
{
    document.getElementById('display').value = operation;
}

function updateDisplay(){
    document.getElementById('display').value = currentNumber;
}