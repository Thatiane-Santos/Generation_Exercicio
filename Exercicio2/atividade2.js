//Importamos o pacote
const readline = require("readline-sync");

let nota1 = readline.questionFloat("Digite nota1: ");
let nota2 = readline.questionFloat("Digite nota2: ");
let nota3 = readline.questionFloat("Digite nota3: ");
let nota4 = readline.questionFloat("Digite nota4: ");

console.log(`Media Final: ${(nota1 + nota2 + nota3 + nota4)/4}`);