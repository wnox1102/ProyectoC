const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Persona = sequelize.define("Persona", {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  
  },
  telefono: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  apellido: {
      type: Sequelize.STRING,
      allowNull:false,
  },
  cedula:{
      type:Sequelize.STRING,
      allowNull:false,

  },
  direccion:{
      type:Sequelize.STRING,
      allowNull:false
  },
  edad:{
      type:Sequelize.INTEGER,
      allowNull:false
  }


});

Persona.sync();
module.exports = Persona;