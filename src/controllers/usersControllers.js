const fs = require('fs');
const path = require('path');
const model = require("../database/models/User");
const { Op } = require("sequelize");
const db = require("../database/models"); 
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

//LISTADO USUARIOS:

const userList = async function (req, res){

    try {
        let getUserList = await db.User.findAll();
        return res.render('users/usertList', {getUserList});   
    } catch (error) {
        console.log("ERROR USER LIST", error)
    }
    
}

// CREACION DE USUARIO
const register = function (req, res) {    
    res.render('users/register');
}

//  GUARDADO DE USUARIO
const createUser = async function (req, res, next) {
    let errors = validationResult(req);    
    if (errors.isEmpty()) {
        try {
            await db.User.create({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: bcrypt.hashSync(req.body.password, 10), // encriptacion necesaria = Messi
                //password: req.body.password2,
                birthday: req.body.birthday,
                genre: req.body.genre
            });        
        } catch (error) {
            console.log("ERROR CREANDO USUARIO", error)
        }    
        return res.redirect('/');               
    } else {
        console.log(errors)
        return res.render ('users/register', {
            errorMsg: errors.errors,
            old: req.body
        })
    }    
}
   
//  LOGIN DE USUARIO
const login = function (req, res) {    
    res.render('users/login');
}

//  LOGIN-IN DE USUARIO
const processLogin = async function (req, res) {
	let errors = validationResult(req);
	let userToLog = [];

	if (errors.isEmpty()) {
		let userDb = await db.User.findAll(req.params.email)

		if( userDb == "") {
			userToLog = [];
		} else {
			userToLog = db.User;
		}
		
		for (let i = 0; i < userDb.length; i ++) {
			if (userDb[i].email == req.body.email) {
				if (bcrypt.compareSync(req.body.password, userDb[i].password)) {
					userToLog = userDb[i];
					break;
				}
			}
		}
        res.redirect('/')
        		
	} else {
        console.log(errors)
        res.render('users/login', {
            errors: errors.errors,
            old: req.body
         })
    }
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
const deleteUser = async function (req, res) {
    try {
         let getUser = await db.User.destroy(req.params.id)
            
         console.log(getUser),
         {
            where: {
                id: req.params.id
            }
        };
        console.log(getUser);
        res.redirect('./users') 
    } catch (error) {
        console.log("ERROR DELETE USER", error)
    }
}



module.exports = { userList, register, createUser, login, processLogin, userEdit, userUpdate, deleteUser};


//detail