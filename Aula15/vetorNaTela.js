let valores = [8, 1, 4 , 6]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
*/
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/
valores.sort()
for (let pos in valores ){
   console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}