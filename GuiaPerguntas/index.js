const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8000,
        msg: exibirMsg
    });
});

app.listen(8000, () => {
    console.log("app rodando!")
});