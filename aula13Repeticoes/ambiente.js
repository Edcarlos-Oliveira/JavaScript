// Estrutura que primeiro 'testa' depois executa o bloco; 'Estrutura de repetição com teste lógico no ínicio':
var c = 1
while (c <= 6) {
    console.log('Testando')
    c++
}

// Estrutura que primeiro executa o bloco, depois 'testa'; 'Estrutura de repetição com teste lógico no final:
console.log('') // Pula uma linha
console.log('Teste lógico no final:')
var cont = 1
do {
    console.log(`Passo ${cont}`)
    cont++
}while (cont <= 6) 
