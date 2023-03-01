const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('login-form')
const parrafo = document.getElementById('warnings')

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings=""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    //parrafo.innerHTML = ""

    if(!regexEmail.test(email.value)){
        warnings += 'El email no es válido <br>'
        entrar= true
    }

    if (password.value.length == ''){
        warnings += 'Debes ingresar la contraseña <br>'
        entrar= true
    }
    else if (password.value.length < 8){
        warnings += 'El password debe tener mínimo ocho carácteres <br>'
        entrar= true
    }
    
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        form.submit();
    }
})