const bcrypt = require('bcrypt');
const { User } = require('../models'); // Ajusta según tu modelo

// Controlador para el inicio de sesión
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: username } }); // O donde sea que tengas el nombre de usuario
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password); // Suponiendo que estás usando bcrypt para hashear las contraseñas
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Genera un token o devuelve los datos del usuario según tu necesidad
    const { id, name, photo } = user; // Ajusta según los campos que tengas
    res.json({ user: { id, name, photo } }); // Retorna la información que necesites
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = {
  loginUser,
  // Otras funciones...
};
