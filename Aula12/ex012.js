var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`);
if (hora <= 24 && hora >= 18) {
    console.log('BOA NOITE')
} else if (hora < 18 && hora >= 12) {
    console.log('BOA TARDE')
}else{
    console.log('BOM DIA');
}