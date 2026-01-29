require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log('Servidor corriendo en puerto 5000'));
});
