const UsuariosService = require('../services/usuarios.service');
const service = new UsuariosService();

const create = async (req, res) => {
  try {
    const response = await service.create(req.body);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const get = async (req, res) => {
  try {
    const response = await service.find();
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.findOne(id);
    if (!response) {
      return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
    }
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// Nueva función para obtener usuario por nickname
const getByNickname = async (req, res) => {
  try {
    const { nickname } = req.params;
    const response = await service.findByNickname(nickname);
    if (!response) {
      return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
    }
    // Eliminar la contraseña antes de enviar la respuesta
    const { password, ...userData } = response.toJSON();
    res.json(userData);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const login = async (req, res) => { 
  try {
    const { nickname, contraseña } = req.body;

    const usuario = await service.findByNickname(nickname);
    if (!usuario) {
      return res.status(404).send({ success: false, message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña directamente
    if (usuario.contraseña !== contraseña) {
      return res.status(401).send({ success: false, message: 'Contraseña incorrecta' });
    }

    res.json({ success: true, message: 'Login exitoso', usuario: { nickname: usuario.nickname } });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await service.update(id, body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const _delete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  create, get, getById, update, _delete, login, getByNickname // Asegúrate de exportar la nueva función
};
