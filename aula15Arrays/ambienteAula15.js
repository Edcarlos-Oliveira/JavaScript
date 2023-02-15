// Arrays:
let num = [5,8,2,9,3]
console.log(`Nosso vetor tem os seguintes valores: ${num}`)// escreve os valores sem colchetes
console.log(num) // Escreve os valores com colchetes

console.log()

// Adcionando números e Buscando um número:
let num2 = [8,2,9]
num2[3] = 6 // Acrescenta o número 6 na ultima posição
num2.push(7) // Explicitando a posição
num2.indexOf(9) // Busca o número 9 na lista.

console.log(num2)
console.log(`O vetor tem ${num2.length} elementos.`) // Conta os elementos.
console.log(`Colocando os valores em ordem ${num2.sort()}`) // Coloca em ordem.
console.log(`O número na posiçao 4 é: ${num2[4]}`) // Retorna o valor depois de organizado, 'sort()' veio antes de buscar a posição '[4]' a ordem é importante.
console.log(`Buscando o número no vetor, ${num2.indexOf(9)}`) // O 'O' precisa ser maiusculo.

// Obs: Caso o número buscado não exista, o resultado será '-1', nesse caso:
let pos = num2.indexOf(1) // 1 não existem em 'num2'
if(pos == -1) {
    console.log('Número não encontrado!')
}else {
    console.log(`O valor está na posição ${pos}`)
}

console.log()

// Verificando o tamanho com 'for':
let num3 = [5,6,3,9,8,4,2]
console.log(`Os valores são: ${num3}`)

console.log()

for(let cont = 0; cont < num3.length; cont++){
    console.log(`A posição ${cont} tem o valor ${num3[cont]}`)
}
console.log()

// Modo Simplificado com 'for':
let num4 = [2,5,6,3,8,1,7]
console.log(`Os valores são: ${num4}`)
console.log()
for(let cont in num4) {
    console.log(`A posição ${cont} tem os valor ${num4[cont]}`)
}
