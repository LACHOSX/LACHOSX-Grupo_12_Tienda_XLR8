//Variables globales del querySelector
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form")
//warning logica

let regexEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const divErrors = document.querySelector('#errors')
// Main event

form.addEventListener("submit", e =>{
    e.preventDefault();

    //Logica del nombre (Pushear error al array warnings)
    // if(nombre.value.length <6){
    //     alert("Nombre muy corto")
    // }

    //Logica del password (Pushear error al array warnings)
    if(password.value.length < 8){
        alert("La contraseña es muy corta")
    }
    //else{}

    //logica del error al tipeado de mail @ (regex es una funcion que hace que identifique que haya un @)
    if(!regexEmail.test(email.value)){
        alert("El email no es valido")
    }
})