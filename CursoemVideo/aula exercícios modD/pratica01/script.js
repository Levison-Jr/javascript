var agora = new Date;
var horaAtual = agora.getHours();
var min = agora.getMinutes();
// var horaAtual = 20;
// var min = 1;
document.querySelector('#hora').innerHTML = `Agora são ${horaAtual}h:${min}min`;

var txt = document.getElementById('titulo').innerHTML;
document.getElementById('titulo').innerHTML = txt.toUpperCase();

if (horaAtual >= 0 && horaAtual <= 5) {
    document.getElementById('imagem').style.backgroundImage = "url('imagens/madrugada.jpg')";
    document.getElementById('container').style.backgroundColor = '#13120C';
} else if (horaAtual <= 11) {
    document.getElementById('imagem').style.backgroundImage = "url('imagens/manha.jpg')";
    document.getElementById('container').style.backgroundColor = '#3B91D4';
} else if (horaAtual <=17) {
    document.getElementById('imagem').style.backgroundImage = "url('imagens/tarde.jpg')";
    document.getElementById('container').style.backgroundColor = '#C47824';
} else if (horaAtual <= 23) {
    document.getElementById('imagem').style.backgroundImage = "url('imagens/noite.jpg')";
    document.getElementById('container').style.backgroundColor = '#5A4252';
}