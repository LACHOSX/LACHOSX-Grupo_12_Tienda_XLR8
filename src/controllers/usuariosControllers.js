const { fs } = require('fs');
const path = require('path');

const listUsers = function(req, res) {
    res.render('userList',  {'users': users});
}

const register = (req, res) => {
    res.render('users/register')
}

const creandoUsuario = (req, res) => {
    res.send(req.body);
    let usuario = {
        nombre: req.body.name,
        apellido: req.body.apellido,
        correo: req.body.email,
        telefono: req.body.telefono,
        contraseña: req.body.password,
        fechaNacimiento: req.body.date,
        genero: req.body.genero
    }

    let usuarioJSON = JSON.stringify(usuario);

    //fs.writeFileSync('usuarios.json', usuarioJSON); //siempre PISA el contenido del archivo (re-escribe)
    fs.appendFileSync('usuarios.json', usuarioJSON); // Asi agrega al final del archivo

    res.redirect('/users/userList');
}

const log_in = (req, res) => {
    res.render('users/login')
}

const login = (req, res) => {
    if (req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 0;}
        req.session.numeroVisitas++;
        res.send('Session tiene el número' + req.session.numeroVisitas)  
        //res.render('mostrarNumeroSession',function (req,res){
            //res.send('Session tiene el número' + req.session.numeroVisitas)
        //})   
        
};



const buscarUsuario = (req, res) => {
    let busquedaUsuario = req.query.search;
    res.send(busquedaUsuario);

    let usuariosEncontrados = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name.includes(busquedaUsuario)) {
            usuariosEncontrados.push(users[i]);
        }        
    }
    res.render('usuariosEncontrados', {usuariosEncontrados: usuariosEncontrados});
}

const editarUsuario = (req, res) => {
    let idUser = req.params.idUser;// Logica de levantar usuarios de base de datos

    

    let userParaEditar = users[idUser]; // El usuario para editar, va a ser el ID elegido

    res.render('userEdit', {userParaEditar: userParaEditar});

    res.send(idUser);


}

const guardarEdicionUsuario = (req, res) => {
    console.log(req.body)
    // logica
    res.redirect('/');
}

const borrarUsuario = (req, res) => {

}



module.exports = {register, creandoUsuario, login, listUsers, buscarUsuario, editarUsuario, guardarEdicionUsuario, borrarUsuario, log_in};