// Início do Programa
function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Retorna o ano com 4 digitos.
    var fano = document.querySelector('input#txtano') // Recebe o ano digitado pelo usuário, 'fano = formulário ano'.
    var res = document.querySelector('div#resp')

// Verificador da caixa de texto vazia ou ano maior que ano atual:
    if (fano.value.length == 0) {
        window.alert('[ERRO] Digite o ano no local indicado!')
    }else if (fano.value.length < 4) {
        window.alert('[ERRO] Digite o ano no formato com 4 dígitos!' )
    }else if (Number(fano.value) > ano){
        window.alert('[ERRO] Ano maior que o ano atual!')
    }else {
        var fsex = document.getElementsByName('radsex') // Objeto formulário do sexo.
        var idade = ano - Number(fano.value) // Calcula a idade
        var genero = '' // Recebe a opção de Masculino ou Feminino.
        var img = document.createElement('img') // Cria um elemento
        img.setAttribute('id', 'foto') // Atribuiu um 'id' ao 'img' criado
        img.style.borderRadius = '5px' // Aredonda as bordas da imagem. 

// Leitura dos dados do sexo Masculino:
        if (fsex[0].checked) {
            if ( idade > 0 && idade < 3) {
                genero = 'Bebê "M"'
                img.setAttribute('src', 'bebeH.jpg')
            }else if (idade < 12) {
                genero = 'Criança "M"'
                img.setAttribute('src', 'criancaH.jpg')
            }else if (idade < 18) {
                genero = 'Adolescente "M"'
                img.setAttribute('src', 'meninoAdo.png')
            }else if (idade < 30) {
                genero = 'Jovem "M"'
                img.setAttribute('src', 'jovemM.jpg')
            }else if (idade < 50) {
                genero = 'Adulto "M"'
                img.setAttribute('src', 'adultoH.png')
            }else {
                genero = 'Idoso "M"'
                img.setAttribute('src', 'idoso.png')
            }
        }

// Leitura dos dados do sexo Feminino:
        else if (fsex[1].checked) {
            if ( idade > 0 && idade < 3) {
                genero = 'Bebê "F"'
                img.setAttribute('src', 'bebeF.png')
            }else if (idade < 12) {
                genero = 'Criança "F"'
                img.setAttribute('src', 'criancaF.png')
            }else if (idade < 18) {
                genero = 'Adolescente "F"'
                img.setAttribute('src', 'meninaAdo.png')
            }else if (idade < 30) {
                genero = 'Jovem "F"'
                img.setAttribute('src', 'jovemF.png')
            }else if (idade < 50) {
                genero = 'Adulto "F"'
                img.setAttribute('src', 'adultoM.png')
            }else {
                genero = 'Idosa "F"'
                img.setAttribute('src', 'idosa.png')
            }
        }
    }      
    res.style.textAlign = 'center'
    res.innerHTML = `Detectado um(a) <strong>${genero}</strong> com <strong>${idade}</strong> ano(s).`
    res.appendChild(img) // Para colocar a imagem abaixo do texto da idade.
}

