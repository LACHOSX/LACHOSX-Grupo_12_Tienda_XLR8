const fs = require('fs');
const path = require('path');
const model = require("../database/models/User");

const { Op } = require("sequelize");
const db = require("../database/models"); 
const {User} = require('../database/models');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

//LISTADO USUARIOS:
const userList = async function (req, res, next){
    try {
        let getUserList = await db.User.findAll();
        return res.render('users/userList', {getUserList});   
    } catch (error) {
        console.log("ERROR USER LIST", error)
    }    
}

// CREACION DE USUARIO
const register = function (req, res) {   
    res.cookie('testing', 'Hola Register XLR8', { maxAge: 1000 * 60 * 5});
    res.render('users/register');
}

//  GUARDADO DE USUARIO
const createUser = async function (req, res, next) {
    console.log(req.body);
    let errors = validationResult(req);    
    if (errors.isEmpty()) {
        try {
            await db.User.create({
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone: req.body.phone,
                password: bcrypt.hashSync(req.body.password, 10),          
                birthday: req.body.birthday,
                genre: req.body.genre
            });        
        } catch (error) {
            console.log("ERROR CREANDO USUARIO", error)
        }    
        return res.redirect('/users/login');  
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
    console.log(req.cookies.testing);
    res.cookie('testing', 'Hola Login XLR8', { maxAge: 1000 * 60 * 10});
    res.render('users/login');
}




//  LOGIN-IN DE USUARIO
const processLogin = async function (req, res) {    
	let validationErrors = validationResult(req);

    try {
        if (validationErrors.isEmpty()) {
            let user = await User.findOne({
                where: {
                    email: req.body.email}
                })
                
                if (user) {
                    let confirmPassword = bcrypt.compareSync(req.body.password, user.password);
                    
                    if (confirmPassword) {
                        delete user.password;
                        req.session.userLogged = user;
                    }
                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.body.userEmail,  { maxAge: (1000 * 60) * 20})
                    }
                    
                    return res.render('users/profile')
        
                } else {                
                    res.render('users/login', {
                        errors: errors.errors,
                        old: req.body
                    })
                }
        }

    } catch (error) {
        console.log("ERROR LOGGGGGG", error)
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
        let deleteIdUser = req.params.id;
        await db.User.destroy(
            {
                where: {
                    id: deleteIdUser
            }
    });
       return res.redirect('/');                
    } catch (error) {
        console.log("ERROR DELETE USER", error)
    }
}

// PERFIL DE USUARIO
const profile = function (req, res) {
    let getUserProfile = req.session.userLogged.id;            
    return res.render('users/profile', {
            user: req.session.userLogged, getUserProfile
         })
}
 


//         let getUserProfile = await db.User.findAll(req.params.id)
//         console.log(getUser);
//         return res.render('users/profile', {
//             user: req.session.userLogged, getUserProfile
//         });    
//     } catch (error) {
//         console.log("ERROR PROFILE", error)
//     }
// }

  
    
//LOGOUT
const logout = async function (req, res) {
    try {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    } catch (error) {
        console.log("ERROR LOG OUT USER", error)
    } 
}


module.exports = { userList, register, createUser, login, processLogin, userEdit, userUpdate, deleteUser, profile, logout};