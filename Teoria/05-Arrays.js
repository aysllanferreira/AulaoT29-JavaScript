/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

// Arrays

// Multiplique todos os valores do array por 2

const array = [1, 2, 3, 4, 5];
const newArray = [];

for (let index = 0; index < array.length; index += 1) {
  newArray.push(array[index] * 2);
}

console.log(newArray);
// Crie um array com todos os valores do array original divididos por 2

const array2 = [2, 4, 6, 8, 10];
const newArray2 = [];

for (let index = 0; index < array2.length; index += 1) {
  newArray2.push(array2[index] / 2);
}

console.log(newArray2);

// Coloque em um novo array somente os numeros pares do array original

const array3 = [1, 2, 3, 4, 5, 6];
const newArray3 = [];

for (let index = 0; index < array3.length; index += 1) {
  if (array3[index] % 2 !== 1) {
    newArray3.push(array3[index]);
  }
}

console.log(newArray3);

// Coloque em um novo array somente os numeros impares do array original

const array4 = [1, 2, 3, 4, 5, 6];
const newArray4 = [];

for (let index = 0; index < array4.length; index += 1) {
  if (array4[index] % 2 !== 0) {
    newArray4.push(array4[index]);
  }
}

console.log(newArray4);
