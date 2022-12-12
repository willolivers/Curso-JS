let num = [5,8,2,9,3]
num[5] = 6

num.sort()
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posicao ${pos}`)