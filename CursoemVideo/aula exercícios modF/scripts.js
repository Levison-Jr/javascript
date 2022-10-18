var geral = []
var res = document.getElementById('result')

function add() {
    var txtNum = document.querySelector('#txtnum'), num = Number(txtNum.value)
    var list = document.querySelector('#list')
    
    if (txtNum.value.length == 0 || num < 1 || num > 100 || geral.indexOf(num) != -1) {
        alert('Valor inválido ou já adicionado')
    } else {
        var item = document.createElement('option')
        res.innerHTML = ''
        item.innerText = `Valor ${num} adicionado`
        list.appendChild(item)
        geral.push(num)
    }
        txtNum.value = ''
        txtNum.focus()
}

function end() {
    if (geral.length == 0) {
        alert('Digite um ou mais valores antes de finalizar!!!')
    } else {
        var quantidade = 0, max = geral[0], min = geral[0], soma = 0, media = 0
        
        for (key in geral) {
            if (geral[key] > max) {
                max = geral[key]
            }
            if (geral[key] < min) {
                min = geral[key]
            }
            soma += geral[key]
        }
        quantidade = geral.length
        media = soma/quantidade
        
        res.innerHTML = `Ao todo, foram ${quantidade} números cadastrados. <br> O maior valor foi ${max} <br> O menor valor foi ${min} <br> A soma de todos os valores é ${soma} <br> A média dos valores digitados é igual à ${media}`
    }

}

function clean() {
    var list = document.querySelector('#list')
    list.innerHTML = '<option value="demo" disabled>Digite algum número acima para adicioná-lo à lista...</option>'

    geral = []
    res.innerHTML = ''
}