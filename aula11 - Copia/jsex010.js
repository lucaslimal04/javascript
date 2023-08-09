    var numero = document.querySelector('input[type=number]');
    var botao = document.querySelector('input[type=button]');
    var calculo = document.querySelector('#txtvel');
    var resultado = document.querySelector('#res');
    
    botao.addEventListener('click', calcular);
    
function calcular () {
    var velocidade = Number(calculo.value);

    resultado.innerHTML = ''

    resultado.innerHTML += (`<p>Sua velocidade atual é de ${velocidade}km/h<p/>`);

    if (velocidade > 60) {
        resultado.innerHTML += `<p>Sua velocidade excedeu o limite!!<p/>`;
    }
    else {
        resultado.innerHTML += `<p>Você está dirigindo dentro do limite de velocidade<p/>`;
    }

    resultado.innerHTML += `<p>Use o cinto de segurança<p/>`;

}
