//estruturas
let jogador1 = 1;
let jogador2 = 0
let placar;

jogador1 !== -1 && jogador2 !== console.log("os jogadores são validos")

//usando if
if(jogador1 > 0){
    console.log('jogador 1 marcou um ponto') 

    //usando else if
}else if(jogador2 > 0){
    console.log('jogador 2 marcou um ponto') 
}

// usando else
else{
    console.log('niguem marcou ponto')
}

//switch case

switch (placar){
    case placar = jogador1 > jogador2:
    console.log('jogador1 ganhou');
    break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 ganhou')
        break;
        default:
        console.log('Ninguem ganhou')
}



// repetção for

let array  = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',]
let obeject = { propriedades: 'valor1', propriedades2:'valor2', propriedade3: 'valor3' }

//for executa uma intrução ate que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)

}

//for/in executa repetição a partir de uma propriedade
for (let i in array){
    console.log(i)
}

//com object
for (i in obeject){
    console.log(i)
}

//com array
for (i in array){
    console.log(i)
}

//for com object
for (i of obeject.propriedades){
    console.log(i)
}

///while cuidado para não virar infinito

var a = 0
while (a < 10) {
    a++
    console.log(a)
}

do {
    a++
    console.log(a)
}while (a < 10)