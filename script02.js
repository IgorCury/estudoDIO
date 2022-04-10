//tipos primitivos


//boolean

var VouF = false;
console.log(typeof(VouF))

//number
var numeroQualquer = 1
console.log(typeof(numeroQualquer))

//string 
var nome = "Igor"
console.log(typeof(Igor))

var funcao = function() {}
console.log(typeof(funcao))

//como declarar
//var escopo global e local
var variavel = "Igor"
var variavel = "Cury"
console.log(variavel);

//let escopo local de bloco

let variavel2 = "Igor"
console.log(variavel2);

//const escopo local de bloco soment leitura
const constante ="Igor"
console.log(constante)

// teste de var

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoGlobalIterno = 'local';
    console.log(escopoGlobalIterno);
}

escopoLocal()

//atribuicao

var atribuicao = "Igor"

//comparacao

var comparacao = '0' == 0
console.log(comparacao)

// comparacao idendica
var comparacaoIdendtica = '0' === 0
console.log(comparacaoIdendtica)

//adicao
var adicao = 1 + 1
console.log(adicao)

//subtracao
var subtracao = 2 - 1
console.log(subtracao)

//multiplicacao
var multiplicacao = 2 * 2
console.log(multiplicacao)

//divisao

var divisao = 10 / 5
console.log(divisao)

//divisao inteira
var divisaoReal = 5 % 2
console.log(divisaoReal)

//potenciacao
var potenciacao = 2 ** 10
console.log(potenciacao)

//maior que

var mairoQue = 5 > 2
console.log(mairoQue)

//menor Que
var mairoQue = 5 < 2
console.log(mairoQue)

//Maior ou igual a
var mairoouigual = 5 >= 2
console.log(mairoouigual)

//Menor ou igual a
var menoroouigual = 5 <= 2
console.log(menoroouigual)

//Todos os valores && valor sejam true
var e = true && false
console.log(e)

//Qualquer || valor seja  true

var ou = true || false
console.log(ou)

//Inverte os valores !

var nao = ! true
console.log(nao)
