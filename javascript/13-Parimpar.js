//pegar o exercísio do github e colocar aqui





//entrada
//sempre colocaremos variaveis, dos tipo...
//const - algo fixo
//let - nao fixo
//var - erro
//pedir info para o usuario prompt
// explicar dentro do prompt do que se trata a solicitação
const numero = Number(prompt('Digite um numero: '))        

//Processamento
//Normalmente vem um cauculo aqui
// pode tambem ser usada variavel aqui
//Fazer uma divisão e pegar o resto
const resto = numero % 2
//ele é par ou impar

// saida
// mostra o resultado com alert()
if(resto == 0){
    alert("O numero informado é par")
} else {
    alert("O número informado é impar")
}