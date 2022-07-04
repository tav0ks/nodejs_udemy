const express = require("express"); //Importa
const app = express(); //Iniciando o express em app


app.get("/", function (req, res) {
    res.send("bem vindo!")
});

app.get("/blog", function (req, res) {
    res.send("bem vindo ao blog!")
});

app.get("/canal", function (req, res) {
    res.send("<h1>bem vindo ao canal!</h1>")
});

app.listen(8000, function (erro) {
    if (erro) {
        console.log("ocorreu um erro!");
    } else {
        console.log("servidor iniciado com sucesso!")
    }
})

