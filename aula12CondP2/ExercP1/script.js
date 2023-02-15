// Função para executar quando o site for aberto ou recarregado.
function carregar() {
    var msg = window.document.querySelector('div#txt') // Criação do objeto mensagem
    var img = window.document.getElementById('foto') // Criação do objeto imagem
    var date = new Date()
    var hora = date.getHours() // Retorna a hora
    var min = date.getMinutes() // Retorna os minutos     
    msg.innerHTML = `Agora são <strong>${hora + ':' + min}</strong> horário de Brasília.` // Os sinais de '+' são essenciais.

// Condições para executrar os horários, mudando a imagem e cores do 'body':

   if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'manha.jpg' // Coloca a imagem correspondente ao horário
        document.body.style.background = '#8f99a2' // Coloca a cor correspondente ao horário 
    }else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#f5d29c'
    }else {
        // Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#22527a'
    }
}
