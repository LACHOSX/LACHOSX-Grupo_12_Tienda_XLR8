const fs = require('fs');
const path = require('path');
const model = require("../database/models/User");
const { Op } = require("sequelize");
const db = require("../database/models"); 

// CREACION DE USUARIO
const register = function (req, res) {    
    res.render('users/register');
}

//  GUARDADO DE USUARIO
const createUser = async function (req, res) {
    try {
        await db.User.create({
            name: req.body.name,
            last_name: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password1,
            //password: req.body.password2,
            birthday: req.body.birthday,
            genre: req.body.genre
        });        
    } catch (error) {
        console.log("ERROR CREANDO USUARIO", error)
    }    
    res.render('/');
}

//  LOGIN DE USUARIO
const loginUser = function (req, res) {    
    res.render('/users/login');
}

//  LOGIN-IN DE USUARIO
const login = function (req, res) {    
    res.render('/users/login');
}

//  EDICION DE USUARIO

//  ACTUALIZACION DE USUARIO

//  BORRADO DE USUARIO


module.exports = { register, createUser, loginUser, login};

// userList, detail, userEdit, deleteUser