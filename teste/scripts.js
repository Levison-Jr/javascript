$(function() { //Função de layout da tabela
    $( "#tabs" ).tabs();
    $(".conteiner").draggable({handle: "#nav"});
});

var seletorPrincipal_global="";
var idRandomGlobal = 1;

function editar(seletorPrincipal) {    
    var pro = seletorPrincipal.find(".pro").html();
    seletorPrincipal_global = seletorPrincipal;
    $("#inome").val(pro);
    
    $("#bt-cadastro").html('Salvar');
    $( "#tabs" ).tabs({ active: 0 });
}

function cadastrar() {
    var pro=$("#inome").val();

    if(pro == "") {
        alert("Campo NOME DO PRODUTO inválido!");
        $("#inome").focus();
        return false;
    }

    dataAtual = moment().format('DD/MM/YYYY'); 
    horaAtual = moment().format('H:mm:ss');

    var addRow = '<tr>'+
                '<th scope="row" class="id">'+idRandomGlobal+'</th>'+
                '<td class="pro">'+pro+'</td>'+
                '<td>'+dataAtual+'</td>'+
                '<td>'+horaAtual+'</td>'+
                '<td><button type="button" class="btn btn-secondary btn-sm bt-editar">Editar</button> <button type="button" class="btn btn-danger btn-sm bt-remover">Remover</button></td>'+
                '</tr>';
    
    if(seletorPrincipal_global) { //Conferindo o botão pressionado EDITAR/REMOVER
         seletorPrincipal_global.find(".pro").html($("#inome").val());
         seletorPrincipal_global="";
         $( "#tabs" ).tabs({ active: 1 });
         $("#bt-cadastro").html('Cadastrar');
    } else {
         $("#lista_produtos").append(addRow);
         $("#inome").focus();
         idRandomGlobal++;
    }                        

    $("#inome").val(""); //Limpa o campo input
    $(".bt-editar").unbind(); //Limpa a fila de listeners
    
    $(".bt-editar").click(function() { //Listener botão EDITAR
        editar($(this).parent().parent());
    });

    $(".bt-remover").click(function() { //Listener botão REMOVER
        $(this).parent().parent().remove();
    });

}

$(document).ready(function() { //Após carregamento (document) => Listener botão CADASTRAR
    $("#bt-cadastro").click(function(){            
        cadastrar();            
    });
});