// entrada das variaveis
const nota1 = prompt("Digite a 1ª nota")
const nota2 = prompt("Digite a 2ª nota")
const nota3 = prompt("Digite a 3ª nota")
// Média aritimetica de 3 notas, menor que 3 horrivel
// menor que 7 da pra mioria

// processamento


const soma = Number(nota1) + Number(nota2) + Number(nota3)
const media = soma / 3

if (media < 3) {
    alert("Média é insuficiente" + media + " - horrível")
} else if (media < 7) {
    alert("Média é insuficiente" + media + " - da pa miora")
} else {
     alert("Média é suficiente" + media + " - PARABENS")
}