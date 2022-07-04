const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        { nome: "doritos", preco: 3.14 },
        { nome: "coca-cola", preco: 5 },
        { nome: "frango", preco: 10 },
        { nome: "maça", preco: 2 },
        { nome: "leite", preco: 1.45 }
    ]


    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8000, () => {
    console.log("app rodando!")
});