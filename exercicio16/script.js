
const anoAtual = new Date().getFullYear();
const anoNascimento = Number(prompt("Digite o ano de nascimento:"));
const idade = anoAtual - anoNascimento;


if (idade >= 16) {
    console.log("A pessoa pode votar este ano.");
} else {
    console.log("A pessoa não pode votar este ano.");
}




// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).