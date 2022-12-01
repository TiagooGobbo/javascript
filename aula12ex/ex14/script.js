var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas. `
if (hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = '#e0b356'
}else if ( hora >= 12 && hora <= 18){
    //BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = '#ca5e1f'
}else {
    //BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = '#3c3334'
}