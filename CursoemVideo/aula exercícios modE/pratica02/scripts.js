function gerar() {
    var txtNum = document.querySelector('#txtnum'),
        num = Number(txtNum.value);
    var res = document.querySelector('#res');
    var tab = document.querySelector('#tab');

    if (txtNum.value.length == 0) {
        alert('Digite um número!!!');
    } else {
        tab.innerHTML = '';
        
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option');
            item.text = `${num} x ${i} = ${i * num}`;
            item.value = `tab${i}`;
            tab.appendChild(item);
        }
    }
}

function limpar() {
    var txtNum = document.querySelector('#txtnum');
    var res = document.querySelector('#res');

    txtNum.value = '';
    res.innerHTML = '<select name="tab" id="tab" size="10"> <option value="v1">Digite um número acima para gerar a tabuada...</option> </select>';
}