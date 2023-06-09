const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb://127.0.0.1:27017/market-place",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Mongo DB Conectado");
    }).catch((err) => {
        return console.log(`Erro na conexão com o Banco: ${err}`);
    })
}

module.exports = connectToDatabase;