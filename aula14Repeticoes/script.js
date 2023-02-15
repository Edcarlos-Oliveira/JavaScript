// Criação dos objetos:
function contar() {
    var inicio = document.querySelector('input#inc') // O 'var' poderia ser substituido por 'let'.
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#pas') 
    var resposta = document.querySelector('div#rest')
    
// Validações do formulário:
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Existe dados não PREENCHIDOS, digite um número para iniciar!')
    }else {
        resposta.innerHTML = 'Contando: '
        var n = Number(inicio.value) // Número início
        var f = Number(fim.value) // Número fim
        var p = Number(passo.value) // Número Passo

// Validação quando o passo for '0' ou negativo
        if(p <= 0) {
            window.alert('IMPOSSÍVEL contar, iniciando a contagem com passo 1')
            p = 1
        }

// Contagem Crescente:
        if(n < f){
            for(var c = n; c <= f; c += p) {
                resposta.innerHTML += (` ${c} \u{1F449}`) //Codigo do emoji substituindo 'U+' por '\u'
            }
        }
// Contagem Decrescente:    
        else {
            for(var c = n; c >= f; c -= p) {
                resposta.innerHTML += (` ${c} \u{1F449}`) //Codigo do emoji substituindo 'U+' por '\u'
            }
        }
    }   
    resposta.innerHTML += '\u{1F3C1}'
}   
    

