const express = require('express');
const Comentario = require('../models/Comentario');

const router = express.Router();

// Rota para listar os comentários de uma enfermidade
router.get('/:enfermidade', async (req, res) => {
    try {
        const comentarios = await Comentario.find({ enfermidade: req.params.enfermidade });
        res.json(comentarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para criar um novo comentário
router.post('/:enfermidade', async (req, res) => {
    const comentario = new Comentario({
        enfermidade: req.params.enfermidade,
        texto: req.body.texto,
    });

    try {
        const novoComentario = await comentario.save();
        res.status(201).json(novoComentario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota para excluir um comentário
router.delete('/:id', async (req, res) => {
    try {
        const comentario = await Comentario.findById(req.params.id);
        if (!comentario) {
            return res.status(404).json({ message: 'Comentário não encontrado' });
        }

        await comentario.remove();
        res.json({ message: 'Comentário excluído' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
