// Func
// OOP

// const name = prompt('Hello , enter ur name : ');
// !----\ arg
// sayHello('John');
// sayHello('Mike');
// sayHello('Kirill');

// !fn - first name
// !--------------| parametr
// function sayHello(fn) {
//     alert('Hello ' + fn);
//     console.log('Hello world');
// }

// let isRunning = true;

// while (isRunning) {
//     const operator = prompt('Enter what do u do : \n 1)+ \n 2)- \n 3)/ \n 4)*');

//     if (
//         operator !== '+' &&
//         operator !== '-' &&
//         operator !== '*' &&
//         operator !== '/'
//     ) {
//         console.log('Are u okay?');
//     } else {
//         const firstNumber = +prompt('Enter fitst num');
//         const secondNumber = +prompt('Enter second num');

//         switch (operator) {
//             case '+':
//                 console.log('[RESULT]', add(firstNumber, secondNumber));
//                 break;
//             case '-':
//                 console.log('[RESULT]', sub(firstNumber, secondNumber));
//                 break;
//             case '*':
//                 console.log('[RESULT]', mult(firstNumber, secondNumber));
//                 break;
//             case '/':
//                 console.log('[RESULT]', de(firstNumber, secondNumber));
//                 break;

//             default:
//                 break;
//         }
//     }

//     isRunning = doUWannaContinue();
// }

// function add(fn, sn) {
//     const result = fn + sn;

//     return result;
// }
// function sub(fn, sn) {
//     const result = fn - sn;

//     return result;
// }
// function de(fn, sn) {
//     const result = fn / sn;

//     return result;
// }
// function mult(fn, sn) {
//     const result = fn * sn;

//     return result;
// }

// function doUWannaContinue() {
//     return confirm('Do u wanna continue ? ');
// }

// let coin = 13;
// coin += 10;
// console.log(coin);

// Практическая работа
// 1.Добвить функцию вычетания / умножения / деления
// 2.Спросить у пользователя , что он хочет делать : умножать , делить , отнимать , добавлять
// 3.В зависимости от этого применить функцию вычетания / умножения / деления / сложения

// function addFourNum(f = 0, s = 0, t = 0, four = 0) {
//     console.log('[RESULT]', f + s + t + four);
// }

// addFourNum(23, 23, 23, 23);
// addFourNum(13, 10);

// ? д/з - СПРАВИТЬСЯ !
// ! Добавить функцию кальк - которая будет определять ,
// ! что за оператор выбрал юзер и в зависимости от этого выполнять ту , или иную функцию
// ! Реализовать с помощью цикла шах.доск. 8х8:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #

// * GLOBAL
// let firstName = 'John';

// function getFirstName() {
//     let firstName = 'Mike'; // ! local
//     console.log('[SCOPED]', firstName); // ?

//     function getName() {
//         console.log(firstName); // ?
//     }
//     getName();
// }

// console.log('[GLOBAL]', firstName); // ? JOHN

// firstName = getFirstName();

// console.log('[GLOBAL2]', firstName); // ? Mike
