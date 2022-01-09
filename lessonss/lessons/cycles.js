'use strict';
// ------------------------------------
// ann = 1 | 1
// vlad = 1 + 1
// lena = 1
// alex = 1
// lina =
// ------------------------------------
// !While - когда не знаем точно сколько раз должен быть выполнен цикл
// let itterator = 0;
// let isNotLevelComplated = true;
// let loseScore = 0;

// while (isNotLevelComplated) {
//     const levelState = prompt('Did u win ? y/n');
//     if (levelState === 'y') {
//         isNotLevelComplated = false;
//     } else if (levelState === 'n') {
//         console.log('Try again');
//         loseScore++;
//     } else {
//         console.log('Not valid value');
//     }
// }

// console.log('[Lose Score : ]', loseScore);
// console.log('Cong');
// ! FOR = когда мы знаем , сколько он должен выполниться ? Когда у нас энд-поинт

// const str = ['Kirill', 'Lina', 'Anna'];

// for (let itterator = 0; itterator < 10; ) {
//     itterator = itterator + 2;
//     console.log(itterator);
// }

// do {
//     console.log('I did it once');
// } while ('');

// let i = 0;

// while (i < 10) {
//     i++;
//     if (i === 5) {
//         continue;
//     }
//     if (i === 7) {
//         break;
//     }
//     console.log('[ITTERATROR] : ' + i);
// }

// const john = {
//     firstName: 'John',
//     age: 23,
//     money: 2323
// };

// for (const prop in john) {
//     const value = john[prop];

//     console.log(prop);
//     console.log(value);
//     console.log('---------------------');
// }

const word = 'Elena';

for (const char of word) {
    console.log(char);
}
