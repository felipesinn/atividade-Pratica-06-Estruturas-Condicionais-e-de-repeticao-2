// Solicita ao usuário que digite um número
let numeroArmazenado = Number(prompt("Digite um número:"));
if (numeroArmazenado < 1) {
    console.log("O número deve ser maior ou igual a 1.");
} else {
    console.log(`Números ímpares entre 1 e ${numeroArmazenado}:`);

 
    for (let i = 1; i <= numeroArmazenado; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}


// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.