const sequelize = require('sequelize');
const db = require('../config/database');
const Persona = require('../models/Persona.js');

const controller = {};

controller.CreatePersona= async function (data){
    try {
        console.log(data)
        Persona.create(data);
    } catch (error) {
        callback(null,error);
        
    }
};

controller.GetPersona = async function(callback){
    try {
        let response = await Persona.findAll({ 
        });
        let persona = response.map(result => result.dataValues);
        callback(persona, null);
        
    } catch (error) {
        callback(error, null);
        
    }
}

controller.UpdatePersona = async function (data){
        let response = Persona.update({
            nombre: data.nombre,
            edad: data.edad,
            apellido: data.apellido
        },{
            where:{
                cedula: data.cedula
            }
        });
}

controller.DeletePersona = async function (data){
    console.log(data)
    let response = Persona.destroy({
        where:{
            cedula:data.cedula
        }
    })
}


module.exports = controller;