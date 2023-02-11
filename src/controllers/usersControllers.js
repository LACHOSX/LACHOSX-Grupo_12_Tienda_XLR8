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
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
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

const userEdit = async function (req, res) {
    try {
        let getUser = await db.User.findByPk(req.params.id)
        console.log(getUser);
        res.render('users/userEdit', { getUser: getUser })
    } catch (error) {
        console.log("ERROR EDITUSER", error)
    }
}

//  ACTUALIZACION DE USUARIO
const userUpdate = async function(req, res) {
    try {
        await db.User.update({ 
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            //password: req.body.password2,
            birthday: req.body.birthday,
            genre: req.body.genre
        }, {
            where: {
                id: req.params.id
            }
        }); 
               
    } catch (error) {
        console.log("ERROR UPDATE USER", error)
    }
    res.redirect('/') //redirecciona a ruta home
}
//  BORRADO DE USUARIO

// LISTA


module.exports = { register, createUser, loginUser, login, userEdit, userUpdate};

// userList, detail, userEdit, deleteUser