const express = require('express');
const router = express.Router();
const { Cliente } = require('../models');
const bcrypt = require('bcrypt');

// GET clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      attributes: { exclude: ['password'] }
    });
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

// POST cliente
router.post('/', async (req, res) => {
  try {
    const { nombre, correo, numLic, password } = req.body;

    const cliente = await Cliente.create({
      nombre,
      correo,
      numLic,
      password
    });

    res.json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { correo, password } = req.body;

    const cliente = await Cliente.findOne({ where: { correo } });

    if (!cliente) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const valid = await bcrypt.compare(password, cliente.password);

    if (!valid) {
      return res.status(401).json({ msg: 'Password incorrecta' });
    }

    res.json({ msg: 'Login exitoso', cliente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en login' });
  }
});

module.exports = router;
