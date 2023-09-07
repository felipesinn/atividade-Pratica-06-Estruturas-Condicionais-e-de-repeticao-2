
let numero = Number(prompt("Digite um número:"));

let soma = 0;
while (soma + numero < 500) {
    numero *= 3; 
    soma += numero;
}

console.log("O último valor multiplicado por 3 é:", numero);


// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor