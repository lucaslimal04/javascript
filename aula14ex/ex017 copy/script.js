var clicar = document.querySelector('input[type=button]');

clicar.addEventListener ('click', tabuada);

function tabuada() {
    let num = document.querySelector('#inumero').value;
    let tab = document.querySelector('#tab');
    
    if (num.length == 0) {
        alert('Por favor digite um número!');
    } else {
        let n = Number(num);

        tab.innerHTML = '';
        

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement
            ('option')
            item.value = `tab${c}`;
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
