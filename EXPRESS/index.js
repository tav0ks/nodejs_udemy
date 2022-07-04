const express = require("express"); //Importa
const app = express(); //Iniciando o express em app

app.listen(8000, function (erro) {
    if (erro) {
        console.log("ocorreu um erro!");
    } else {
        console.log("servidor iniciado com sucesso!")
    }
})

