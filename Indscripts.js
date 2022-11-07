console.log("ok");
// Formulario

const Pnombre = document.getElementById("campNom")


const apellido = document.getElementById("campApe")

const mensajeNomb = document.getElementById("mensajeNombre")
const mensajeApel = document.getElementById("mensajeApellido")

const botonEnviar = document.getElementById("enviar")



function validarNombre(Pnombre) {
    if (Pnombre.value.length < 3) {
        mensajeNomb.innerHTML = "INGRESE UN NOMBRE VALIDO";
    }
    else{
        mensajeNomb.innerHTML = "NOMBRE CORRECTO!!";
    }
}

botonEnviar.addEventListener("click", validarNombre);

botonEnviar.addEventListener("click",validarApellido )

function validarApellido(apellido){
    if(apellido.value.length < 2) {
        mensajeApel.innerHTML = "INGRESE SU APELLIDO";
    }
    else{
        mensajeApel.innerHTML = "APELLIDO CORRECTO"
    }

}