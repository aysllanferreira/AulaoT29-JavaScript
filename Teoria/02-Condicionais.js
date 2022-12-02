/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */

// Condicionais

// if else

// const idade = 17;

// if (idade >= 18) {
//   console.log('Eu posso dirigir.');
// } else {
//   console.log('Eu nao posso dirigir, pois sou menor de idade');
// }

// if (idade >= 18) {
//   console.log('Eu posso dirigir.');
// } else if (idade === 17) {
//   console.log('Eu posso dirigir em alguns estados.');
// } else {
//   console.log('Eu nao posso dirigir, pois sou menor de idade');
// }

// switch case

const dia = 'SeGuNDa';

switch (dia.toLowerCase()) {
  case 'segunda':
    console.log('Hoje eh segunda-feira');
    break;
  case 'terca':
    console.log('Hoje eh terca-feira');
    break;
  case 'quarta':
    console.log('Hoje eh quarta-feira');
    break;
  case 'quinta':
    console.log('Hoje eh quinta-feira');
    break;
  case 'sexta':
    console.log('Hoje eh sexta-feira');
    break;
  case 'sabado':
    console.log('Hoje eh sabado');
    break;
  case 'domingo':
    console.log('Hoje eh domingo');
    break;
  default:
    console.log('Nao achei um dia valido');
}

// Comentario

if (6 > 5) {
  console.log('Maior');
} else {
  console.log('menor');
}

// &&

if (6 > 5 && 1 > 2) {
  console.log(true);
} else {
  console.log(false);
}

if (1 > 2 || 6 > 5) {
  console.log(true);
} else {
  console.log(false);
}
if (1 > 2 || 4 > 5) {
  console.log(true);
} else {
  console.log(false);
}
