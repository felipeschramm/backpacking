const mongoose = require("mongoose");
const tripSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    ruaN: {
        type: Number,
        required: true
    },
    complemento: {
        type: String,
        required: false
    },
    imagem: {
        type: String,
        required: true
    },
    quarto: {
        type: Number,
        required: true
    },
    NumPeople:{
        type: Number,
        required: true
    },
    locadorUser:{
        type: String,
        required: true
    },
    locatarioUser:{
        type:String
    },
    reservaInit:{
        type: String //trocar para date
    },
    reservaFim:{
        type: String 
    }
});

module.exports = mongoose.model("trip", tripSchema);