const { models } = require('../libs/sequelize');

class UsuariosService {
  constructor() {}

  async find() {
    const res = await models.Usuario.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Usuario.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Usuario.create(data);
    return res;
  }

  async update(id, data) {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    const res = await usuario.update(data);
    return res;
  }

  async delete(id) {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    await usuario.destroy();
    return { deleted: true };
  }
}

module.exports = UsuariosService;
