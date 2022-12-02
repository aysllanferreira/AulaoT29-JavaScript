/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

// Loops

// While loop
// let numero = 0;

// while (numero <= 10) {
//   console.log(numero);
//   numero += 1;
// }

// For loop
// for (let index = 0; index <= 10; index += 1) {
//   console.log(index);
// }

// For of loop
// const array = [1, 2, 3, 4, 5, 6];
// const novoArray = [];

// for (const numeros of array) {
//   if (numeros % 2 === 0) {
//     novoArray.push(numeros);
//   }
// }

// console.log(novoArray);

const array = [1, 2, 3, 4, 3, 6];

for (let index = 0; index <= array.length; index += 1) {
  if (array[index] === 3) {
    console.log(array[index]);
    break;
  }
}
