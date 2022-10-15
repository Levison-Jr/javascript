var btn = document.getElementById('btn-cont');
btn.addEventListener('click', contar);

function contar() {
    var txtStart = document.querySelector('#cont-start'), 
        start = Number(txtStart.value);
    var txtEnd = document.querySelector('#cont-end'),
        end = Number(txtEnd.value);
    var txtPasso = document.querySelector('#cont-passo'),
        passo = Number(txtPasso.value);
    var res = document.querySelector('#res');
    
    if (txtStart.value.length == 0 || txtEnd.value.length == 0) {
        alert('Preencha os dados corretamente!');
    } else {
        res.innerHTML = '';

        if (txtPasso.value.length == 0 || passo == 0) {
            alert('O passo não foi definido ou é inválido. Será considerado Passo: 1.');
            passo = 1;
        }

        if (start <= end) {
            for (var i = start; i <= end; i += passo) {
                res.innerHTML += ` ${i} \u{27A1}`
            }
        } else {
            passo *= -1;
            for (var i = start; i >= end; i += passo) {
                res.innerHTML += ` ${i} \u{27A1}`
            }
        }

        res.innerHTML += ` \u{1F3C1};`;
    }
}