//Importamos o pacote
const readline = require("readline-sync");

let numero1 = readline.questionFloat("Numero1: ");
let numero2 = readline.questionFloat("Numero2: ");
let numero3 = readline.questionFloat("Numero3: ");
let numero4 = readline.questionFloat("Numero4: ");

console.log(`Calculo: ${(numero1 * numero2) - (numero3 * numero4)}`);