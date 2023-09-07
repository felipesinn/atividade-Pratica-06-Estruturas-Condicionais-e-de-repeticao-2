
let altura = Number(prompt("Digite a altura da pessoa em metros:"));
let sexo = Number(prompt("Digite o sexo da pessoa (1 para feminino ou 2 para masculino):"));
let pesoIdeal;


if (sexo === 1) { 
    pesoIdeal = (62.1 * altura) - 44.7;
} else if (sexo === 2) { 
    pesoIdeal = (72.7 * altura) - 58;
} else {
    console.log("Sexo não reconhecido. Use 1 para feminino e 2 para masculino.");
}


if (pesoIdeal !== undefined) {
    console.log(`O peso ideal para uma pessoa com altura de ${altura} metros e sexo ${sexo === 1 ? "feminino" : "masculino"} é de aproximadamente ${pesoIdeal.toFixed(2)} kg.`);
}
// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7