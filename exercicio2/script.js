let idadeMotorista = Number(prompt("Digite aqui sua idade."));
let habilitacao = confirm("Possui Abilitação ?");

if (idadeMotorista >= 18 && habilitacao) {
  console.log("Pode derigir");
} else {
  console.log("Não Pode dirigir");
}
// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.
