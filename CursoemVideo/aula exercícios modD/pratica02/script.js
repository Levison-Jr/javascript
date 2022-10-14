var txt = document.getElementById('titulo').innerHTML;
document.getElementById('titulo').innerHTML = txt.toUpperCase();

function verificar() {
    var img = document.getElementById('imagem');
    var data = new Date, currentYear = data.getFullYear(), txtAno = document.getElementById('ano').value, birthYear = Number(txtAno);
    var sexo = document.getElementsByName('sexo'), genero = '';
    var aviso = document.getElementById('aviso');
    var idade = currentYear - birthYear;
    
    if (birthYear > currentYear || txtAno.length == 0) {
        alert('Revise os dados e preencha-os corretamente')
    } else {
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 15) {
                //CRIANÇA
                img.style.backgroundImage = "url('imagens/kid-masc.jpg')";
            } else if (idade < 29) {
                //JOVEM
                img.style.backgroundImage = "url('imagens/jovem-masc.jpg')";
            } else if (idade <= 50) {
                //ADULTO
                img.style.backgroundImage = "url('imagens/adult-masc.jpg')";
            } else if (idade < 200) {
                //IDOSO
                img.style.backgroundImage = "url('imagens/old-masc.jpg')";
            } else {
                //ESQUELETO
                img.style.backgroundImage = "url('imagens/esqueleto.png')";
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 15) {
                //CRIANÇA
                img.style.backgroundImage = "url('imagens/kid-fem.jpg')";
            } else if (idade < 29) {
                //JOVEM
                img.style.backgroundImage = "url('imagens/jovem-fem.jpg')";
            } else if (idade <= 50) {
                //ADULTO
                img.style.backgroundImage = "url('imagens/adult-fem.jpg')";
            } else if (idade < 200) {
                //IDOSO
                img.style.backgroundImage = "url('imagens/old-fem.jpg')";
            } else {
                //ESQUELETO
                img.style.backgroundImage = "url('imagens/esqueleto.png')";
            }
        }


        
        aviso.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>.`;
        img.style.display = 'block';
    }
    
    
}