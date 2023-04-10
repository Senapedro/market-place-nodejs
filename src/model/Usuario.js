const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { thpe: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    endereco: [
        {
            rua: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createdAt: { type: Date, required: true },
        }
    ],
    createdAt: { type: Date, required: true },
    produtos_Fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos"},
            createdAt: { type: Date, required: true },
        }
    ],
    admin: { type: Boolean, required: true, default: false },
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

model.exports = Usuario;