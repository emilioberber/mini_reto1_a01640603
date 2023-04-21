// GUARDAR DATOS DE USUARIOS QUE INGRESEN DATOS AL FORMULARIO-TIENDAS

// Evento SUBMIT: se activa cuando un formulario es enviado
// CLASE USUARIO con constructor para después crear objetos con sus atributos
class Usuario{
    constructor(email, psw){
        this.email = email;
        this.psw = psw;
    }
}

// Vamos a crear un array vacío que almacene los datos de los usuarios
// ingresados por medio de un push
const arrayUsuarios = [];

// Vamos a vincular el formulario:
const form = document.getElementById("formulario-id");

// vamos a trabajar con el formulario, tomar sus datos, crear un objeto y luego
// almacenamos esos datos en el array vacío

//crear el evento:
form.addEventListener("submit", (e)=>{
    // evitamos el comportamiento por default del formulario (e)
    e.preventDefault();

    const email = document.getElementById("exampleInputEmail1");
    const psw = document.getElementById("exampleInputPassword1");

    // crear un objeto que sea el usuario
    const usuario = new Usuario(email.value, psw.value);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);

    // Reseteamos el form al mandar los datos para poder agregar más clientes
    form.reset();
})


// FUNCIÓN: Cambiar color del título de tiendas
function changeColor(newColor){
    var colorElemt = document.getElementById("main-title")
    colorElemt.style.color = newColor
}
