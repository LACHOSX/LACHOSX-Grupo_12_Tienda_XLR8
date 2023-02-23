//Capturar el formulario
const formulario = document.querySelector('#register-form');
const divErrors = document.querySelector('#errors')

const procesarFormulario = (event) => {
    //Frenar el envio
    event.preventDefault();
    divErrors.innerHTML = '';

    //Comienzo a validar
    const campoName = formulario.name;
    const campolast_name = formulario.last_name;
    const campoEmail = formulario.email;
    const campoPhone = formulario.phone;
    const campoPassword = formulario.password;
    const campoBirthday = formulario.birthday;
    const campoGenre = formulario.genre;

    if (campoName.value == ''){
        divErrors.innerHTML += '<p> El campo nombre está vacío</p>'
    }

    if (campolast_name.value == ''){
        divErrors.innerHTML += '<p> El campo apellido está vacío</p>'
    }
   
    if (campoEmail.value == ''){
        divErrors.innerHTML += '<p>El campo email está vacío</p>'
    }
 
    if (campoPhone.value == ''){
        divErrors.innerHTML += '<p> El campo telefono está vacío</p>'
    }

    if (campoPassword.value == ''){
        divErrors.innerHTML += '<p> El campo password está vacío</p>'
    }

    if (campoBirthday.value == ''){
        divErrors.innerHTML += '<p> El campo fecha de nacimiento está vacío</p>'
    }

    if (campoGenre.value == ''){
        divErrors.innerHTML += '<p> El campo género está vacío</p>'
    }




    //Si no hay errores hago el envio
    //formulario.submit()

}

formulario.addEventListener('submit', procesarFormulario)

formulario.campoPassword.addEventListener('change', (event) => {
    divErrors.innerHTML = '';

    const valorDeInput = event.target.value;
    if (valorDeInput.lenght < 8) {
        divErrors.innerHTML += "<p>Contraseña debe tener al menos 8 caracteres</p>"
    }
})