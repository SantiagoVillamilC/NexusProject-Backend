// services/usuarios.service.js
const { Usuario } = require('../db/models/usuarios.model');

class UsuariosService {
  async create(data) {
    const usuario = await Usuario.create(data);
    return usuario;
  }

  async find() {
    const usuarios = await Usuario.findAll();
    return usuarios;
  }

  async findOne(id) {
    const usuario = await Usuario.findByPk(id);
    return usuario;
  }

  // Función para encontrar usuario por nickname (nueva)
  async findByNickname(nickname) {
    const usuario = await Usuario.findOne({ where: { nickname } });
    return usuario;
  }

  // Función para actualizar usuario (ya existente)
  async update(id, data) {
    const usuario = await this.findOne(id);
    if (usuario) {
      await usuario.update(data);
      return usuario;
    }
    return null;
  }

  // Función para eliminar usuario (ya existente)
  async delete(id) {
    const usuario = await this.findOne(id);
    if (usuario) {
      await usuario.destroy();
      return { message: 'Usuario eliminado' };
    }
    return { message: 'Usuario no encontrado' };
  }
}

module.exports = UsuariosService;
