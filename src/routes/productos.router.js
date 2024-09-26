// routes/productos.router.js
const express = require('express');
const {
  createProducto,
  findProductos,
  findOneProducto,
  updateProducto,
  deleteProducto,
} = require('../controllers/productos.controller');

const router = express.Router();

router.post('/', createProducto);
router.get('/', findProductos);
router.get('/:id', findOneProducto);
router.put('/:id', updateProducto);
router.delete('/:id', deleteProducto);

module.exports = router;
