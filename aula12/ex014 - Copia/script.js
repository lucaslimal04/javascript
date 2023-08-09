document.addEventListener('DOMContentLoaded', carregar);

function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var boas = document.querySelector('#boa')
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    
    msg.innerHTML = `<p>Agora são ${hora} horas e ${minutos} minutos.</p>`;
    
    if (hora >= 0 && hora < 12) {
      //  Bom dia
        img.src = 'imagens/manha1.png';
        document.body.style.background = '#c5a670';
        boas.innerHTML = `<p>Bom dia</p>`
    }
    else if (hora >= 12 && hora <= 18) {
      //  Boa tarde
      img.src = 'imagens/tarde1.png';
      document.body.style.background = '#B4B7B2';
      boas.innerHTML = `<p>Boa tarde</p>`
    }
    else {
        // Boa noite
        img.src = 'imagens/noite1.png';
        document.body.style.background = '#7765A3';
        boas.innerHTML = `<p>Boa noite</p>`
    }
}
