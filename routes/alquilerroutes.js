const express = require('express');
const router = express.Router();

// ✅ GET (para evitar error 404)
router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      autoId: 1,
      estado: 'activo'
    }
  ]);
});

// ✅ POST (crear alquiler)
router.post('/', (req, res) => {
  const { autoId } = req.body;

  if (!autoId) {
    return res.status(400).json({ mensaje: 'autoId es requerido' });
  }

  res.status(201).json({
    mensaje: 'Alquiler creado correctamente',
    autoId: autoId
  });
});

module.exports = router;