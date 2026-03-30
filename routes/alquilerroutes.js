const express = require('express');
const router = express.Router();

// ✅ GET (para probar en navegador)
router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      autoId: 1,
      estado: 'activo'
    }
  ]);
});

// ✅ POST (el que ya tienes)
router.post('/', (req, res) => {
  const { autoId } = req.body;

  res.status(201).json({
    mensaje: 'Alquiler creado',
    autoId: autoId
  });
});

module.exports = router;