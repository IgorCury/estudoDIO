// o que são vetores ou arrays

//como declarar um array
let array =['string', 1, true]
console.log(array)

//pode guardar varios arrays
let arraay = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
console.log(arraay)

//foreach

array.forEach(function(item, index){console.log(item, index)});

//puch

array.push('novo item')
console.log(array)

//pop
array.pop()
console.log(array)

//shift
array.shift()
console.log(array)

//unshift
array.unshift()
console.log(array)

//indexof
console.log(array.indexOf(true))

//splice
array.splice(0,3)
console.log(array)

//slice
let novoArray = array.slice(0 ,3)
console.log(novoArray)

//Objetos
let xicara = {
    cor: 'azul',
    tamanho: 'p',
    funcao: 'tomar café'
}
console.log(xicara)

//destruturação

let object = { string: 'string', number: 1, Boolean: true, array: ['array'], objectInterno: {
    objectInterno: 'objeto interno'
}}
console.log(object.objectInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array;
console.log(arrayInterno)

var {string, Boolean, objectInterno} = object
console.log(string, Boolean, objectInterno)