function gerar() {
// Criando os objetos:
    var dados = document.querySelector('input#num')   
    var resp = document.querySelector('select#seltab')
    var n = Number(dados.value)
    
// Formulário sem número:
    if(dados.value.length == 0) {
        window.alert('Você não digitou nenhum número!!!')        
    } 
    
// Criando a Tabuada:
    else {
        s = 0
        resp.innerHTML = '' // Limpa o 'select' 
        for(var c = 1; c <= 10; c++) {
            s = n * c 
            var obj = document.createElement('option')
            obj.text = `${n} x ${c} = ${s}`
            resp.appendChild(obj)
        }
    }
}
