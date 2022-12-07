function contar() {
    var numberIni = document.getElementById('#inicio')
    var numberFim = document.querySelector('#fim')
    var soma = document.querySelector('#passo')
    var res = document.querySelector('#res')

    var i = Number(numberIni)
    var f = Number(numberFim)
    var s = Number(soma)

    for (var i; i < f; i = i + s) {
       res.innerHTML = i
    }
}