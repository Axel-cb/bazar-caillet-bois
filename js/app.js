/* Formulario de la pagina "contacto"   */

const formNombre = document.getElementById("name");
const formEmail = document.getElementById("email");
const pName = document.getElementById("textNameVerify");
const mailUserVerify = document.getElementById("mailUserVerify")

formNombre.addEventListener("input", () => {
    if (formNombre.value.length < 3 || null) {
        pName.innerHTML = "Ingrese un nombre por favor"
    } else { pName.innerHTML = " " }
    if (formNombre.value.length <= 0) {
        pName.innerHTML = " "
    }
});


formEmail.addEventListener("input", () => {
    if (formEmail.value.length < 6 || null) {
        mailUserVerify.innerHTML = "Ingrese un mail válido"
    } else { mailUserVerify.innerHTML = " " }
    if (formEmail.value.length <= 0) {
        mailUserVerify.innerHTML = " "
    }
});

/* Pregunta al usuario su nombre y lo coloca como mensaje de bienvenida solo en la pagina de inico*/

let nameUser = prompt("Ingresa tu nombre");
let mensaje = document.getElementById("mensajeBienvenida").innerHTML = " " + nameUser + "!";
