# Proyecto Nexus - Backend

Este proyecto es el backend de **Project Nexus**, una aplicación dedicada a la gestión y optimización de recursos tecnológicos. Utiliza Node.js con Express y Sequelize para manejar la lógica del servidor y la conexión con la base de datos.

## Instalación

Para instalar las dependencias, usa el siguiente comando:

```bash
npm install
```

## Uso

Para iniciar la aplicación, ejecuta:
```bash
npm run dev
```
Esto iniciará el servidor de desarrollo y podrás acceder a las API en http://localhost:3000.

## Descripción General

El backend de **Project Nexus** se encarga de:

- **Gestionar usuarios**: Permite el registro, login y gestión de usuarios.
- **Gestionar productos**: Proporciona rutas para crear, leer, actualizar y eliminar productos.
- **Controlar la autenticación**: Verifica las credenciales de los usuarios y protege rutas según el tipo de usuario.

### Estructura del Proyecto

- **`src`**: Contiene la lógica del servidor y los modelos de la base de datos.
  - **`models`**: Define los modelos de datos, como usuarios y productos.
  - **`routes`**: Define las rutas del servidor para manejar peticiones HTTP.
  - **`controllers`**: Contiene la lógica de negocio para las diferentes rutas.

## Dependencias

El proyecto utiliza varias dependencias para facilitar el desarrollo y mejorar la funcionalidad:

- **bcrypt**: `bcrypt`: "^5.1.1"  
  Librería para hashear contraseñas, proporcionando seguridad en el almacenamiento de contraseñas de los usuarios.

- **CORS**: `cors`: "^2.8.5"  
  Middleware para habilitar CORS en las peticiones, permitiendo el acceso desde diferentes dominios.

- **dotenv**: `dotenv`: "^16.4.5"  
  Carga variables de entorno desde un archivo `.env` a `process.env`.

- **Express**: `express`: "^4.19.2"  
  Framework para construir aplicaciones web en Node.js, que simplifica el manejo de rutas y peticiones.

- **Nodemon**: `nodemon`: "^3.1.7"  
  Herramienta que ayuda en el desarrollo al reiniciar automáticamente la aplicación cuando se detectan cambios.

- **PostgreSQL**:  
  - **pg**: `pg`: "^8.12.0"  
    Cliente para PostgreSQL, utilizado para interactuar con la base de datos.
  - **pg-hstore**: `pg-hstore`: "^2.3.4"  
    Utilidad para manejar datos JSON en PostgreSQL.

- **Sequelize**: `sequelize`: "^6.37.3"  
  ORM para Node.js que facilita la interacción con bases de datos SQL, permitiendo realizar operaciones CRUD de forma sencilla.

