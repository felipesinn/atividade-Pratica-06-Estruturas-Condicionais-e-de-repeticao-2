
let totalEleitores = Number(prompt("Digite o número total de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));


if (votosBrancos + votosNulos + votosValidos <= totalEleitores) {
    let percentualBrancos = (votosBrancos / totalEleitores) * 100;
    let percentualNulos = (votosNulos / totalEleitores) * 100;
    let percentualValidos = (votosValidos / totalEleitores) * 100;

    console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
    console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
    console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
} else {
    console.log("A soma dos votos excede o número total de eleitores.");
}

// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.