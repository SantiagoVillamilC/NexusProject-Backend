// routes/index.js
const express = require('express');
const personsRouter = require('./persons.router');
const usuariosRouter = require('./usuarios.router');
const productosRouter = require('./productos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/persons', personsRouter);
  router.use('/usuarios', usuariosRouter);
  router.use('/productos', productosRouter);
}

module.exports = routerApi;
