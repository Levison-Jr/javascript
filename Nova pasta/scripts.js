function getData(resposta) {
    var db = [];
    
    $.ajax({
        method: "GET",
        url: "ProdutosBrumado.csv"
      }).done(function(msg) {
            var dadosGerais = msg.split('\r');

            $.each(dadosGerais, function(index, value) {
                if(index == 0) {
                    var ind = value.split(";");
                }
                
                if(index > 0) {
                    var tes = ["codigo"];
                    var valores = value.split(";");
                    db.push({"codigo":valores[0], "Produto":valores[2], "NCM":valores[18]});
                }
            })

            resposta(db);
        // $.each(msg.split("\r"),function(key,d){
        //
        //     if(key>0){
        //     var linha = d.split(";");
        //      db.push({"codigo":linha[0], "Produto":linha[2], "NCM":linha[18]});
        //     }
            
        //     });
        //  resposta(db);
        });
}
