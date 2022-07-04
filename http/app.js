var http = require("http");

http.createServer(function (requisicao, resposta) {
    resposta.end("<h1>Bem vindo ao meu site!<h1><h3>teste teste teste<h3>");
}).listen(8181);
console.log("Servidor Inicializado");
