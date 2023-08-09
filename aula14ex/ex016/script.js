var botao = document.querySelector('input[type=button]')

botao.addEventListener('click', contar)

function contar() {
    let inicio = document.querySelector('#iinicio').value;
    let fim = document.querySelector('#ifim').value;
    let passo = document.querySelector('#ipasso').value;
    let resultado = document.querySelector('#res')


    if (inicio.length === 0 || fim.length === 0 || passo.length === 0) {
        resultado.innerHTML = 'Não é possível contar'
    }
    else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        if(p <=0) {
            alert('Passo inválido! Considerando passo = 1')
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
            resultado.innerHTML += ` ${c} \u{1F449}`
        }
        
        } else {
            // contagem decrescente
            for (let c = i; c > f; c -= p)
            resultado.innerHTML += `${c} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
        
    }

    
}
