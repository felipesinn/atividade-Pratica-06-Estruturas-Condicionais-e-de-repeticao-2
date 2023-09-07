function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

let numero = Number(prompt("Digite um número:"));

if (isPrimo(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}



// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.