const express = require("express");
const connectToDatabase = require("./src/database/database"); // Arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router"); // Arquivo de rota do Usuario

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); // Conectando com o banco

app.use("/usuario", usuario); // Chamando as rotas do Usuario

app.get("/", (req,res) => {
    res.send({
        message: "Bem vindo ao nosso market-place"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})