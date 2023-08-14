var numero = document.querySelector('#inumero');
var adicionar = document.querySelector('#adicionar');
var resultado = document.querySelector('#res');
var lista = document.querySelector('#ilista');
var valores = [];
var finalizar = document.querySelector('#finalizar');

adicionar.addEventListener('click', clicar);
finalizar.addEventListener('click', final)

function isNumero (num) {
    if (Number(num) >=1 && Number(num) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista (num, list) {
    if (list.indexOf(Number(num)) != -1) {
        return true;
    } else {
        return false;
    }
}


function clicar() {
    


    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));

        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado!`;
        lista.appendChild(item);
        resultado.innerHTML = ''

    } else {
        alert('Valor inválido ou já consta na lista!');
    }
    numero.value = ''
    numero.focus()
}

function final() {
    if (valores.length == 0) {
        alert('Insira algum valor na lista!');
    } else {
        let total = valores.length;
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maior) {
                maior = valores[posicao]
            }
            if (valores[posicao] < menor) {
                menor = valores[posicao]
            }
        }

        media = soma / total        

        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados!</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valores total é ${soma}</p>`
        resultado.innerHTML += `<p>A média dos números acima é ${media}</p>`

    }
}
