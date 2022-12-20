// Middleware == function
// Recibe req, res y next
// next debe invocarse para pasar al siguiente middleware
// puedo finalizar el flujo de peticion y respuesta invocando algun metodo

// Compartir datos entre middlewares, alterando el objeto req

const saludar = (req, res, next) => {

    req.usuario = 'Juan';

    req.file = {
        //datos del archivo
    }
    next()

    console.log('Hola desde middleware');
    next();
    
}

module.exports = saludar;