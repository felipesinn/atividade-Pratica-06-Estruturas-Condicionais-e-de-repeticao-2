let numero =Number(prompt("Digite um numero de 1 a 7"));

if (numero === 1) {
    console.log("Domingo");
}
if( numero === 2){
    console.log("Segunda-feira");
}
if( numero === 3) {
    console.log("Terça-Feira");
}
if(numero === 4){
    console.log("Quarta-Feira");
}
if(numero === 5) {
    console.log("Quinta-Feira");
}
if(numero === 6) {
    console.log("Sexta_feira");
}
if(numero === 7){
    console.log("Sábado");
} else (
    console.log("Dia não reconhecido")
)
// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.