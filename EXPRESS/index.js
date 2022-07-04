const express = require("express"); //Importa
const app = express(); //Iniciando o express em app


app.get("/", function (req, res) {
    res.send("bem vindo!")
});


//PARAMTROS OPCIONAIS
app.get("/blog/:artigo?", function (req, res) {

    var artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2>Artigo: " + artigo + "</h2>")
    } else {
        res.send("<h3>Bem vindo ao blog!</h3>")
    }

    res.send("bem vindo ao blog!")
});

app.get("/canal", function (req, res) {
    res.send("<h1>bem vindo ao canal!</h1>")
});


//PARAMETROS OBRIGATORIOS
app.get("/ola/:nome/:empresa", function (req, res) {
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1> Olá " + nome + " da empresa " + empresa + "</h1>");
});

app.listen(8000, function (erro) {
    if (erro) {
        console.log("ocorreu um erro!");
    } else {
        console.log("servidor iniciado com sucesso!")
    }
})

