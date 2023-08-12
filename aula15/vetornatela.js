let valores = [8, 1, 5, 6, 7, 9];
/*
for(let pos = 0; pos < valores.length; pos++) {
    valores.sort();
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
valores.sort()
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}