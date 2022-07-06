const express = require("express"); // importanto o express
const app = express();  // passando o express para a const app
const bodyParser = require("body-parser"); // importando o body parser
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

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
    Pergunta.findAll({ //SELECT
        raw: true, order: [
            ['id', 'DESC'] // ASC = CRESCENTE || DESC = DECRESCENTE
        ]
    }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    if (titulo === "" || descricao === "") {
        res.render("camposvazios");
    } else {
        Pergunta.create({  //CREATE
            titulo: titulo,
            descricao: descricao
        }).then(() => {
            res.redirect("/");
        });
    };
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {

            Resposta.findAll({
                where: { perguntaId: pergunta.id },
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        } else {
            res.redirect("/");
        }
    });
});

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaid: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    });
});

app.listen(8000, () => {
    console.log("app rodando!")
});
