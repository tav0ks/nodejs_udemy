const express = require("express"); // importanto o express
const app = express();  // passando o express para a const app
const bodyParser = require("body-parser"); // importando o body parser
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

// express
app.set('view engine', 'ejs'); // definindo o ejs como view engine do express
app.use(express.static('public')); // define a pasta de arquivos estaticos do express

//body parser
app.use(bodyParser.urlencoded({ extended: false })); // transforma dados do formulario HTML em arquivo javascript
app.use(bodyParser.json()); // transforma dados do formulario json para javascript

//rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulario Recebido! | titulo: " + titulo + " | descrição: " + descricao);
});

app.listen(8000, () => {
    console.log("app rodando!")
});
