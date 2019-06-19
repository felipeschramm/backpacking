const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
      },
    telefone: {
        type: String,
        required: true
    },
    dataNasc: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model("User", UserSchema);