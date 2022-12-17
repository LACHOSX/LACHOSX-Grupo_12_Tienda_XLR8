const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, { encoding: 'utf-8' }));

const userList = (req, res) => {
    res.render('users/userList', { users });
}

const register = (req, res) => {
    res.render('users/register')
}

const createUser = (req, res) => {
    let usuario = {
        id: (users.length + 1),
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password1: req.body.password1,
        date: req.body.date,
        genre: req.body.genre
    }
    // Asi agrega al final del archivo
    users.push(usuario);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.redirect('/');
}

const loginUser = (req, res) => {
    res.render('users/login')
}

const login = (req, res) => {
    if (req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }
    req.session.numeroVisitas++;
    res.send('Session tiene el número' + req.session.numeroVisitas)
    //res.render('mostrarNumeroSession',function (req,res){
    //res.send('Session tiene el número' + req.session.numeroVisitas)
    //})   
};
const searchUser = (req, res) => {
    let busquedaUsuario = req.query.search;
    res.send(busquedaUsuario);

    let usuariosEncontrados = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.includes(busquedaUsuario)) {
            usuariosEncontrados.push(users[i]);
        }
    }
    res.render('usuariosEncontrados', { usuariosEncontrados: usuariosEncontrados });
}
const detail = (req, res) => {
    res.render('users/login')
};

const userEdit = (req, res) => {
    let idUser = req.params.id;// Logica de levantar usuarios de base de datos
    let userParaEditar = users.filter(user => user.id == idUser) // El usuario para editar, va a ser el ID elegido
    res.render('users/userEdit', { userParaEditar });
}

const userUpdate = (req, res) => {
    console.log(req.body)
    // logica
    res.redirect('/');
}

const deleteUser = (req, res) => {
    let userDelete = users.filter(user => user.id != req.params.id)
    //actualizar los datos de usuarios ya que FILTER devuelve un nuevo array.
    users = userDelete;
    let userDeleteJSON = JSON.stringify(userDelete, null, 2)
		fs.writeFileSync(usersFilePath, userDeleteJSON);
    res.redirect('/users')

    if(!users) {
        return res.send("No existe usuario");
    }
}



module.exports = { userList, register, createUser, login, loginUser, searchUser, detail, userEdit, userUpdate, deleteUser };