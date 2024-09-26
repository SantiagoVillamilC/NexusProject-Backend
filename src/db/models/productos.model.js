const { Model, DataTypes } = require('sequelize');
const PRODUCTO_TABLE = 'productos';

class Producto extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'Producto',
      timestamps: false,
    };
  }
}

const ProductoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'nombre',
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.TEXT,
    field: 'descripcion',
  },
  precio: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'precio',
  },
  categoriaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'categoria_id',
  },
  stock: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'stock',
  },
  imagen: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'imagen',
  },
};

module.exports = { Producto, ProductoSchema };
