// Criando os objetos:
var dados = document.querySelector('input#num')  // Usuário digita os dados.
var adc = document.querySelector('select#selAdc') // Recebe os dados.
var analise = document.querySelector('div#resanl') // Recebe a análise.
var valores = []

// Verifica se o número digitado está entre 1 e 100.
function isnamber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
// Verifica se o número digitado existe na lista. '-1' é quando não é encontrado
function inlist(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}
function adcionar() {
    if(isnamber(dados.value) && !inlist(dados.value, valores)) { // A '!(não)' é muito importante para a análise
        var obj = document.createElement('option')
        obj.text = (`Valor ${dados.value} adcionado.`)
        adc.appendChild(obj)
        valores.push(Number(dados.value))
        analise.innerHTML = '' // Limpa os dados da análise quando adcionado novo número, pós análise.
        
    }else {
        window.alert('Valor INVÁLIDO ou já encontrado.')
    }

 // Para Limpar o input que recebe os dados:
    dados.value = ''
    dados.focus()   
}     
function result() { 
    if(valores == ''){
        window.alert('[ERRO] Nenhum número digitado!!!')
    }else {

    for(var cont in valores) {
// Acha o número maior e menor:
        if(cont == 0){
        mai = men = valores[cont]
        }else if(valores[cont] > mai) {
            mai = valores[cont]
        }else if(valores[cont] < men) {
            men = valores[cont]
        }       
    }
          
// Soma todos os valores do array:
    var soma = valores.reduce(function(soma, i) {
        return soma + i
    })

// Acha a média de todos os valores cadastrados:
    var media = soma/valores.length  

// Mostra os resultados:
        analise.innerHTML = '' // Mantém a lista limpa.
        analise.innerHTML = (`Lista dos valores cadastrados: [${valores}]<br>`)
        analise.innerHTML += (`O total de valores cadastrados são: ${valores.length}<br>`)
        analise.innerHTML += (`O maior valor foi: ${mai}<br>`)
        analise.innerHTML += (`O menor valor foi: ${men}<br>`)
        analise.innerHTML += (`A soma dos valores cadastrados são: ${soma}<br>`)
        analise.innerHTML += (`A média dos valores cadastrados são: ${media.toFixed(2)}`) //'toFixed(2)' duas casas após a virgula.  
    }      
}
    
     



