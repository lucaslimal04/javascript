let num = [5,8,2,9,3];
num.push(1);
console.log(num);
console.log(`O array num tem ${num.length} posições!`);
console.log(`O array terceiro valor do array num é ${num[2]}`);

let pos = num.indexOf(5);
if(pos == -1) {
    console.log(`O valor não foi encontrado`);
} else {
    console.log(`O valor está na posição ${pos}`);
}
