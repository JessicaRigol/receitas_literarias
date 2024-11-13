// src/middlewares/auth.js
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const verificarAutenticacao = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação ausente' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const usuario = await Usuario.findById(decoded.id);
    req.user = usuario;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token de autenticação inválido' });
  }
};

module.exports = { verificarAutenticacao };
