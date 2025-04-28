function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'img/manha.jpg'
    } else if (hora >=12 && hora < 18){
        //Boa tarde
          img.src = 'img/tarde.jpg'
    }else {
        //Boa noite
          img.src = 'img/noite.jpg'
    }
}