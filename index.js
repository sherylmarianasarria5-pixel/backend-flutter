const app = require('./app');

const PORT = process.env.PORT || 6001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});