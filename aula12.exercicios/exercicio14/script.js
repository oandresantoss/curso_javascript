function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('imagem')

setInterval(() =>{
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    //Formata a hora para dois digitos 
    hora = hora.toString().padStart(2,'0');
    minutos = minutos.toString().padStart(2,'0');
    segundos = segundos.toString().padStart(2,'0');

msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`;

    if (hora >= 6 && hora <=12){
        //Bom dia
        img.src = 'img/manha.jpg';
        document.body.style.background = '#99abaf';
    } else if (hora >=12 && hora <= 18){
        //Boa tarde
          img.src = 'img/tarde.jpg';
          document.body.style.background = '#f7cdb4';
    }else {
        //Boa noite
          img.src = 'img/noite.jpg';
          document.body.style.background = '#373431';
          }
    }, 1000); // Atualiza a cada 1000 milisegundos (1 segundo)
}