//Importamos o pacote
const readline = require("readline-sync");

let salariobruto = readline.questionFloat("Salario Bruto: ");
let adicionalnoturno = readline.questionFloat("Adicional Noturno: ");
let horaextra = readline.questionFloat("Hora Extra: ");
let descontos = readline.questionFloat("Descontos: ");

console.log(`Salario Liquido: ${(salariobruto + adicionalnoturno + (horaextra*5) - descontos)}`);