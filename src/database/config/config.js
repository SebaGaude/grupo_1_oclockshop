module.exports = { // el module.exports se agrega porque este archivo sino es un JSON y asi lo convertimos en un JS
  "development": { //  a configurar el username, la contraseña si tuviera, la base de datos y quizas sea necesario agregar el puerto
    "username": "root",
    "password": null,
    "database": "oclockshop",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
