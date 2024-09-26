const express = require('express');
const { loginUser } = require('../controllers/usuarios.controller');
const router = express.Router();

// Ruta para iniciar sesión
router.post('/v1/login', loginUser);

module.exports = router;
