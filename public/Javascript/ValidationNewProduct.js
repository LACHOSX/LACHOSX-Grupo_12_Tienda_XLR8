const title = document.getElementById('title')
const description = document.getElementById('description')
const price = document.getElementById('price')
const price_discount = document.getElementById('price_discount')
const avatar = document.getElementById('avatar')
const form = document.getElementById('newproduct-form')
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

    if (avatar.value == ''){
        warnings += 'Debe seleccionar su imagen en formato JPG - PNG ó JPEG. </br>'
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

document.getElementById("newproduct-form").addEventListener("submit", function(event){
    let hasError = false;
    campoTalle = document.getElementById('size').value;
    campoColor = document.getElementById('color').value;
    campoGenero = document.getElementById('genre_product').value;
    campoType = document.getElementById('type').value;
    campoNew = document.getElementById('new').value;

   
if(!document.querySelector('input[name="size"]:checked')) {
      alert('Que talle es esta prenda?');
      hasError = true;
      }
    
if(!document.querySelector('input[name="color"]:checked')) {
      alert('No te olvides elegir el color de tu articulo.');
      hasError = true;
      }

if(!document.querySelector('input[name="genre_product"]:checked')) {
      alert('Debes seleccionar a que genero pertenece esta prenda.');
      hasError = true;
      }

if(!document.querySelector('input[name="type"]:checked')) {
        alert('Debes marcar que tipo de producto es.');
        hasError = true;
        }

if(!document.querySelector('input[name="new"]:checked')) {
            alert('Debes marcar si el producto es Nuevo o ya existia.');
            hasError = true;
            }
      
});