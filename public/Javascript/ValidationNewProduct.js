//Capturar el formulario
const formulario = document.querySelector('#newproduct-form');
const divErrors = document.querySelector('#errors')

const procesarFormulario = (event) => {
    //Frenar el envio
    event.preventDefault();
    divErrors.innerHTML = '';

    //Comienzo a validar
    const campoTitle = formulario.title;
    const campoDescription = formulario.description;
    const campoPrice = formulario.price;
    const campoPrice_discount = formulario.price_discount;
    const campoSize = formulario.size;
    const campoColor = formulario.color;
    const campoGenre_product = formulario.genre_product;
    const campoType = formulario.type;
    const campoNew = formulario.new;

    if (campoTitle.value == ''){
        divErrors.innerHTML += '<p> Debes ponerle título al producto.</p>'
    }

    if (campoDescription.value == ''){
        divErrors.innerHTML += '<p> Escribe una descripcion de tu producto.</p>'
    }
   
    if (campoPrice.value == ''){
        divErrors.innerHTML += '<p>Escribe el valor del precio de la prenda.</p>'
    }
 
    if (campoPrice_discount.value == ''){
        divErrors.innerHTML += '<p> Recuerda poner el descuento en el precio.</p>'
    }

    if (campoSize.value == ''){
        divErrors.innerHTML += '<p> Que talle es esta prenda?</p>'
    }

    if (campoColor.value == ''){
        divErrors.innerHTML += '<p> Elige color de tu articulo.</p>'
    }

    if (campoGenre_product.value == ''){
        divErrors.innerHTML += '<p> Debes seleccionar el género.</p>'
    }

    if (campoType.value == ''){
        divErrors.innerHTML += '<p> Debes marcar que tipo de producto es.</p>'
    }

    if (campoNew.value == ''){
        divErrors.innerHTML += '<p> Marcar si es nuevo o ya existia.</p>'
    }



    //Si no hay errores hago el envio
    //formulario.submit()

}

formulario.addEventListener('submit', procesarFormulario)

