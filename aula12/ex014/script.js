function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
      //  msg.innerHTML = `Bom dia`
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#c5a670'
    }
    else if (hora >= 12 && hora <= 18) {
      //  Boa tarde
      img.src = 'imagens/tarde1.png'
      document.body.style.background = '#B4B7B2'
    }
    else {
        // Boa noite
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#7765A3'
    }
}
