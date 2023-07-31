function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    
    var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade > 0 && idade <= 10) {
                // Bebê
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }
            else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }
            else if(idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
            
        }
        else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade > 0 && idade <= 10) {
                // Bebê
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }
            else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }
            else if(idade < 60) {
                // adulto
                img.setAttribute('src', 'imagens/foto-adulta-f.png')
            }
            else {
                // idoso
                img.setAttribute('src', 'imagens/foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Vc é ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
        var imgElement = document.getElementById('foto')
        imgElement.style.display = 'block'
        imgElement.style.margin = '0 auto'
        
}
