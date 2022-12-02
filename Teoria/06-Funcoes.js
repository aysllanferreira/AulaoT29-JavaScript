/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
// Funcoes

// function soma(num1, num2) {
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     return num1 + num2;
//   }
//   return 'Passe um numero valido';
// }

// const resultadoDaSoma = soma('3', 4);
// console.log(resultadoDaSoma);

// const boasVindas = (name) => `Ola, ${name}, seja muito bem-vind@.`;

// console.log(boasVindas('Pedro'));
// console.log(boasVindas('Aysllan'));
// console.log(boasVindas('Daniel'));

const valoresPares = (param) => {
  const pares = [];
  for (let index = 0; index < param.length; index += 1) {
    // if (param[index] % 2 === 0) {
    //   pares.push(param[index]);
    // }
    param[index] % 2 === 0 ? pares.push(param[index]) : null;
  }
  return pares;
};

console.log(valoresPares([4, 8, 3, 17, 21, 9, 14, 7]));

const exemploPares = (param) => param.filter((numeros) => numeros % 2 !== 0);

console.log(exemploPares([4, 8, 3, 17, 21, 9, 14, 7]));
