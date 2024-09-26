// controllers/productos.controller.js
const ProductosService = require('../services/productos.service');

const service = new ProductosService();

const createProducto = async (req, res) => {
  const { body } = req;  
  try {
    const response = await service.create(req.body);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const findProductos = async (req, res) => {
  try {
    const productos = await service.find();
    return res.json(productos);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

const findOneProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await service.findOne(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json(producto);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedProducto = await service.update(id, body);
    if (!updatedProducto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    return res.json(updatedProducto);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el producto' });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await service.delete(id);
    return res.json(response);
  } catch (error) {
    console.error('Error en el controlador delete:', error.message); // Solo el mensaje del error
    return res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
  }
};


module.exports = {
  createProducto,
  findProductos,
  findOneProducto,
  updateProducto,
  deleteProducto,
};
