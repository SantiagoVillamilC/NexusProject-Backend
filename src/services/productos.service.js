// services/productos.service.js
const { Producto } = require('../db/models/productos.model');

class ProductosService {
  async create(data) {
    const producto = await Producto.create(data);
    return producto;
  }

  async find() {
    try {
      const productos = await Producto.findAll();
      return productos;
    } catch (error) {
      throw new Error('Error al obtener los productos'); // Lanza el error para manejarlo en el controlador
    }
  }

  async findOne(id) {
    const producto = await Producto.findByPk(id);
    return producto;
  }

  async update(id, data) {
    const producto = await this.findOne(id);
    if (producto) {
      await producto.update(data);
      return producto;
    }
    return null;
  }

  async delete(id) {
    const producto = await this.findOne(id);
    if (producto) {
      await producto.destroy();
      return { message: 'Producto eliminado' };
    }
    return { message: 'Producto no encontrado' };
  }  
}

module.exports = ProductosService;
