console.log('Esse sistema está funcionando corretamente') // Para executar com o node.js a sintaxe correta 'console.log',
// Nesse caso 'document.write' não executa.

var vel = 61
var per = 60
console.log(`A velocidade do seu carro foi de ${vel} Km/h.`)
if (vel > per) {
    console.log(`Você ultrapassou o limite de ${per} Km/h e foi MULTADO.`)
}
