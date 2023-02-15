// Criando um Array (Usa os colchetes) :
let num = [25,35,10,15,12] // Nesse caso os elementos são numerados apartir do 0 
console.log(num)

console.log()

// Criando um Objeto (Usa as chaves):
let amigo = {nome:'Edcarlos', sexo:'M', peso: 90, engordar(p=0){
    // Aqui escreve a função engordar
    console.log('Engordou')
    this.peso += p // 'this' auto-referência ao objeto.
}}
amigo.engordar(5) // Atribui '5 kg' ao peso declarado '90'
console.log(amigo) // Mostra tudo que está entre chaves.
console.log(amigo.nome) // Mostra só o nome do objeto 'Edcarlos'
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`) // Mostra o nome 'Edcarlos' e peso declarado '90'
console.log(amigo.sexo) // Mostra o sexo 'M'