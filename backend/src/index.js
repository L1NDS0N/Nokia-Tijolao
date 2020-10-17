const express = require('express');

const app = express();

app.use(express.json());

const letra = new Map();
letra.set("2", "a");
letra.set("22", "b");
letra.set("222", "c");
letra.set("3", "d");
letra.set("33", "e");
letra.set("333", "f");
letra.set("4", "g");
letra.set("44", "h");
letra.set("444", "i");
letra.set("5", "j");
letra.set("55", "k");
letra.set("555", "l");
letra.set("6", "m");
letra.set("66", "n");
letra.set("666", "o");
letra.set("7", "p");
letra.set("77", "q");
letra.set("777", "r");
letra.set("7777", "s");
letra.set("8", "t");
letra.set("88", "u");
letra.set("888", "v");
letra.set("9", "w");
letra.set("99", "x");
letra.set("999", "y");
letra.set("9999", "z");

var palavraSeparada = "";
var palavraRetorno = "";

function converte(pa){
    palavraSeparada2 = pa.split(" ");
    console.log(palavraSeparada2)
  palavraRetorno = "";
    for ( var i = 0; i < palavraSeparada2.length; i++ ){
        if(letra.has(palavraSeparada2[i])){
      palavraRetorno += letra.get(palavraSeparada2[i])
    } else{
            
            palavraRetorno += "?"
    }
}
    return palavraRetorno;
}

app.post('/app/:char', (req, res) => {
    const telNumber = req.params.char;
    const telPalavra = converte(telNumber);

    if (telPalavra === "undefined") {
        return res.status(404).json({ "Erro": "Erro na conversão do número inserido", telPalavra }).send();
    }
    return res.json({
        "numeroDigitado": telNumber,
        "palavraGerada": telPalavra
    })


})

app.listen(3333);