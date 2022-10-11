var http = require('http');
var express = require('express');

var app = express();

app.get("/" , (req, res) => {
    res.status(200).send( "Bem-vindo(a) ao API REST");
});

var lista = ["Adalto", "Maria", "João"];

app.get("/pessoas", (req, res) =>{
    res.status(200).send( lista );
  //  res.status(200).send( lista ).type("json");
  //  res.status(200).send( '{ "pessoas" : ' + JSON.stringify(lista) + ' }' );
});

app.get("/pessoas/:posicao", (req, res) =>{
    const linha = parseInt( req.params.posicao );
    res.status(200).send( lista[linha] );
});

app.post("/pessoas" , (req, res) =>{
    var nome =  "Nome " + lista.length;
    lista.push( nome );
    res.status(200).send( nome + " adicionado" );
});

http.createServer(app).listen(8001, () =>{
    console.log("Servidor iniciado em http://localhost:8001");
});