let n = 12
let m = ''
let res = ''

if (n == 0) {
    alert('Por favor, digite um número!')
} else {
    for (let m = 1; m <= 10; m++){
        res = n * m
        console.log(`${n} x ${m} = ${res}`)
    }  
}

