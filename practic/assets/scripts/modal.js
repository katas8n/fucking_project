let defaultResult = 0;
let currentResult = defaultResult;

let mathOperand;

// ! Получ польз. ввода
function getUserNumberInput() {
    return parseInt(input.value);
}

// ! Данныые которые пом. на страницу
function createAndWriteOutput(resultBeforeCalc, operator, currentNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${currentNumber}`;

    outputResult(currentResult, calcDescription);
}

// ! Опред. и вычисл.
function calculateResult(calculationType) {
    const entredNumber = getUserNumberInput();
    const prevResult = currentResult;

    switch (calculationType) {
        case 'ADD':
            currentResult = currentResult + entredNumber;
            mathOperand = '+';
            break;
        case 'SUB':
            currentResult = currentResult - entredNumber;
            mathOperand = '-';
            break;
        case 'DIV':
            currentResult = currentResult / entredNumber;
            mathOperand = '/';
            break;
        case 'MULT':
            currentResult = currentResult * entredNumber;
            mathOperand = '*';
            break;

        default:
            throw Error('Something went wrong');
            break;
    }

    createAndWriteOutput(prevResult, mathOperand, entredNumber);
}

function add() {
    calculateResult('ADD');
}

function substract() {
    calculateResult('SUB');
}

function multiply() {
    calculateResult('MULT');
}

function div() {
    calculateResult('DIV');
}

plusBtn.addEventListener('click', add);
substractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', div);
multiplyBtn.addEventListener('click', multiply);
