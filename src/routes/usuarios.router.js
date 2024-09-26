// routes/usuarios.router.js
const express = require('express');
const router = express.Router();
const { create, get, getById, update, _delete, login, getByNickname } = require('../controllers/usuarios.controller');

router.post('/', create);
router.get('/', get);
router.get('/:id', getById);
router.get('/nickname/:nickname', getByNickname);
router.put('/:id', update);
router.delete('/:id', _delete);
router.post('/login', login);

module.exports = router;
