let agora = new Date()
let diasema = agora.getDay()

/*
  0 - Domingo
  1 - Segunda
  2 - Terça
  3 - Quarta
  4 - Quinta
  5 - Sexta
  6 - Sábado
*/
//console.log(disasema)

switch(diasema) {
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Teça-Feira')
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia inválido')
        break
}