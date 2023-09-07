let  salarioUser = Number(prompt("Digite aqui seu Sálario"));
let valorMaximo = 1903.98;

if(salarioUser <= valorMaximo){
    console.log(`ISENTO DE IR;`)
}else{
    console.log(`TRIBUTADO NO IR. O valor utrapassa ${valorMaximo}`)
}
// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".