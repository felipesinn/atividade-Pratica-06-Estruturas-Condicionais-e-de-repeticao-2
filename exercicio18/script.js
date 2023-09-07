
let precoTabela = Number(prompt("Digite o preço de tabela do produto:"));
let numeroParcelas = Number(prompt("Digite o número de parcelas desejadas:"));

if (numeroParcelas <= 0) {
    console.log("Número de parcelas inválido. Deve ser maior que zero.");
} else {
    let valorParcela = precoTabela / numeroParcelas;a
    let precoTotal = precoTabela;
l
    console.log(`Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`);
    console.log(`Preço total da compra: R$ ${precoTotal.toFixed(2)}`);
}
