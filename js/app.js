/* Formulario de la pagina "contacto"   */

const formNombre = document.getElementById("name");
const formEmail = document.getElementById("email");
const pName = document.getElementById("textNameVerify");
const mailUserVerify = document.getElementById("mailUserVerify")

formNombre.addEventListener("input", () => {
    if (formNombre.value.length < 3) {
        pName.innerHTML = "Ingrese un nombre por favor"
    } else { pName.innerHTML = " " }
    if (formNombre.value.length <= 0) {
        pName.innerHTML = " "
    }
});


formEmail.addEventListener("input", () => {
    if (formEmail.value.length < 6) {
        mailUserVerify.innerHTML = "Ingrese un mail válido"
    } else { mailUserVerify.innerHTML = " " }
    if (formEmail.value.length <= 0) {
        mailUserVerify.innerHTML = " "
    }
});


/* En index.html coloqué el siguiente codigo para solicitarle al usuario el nombre y darle la bienvenida*/
/*<script>const nameUser = prompt("Ingresa tu nombre");
    document.getElementById("mensajeBienvenida").innerHTML = " " + nameUser+ "!"</script>*/


