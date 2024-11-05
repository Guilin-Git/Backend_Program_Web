const express = require('express');
const app = express();
const PORT = 3000;


const sequelize = require('./config/db');



sequelize.authenticate().then(() => {
    console.log("CONEXÃO SUCESSO!")
}).catch(error => {
    console.log("erro");
});



//Rotas
app.get('/', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");

});

app.get('/users', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");

});

app.get('/users/:id', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");

});

app.post('/rotapost', (req, res) => {
    res.send("Chamada ao recurso realizada com sucesso");

});

app.listen(PORT, () => {
    console.log("Servidor aguardando requisições");
});