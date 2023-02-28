const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const price_discount = document.getElementById('price_discount')
const form = document.getElementById('form-div')
const parrafo = document.getElementById('warnings')

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings=""
    let entrar = false
    //parrafo.innerHTML = ""
    if (title.value.length == ''){
        warnings += 'No te olvides ponerle un titulo a tu producto.</br>'
        entrar= true
    } else if 
        (title.value.length <= 5) {
            warnings += 'El título de producto debe tener al menos 5 carácteres <br>'
            entrar= true
    }

    if (description.value.length == ''){
        warnings += 'Escribe una descripcion de tu producto. </br>'
        entrar= true
    }
    else if 
        (description.value.length <= 20) {
            warnings += 'La descripcion debe tener al menos 20 carácteres <br>'
            entrar= true
    }

    if (price.value.length == ''){
        warnings += 'El precio es muy importante, asi sabran el valor de tu prenda.</br>'
        entrar= true
    }

    if (price_discount.value.length == ''){
        warnings += 'Recuerda poner el descuento en el precio, entre 0 y 100.</br>'
        entrar= true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        form.submit();
    }

})

document.getElementById("form-div").addEventListener("submit", function(event){
    let hasError = false;
    
    campoGenero = document.getElementById('genre_product').value;
  

if(!document.querySelector('input[name="genre_product"]:checked')) {
      alert('Debes seleccionar a que genero pertenece esta prenda.');
      hasError = true;
      }

});