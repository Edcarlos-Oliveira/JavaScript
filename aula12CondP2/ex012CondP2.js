var agora = new Date() // Para pegar a informação atual do sistema
var hora = agora.getHours() // Pega a hora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
}else if (hora <= 18) {
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}