const { Person, PersonSchema } = require('./persons.model');
const { Usuario, UsuarioSchema } = require('./usuarios.model');
const { Producto, ProductoSchema } = require('./productos.model'); // Importa el modelo de productos

function setupModels(sequelize) {
  // Inicializar el modelo Usuario
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  
  // Inicializar el modelo Person
  Person.init(PersonSchema, Person.config(sequelize));
  
  // Inicializar el modelo Producto
  Producto.init(ProductoSchema, Producto.config(sequelize)); // Agrega esta línea
}

module.exports = setupModels;
