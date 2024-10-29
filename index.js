let express = require('express');
let app = express();

app.get('/abc', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");

});

app.get('/users', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");

});