var botao = document.querySelector('input[type=button]');
var pais = document.querySelector('#pais');
var resultado = document.querySelector('#res');

botao.addEventListener('click', calcular)

function calcular() {
    
    var paisValor = pais.value;

    resultado.innerHTML = '';

    if (paisValor === 'Brasil') {
        resultado.innerHTML = `Brasileiro`;
    }
    else if (paisValor === 'França') {
        resultado.innerHTML = `Francês`;
    }
    else {
        resultado.innerHTML = `Estrangeiro`;
    }
  
}
