//CHAMANDO AS VARIAVEIS COM OS ID
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
//GERANDO O VETOR
let valores = []
//FUNCAO PARA SABER SE O NUMERO ESTA ENTRE 1 E 100
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
    
}
//
function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar() { // ! SIGNIFICA NÃO
   if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
   }else{
        window.alert('Valor invalido ou já encontrado na lista')
   }
   num.value = ''
   num.focus()
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    }
}



