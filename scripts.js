console.log("Ticketera ok");
// Fotmulario de Tickets

const nombre = document.getElementById("Nombreform");
const apellido = document.getElementById("Apellidoform");
const mail = document.getElementById ("Emailform");
const cantidad = document.getElementById("Cantticket");
const botonResumen = document.getElementById("resum");
const expReg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 

function validarT(){
    if (nombre.value.length < 3) {
        alert("Ingrese un nombre valido");
    }
    else if (apellido.value.length < 2) {
        alert("Ingrese un apellido valido")
    }
    else if(!expReg.test(Emailform.value)){
        alert("Ingrese un Email valido")
    }

}

botonResumen.addEventListener("click", validarT);
