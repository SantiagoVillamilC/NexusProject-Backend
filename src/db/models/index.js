const { Person, PersonSchema } = require('./persons.model');
const { Usuario, UsuarioSchema } = require('./usuarios.model');

function setupModels(sequelize) {
  // Inicializar el modelo Usuario
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  
  Person.init(PersonSchema, Person.config(sequelize));
}

module.exports = setupModels;


