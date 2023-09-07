
let turno = prompt("Em que turno você estuda? Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno:");
let mensagem;

switch (turno) {
    case 'M':
    case 'm':
        mensagem = "Bom dia!";
        break;
    case 'V':
    case 'v':
        mensagem = "Boa tarde!";
        break;
    case 'N':
    case 'n':
        mensagem = "Boa noite!";
        break;
    default:
        mensagem = "Valor inválido.";
}
alert(mensagem);


// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.