'use strict';

// !UI
const result = document.querySelector('.current-result');
const input = document.querySelector('.form-input');
const computation = document.querySelector('.computation');

const plusBtn = document.querySelector('.plus');
const substractBtn = document.querySelector('.substract');
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');

function outputResult(currentResult, calcDescription) {
    // result.innerHTML += calcDescription;
    result.textContent = currentResult;
    computation.textContent = calcDescription;
}
outputResult(0, 0);
