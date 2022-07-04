const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home/home");
});

app.listen(8000, () => {
    console.log("app rodando!")
});