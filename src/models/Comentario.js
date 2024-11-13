const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    enfermidade: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    dataCriacao: {
        type: Date,
        default: Date.now,
    },
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;

