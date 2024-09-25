const { Model, DataTypes } = require('sequelize');

const USUARIO_TABLE = 'usuarios';

class Usuario extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: true,
    };
  }
}

const UsuarioSchema = {
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
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    field: 'email',
  },
  direccion: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'direccion',
  },
  telefono: {
    allowNull: true,
    type: DataTypes.STRING, // Cambié a STRING ya que algunos números de teléfono pueden incluir símbolos (+, -)
    field: 'telefono',
  },
  tipo_usuario: {
    allowNull: false,
    type: DataTypes.ENUM('cliente', 'vendedor', 'admin'),
    field: 'tipo_usuario',
  },
};

module.exports = { Usuario, UsuarioSchema };
