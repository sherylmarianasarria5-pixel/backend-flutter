const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      anio: 2022,
      precio: 100,
      disponible: true,
      imagen: 'https://picsum.photos/300/200'
    },
    {
      id: 2,
      marca: 'Ford',
      modelo: 'Mustang',
      anio: 2023,
      precio: 200,
      disponible: true,
      imagen: 'https://picsum.photos/300/200'
    }
  ]);
});

module.exports = router;
