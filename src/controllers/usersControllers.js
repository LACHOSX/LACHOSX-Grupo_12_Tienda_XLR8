const fs = require('fs');
const path = require('path');
const model = require("../database/models/Customer");
const { Op } = require("sequelize");


//TRAE TODA LA DATA DE USERTABLE
const userList = async function (req, res) {
    try {
        const userData = await model.user.findAll();
        if (userData.length > 0) {
             res
                .status(200)
                .json({ message: "Connection successful", data: userData });
        } else {
            res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const detail = async function (req, res) {
    try {
        const userData = await model.user.findAll({
        where: { name: { [Op.like]: `%${req.params.name}%` } },
        });
        if (userData.length > 0) {
            res
            .status(200)
            .json({ message: "Connection successful", data: userData });
        } else {
        res.status(200).json({ message: "Connection failed", data: [] });
        }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


//CREAR USUARIO
const createUser = async function (req, res) {
    try {
        //   check data has already been created
        const checkData = await model.user.findAll({
        where: {
            [Op.or]: {
                email: req.body.email,
                password: req.body.password,
                },
            },
        });
    if (checkData.length > 0) {
        res.status(500).json({ message: "email is already in use" });
    } else {
        await model.user
            .create({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                date: req.body.date,
                genre: req.body.genre,
                token: req.body.name + req.body.password,
        })
        .then((result) => {
            res.status(201).json({
            message: "user successful created",data: {
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                date: req.body.date,
                genre: req.body.genre,
                },

            });
        });
    }
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const register = (req,res) =>{
    res.render('users/register')
}

const login = (req,res) =>{
    res.render('/users/login')
}



// UPDATE DEL USUARIO
const userEdit = async function (req, res) {
    try {
        await model.user
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
                if (result.length > 0) {
                    await model.user.update(
                       {
                           username: req.body.username,
                           password: req.body.password,
                           token: req.body.username + req.body.password,
                        },
                        { where: { id: req.body.id } }
                    );
                    res.status(200).json({
                        message: "update successful",
                        data: {
                        id: req.body.id,
                        username: req.body.username,
                        password: req.body.password,
                        token: req.body.username + req.body.password,
                        },
                    });
                } else {
                    res.status(500).json({ message: "update failed" });
                }
            });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


// DELETE USUARIO
const deleteUser = async function (req, res) {
    try {
        await model.user
            .findAll({ where: { id: req.body.id } })
            .then(async (result) => {
        if (result.length > 0) {
            await model.user.destroy({ where: { id: req.body.id } });
            res.status(200).json({ message: "delete user successfully" });
        } else {
            res.status(404).json({ message: "id user not found" });
            }
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = { userList, register, createUser, login, detail, userEdit, deleteUser};