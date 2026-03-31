const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3000;

// Probar conexión y levantar servidor
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Base de datos conectada');

    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar DB:', error);
  });