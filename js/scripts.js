// Eventos de los inputs y textareas

//Objetos

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// Variables
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

// EventListener

nombreInput.addEventListener('input', leerTexto )
emailInput.addEventListener('input', leerTexto)
mensajeInput.addEventListener('input', leerTexto)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    // Validar Formulario

    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Por favor completa todos los campos', true);

        return; // Corta la ejecucion del codigo para que el "enviar formulario" no se ejecute
    }

    mostrarAlerta('El formulario se ha enviado exitosamente');

} )

// Funciones Globales

function leerTexto(e) {
    
    datos[e.target.id] = e.target.value;

  //console.log(datos);
}
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }
    else {
        alerta.classList.add('envio');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove()
    },4000);
}






