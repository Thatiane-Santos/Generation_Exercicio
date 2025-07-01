//Importamos o pacote
const readline = require("readline-sync");

//No processamento utilizamos os métodos(funções prontas que vem junto com o readline-sync). Esses métodos servem para fazermos perguntas e já tratar o tipo de dado que o usuário digita.
let salario = readline.questionFloat("Digite seu Salario: ");
let abono = readline.questionFloat("Digite o Abono: ");

console.log(`Novo Salario: ${salario + abono}`);


// //Importamos o pacote
// const readline = require("readline-sync");

// //No processamento utilizamos os métodos(funções prontas que vem junto com o readline-sync). Esses métodos servem para fazermos perguntas e já tratar o tipo de dado que o usuário digita.
// let nome = readline.question("Digite seu nome: ");
// let idade = readline.questionInt("Digite sua idade: ");
// let altura = readline.questionFloat("Digite sua altura em metros: ");

// console.log(`\nOlá, ${nome}!`);
// console.log(`Você tem ${idade} anos e ${altura.toFixed(2)}m de altura.`);


