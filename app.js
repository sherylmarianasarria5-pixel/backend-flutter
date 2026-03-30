'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
const alquilerR = require('./routes/alquilerroutes');
const autosR = require('./routes/autosroutes');
const clientesR = require('./routes/clienteroutes');

app.use('/api/alquiler', alquilerR);
app.use('/api/autos', autosR);
app.use('/api/clientes', clientesR);

module.exports = app;