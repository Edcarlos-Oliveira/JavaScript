// Trabalhando com funções:
function parimpar(n){
    if(n % 2 == 0) {
        return 'PAR!'
    }else {
        return 'IMPAR!'
    }
}
let res = parimpar(260) // Poderia ser reescrito assim:'console.log(parimpar(260))'
console.log(`O numéro é ${res}`)

console.log()

// Função soma:
function soma(n1 = 0, n2 = 0) { // Usado o '0' caso não seja declarado nem parâmetro.
    return n1 + n2
}
console.log(`A soma é: ${soma()}`) // Nesse caso o resultado é '0'.
console.log()
console.log(`A soma dos nº é: ${soma(5,2)}`) // Nesse caso o resultado é 7

console.log()
// Função dentro de Variável:
let v = function(x) { // Nesse caso a variável 'v' recebe uma função com parâmetro 'x'
    return x*2 
}
console.log(`A multiplicação é: ${v(5)}`) // Retorna o valor da variável, nesse caso 'x*2 = 10'

console.log()
// Fatorial com função Tradicional:
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(`O fatorial é: ${fatorial(5)}`)

console.log()

// Fatorial com Função Recursiva
function fatorial2(n) {
    if(n == 1) {
        return 1
    }else {
        return n * fatorial2(n-1)
    }
}
console.log(`O fatorial na forma recursiva é: ${fatorial2(6)}`)

