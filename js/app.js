/*   carrito de compras con localStorage y JSON en la pagina de "nuestros productos"     */

const stock = [
    { id: 1, imagen: "../assets-bazar/imagenes-mejoradas/acero-blanco.avif", nombre: "Termos de Acero Luminox en Colores – Blanco", precio: 10152, },
    { id: 2, imagen: "../assets-bazar/imagenes-mejoradas/acero-negro.avif", nombre: "Termo de Acero Luminox Negro", precio: 10152, },
    { id: 3, imagen: "../assets-bazar/imagenes-mejoradas/acero-boca.avif", nombre: "Termo de Acero Luminox Boca Jrs – Camiseta", precio: 10295, },
    { id: 4, imagen: "../assets-bazar/imagenes-mejoradas/acero-arg.avif", nombre: "Termo de Acero Luminox Bandera Argentina", precio: 10152, },
    { id: 5, imagen: "../assets-bazar/imagenes-mejoradas/tangoazul1.webp", nombre: "Termo Tango 1000 Compacto – Azul", precio: 3177, },
    { id: 6, imagen: "../assets-bazar/imagenes-mejoradas/tangorosa1.webp", nombre: "Termo Tango 1000 Compacto – Rosa", precio: 3177, },
    { id: 7, imagen: "../assets-bazar/imagenes-mejoradas/sigmaazul1.webp", nombre: "Termo Sigma – Azul", precio: 2463, },
    { id: 8, imagen: "../assets-bazar/imagenes-mejoradas/sigmavioleta1.webp", nombre: "Termo Sigma – Violeta", precio: 2463, },
    { id: 9, imagen: "../assets-bazar/imagenes-mejoradas/alfarojo.webp", nombre: "Termo Alfa – Rojo", precio: 2321, },
    { id: 10, imagen: "../assets-bazar/imagenes-mejoradas/alfagris.avif", nombre: "Termo Alfa – Gris", precio: 2321, },
    { id: 11, imagen: "../assets-bazar/imagenes-mejoradas/tatuazul.webp", nombre: "Termo Tatú – Azul", precio: 2215, },
    { id: 12, imagen: "../assets-bazar/imagenes-mejoradas/taturojo1.webp", nombre: "Termo Tatú – Rojo", precio: 2215, },
    { id: 13, imagen: "../assets-bazar/imagenes-mejoradas/boca1.webp", nombre: "Termo Mate Joven Boca Jrs", precio: 2215, },
    { id: 14, imagen: "../assets-bazar/imagenes-mejoradas/river1.webp", nombre: "Termo Mate Joven River Plate", precio: 2215, },
    { id: 15, imagen: "../assets-bazar/imagenes-mejoradas/casla1.webp", nombre: "Termo Mate Joven San Lorenzo", precio: 2215, },
    { id: 16, imagen: "../assets-bazar/imagenes-mejoradas/racing1.webp", nombre: "Termo Mate Joven Racing Club", precio: 2215, },
    { id: 17, imagen: "../assets-bazar/imagenes-mejoradas/cai1.webp", nombre: "Termo Mate Joven Independiente", precio: 2215, },
    { id: 18, imagen: "../assets-bazar/imagenes-mejoradas/capriceblanco1.webp", nombre: "Jarra Caprice – Blanco", precio: 3026, },
    { id: 19, imagen: "../assets-bazar/imagenes-mejoradas/iazul2.webp", nombre: "Isotérmico Tropical Blanco – Azul", precio: 2613, },
    { id: 20, imagen: "../assets-bazar/imagenes-mejoradas/inaranja2.webp", nombre: "Isotérmico Tropical Blanco – Naranja", precio: 2613, },
    { id: 21, imagen: "../assets-bazar/imagenes-mejoradas/iazuln1.webp", nombre: "Isotérmico Tropical Negro – Azul", precio: 2613, },
    { id: 22, imagen: "../assets-bazar/imagenes-mejoradas/inaranjan1.webp", nombre: "Isotérmico Tropical Negro – Naranja", precio: 2613, },
    { id: 23, imagen: "../assets-bazar/imagenes-mejoradas/isoboca1.webp", nombre: "Isotérmico Tropical Boca Jrs", precio: 3065, },
    { id: 24, imagen: "../assets-bazar/imagenes-mejoradas/isoriver1.webp", nombre: "Isotérmico Tropical River Plate", precio: 3065, },
];







let contadorCarrito = 0;
let carrito = [];
const contadorProductosCart = document.getElementById("cartCount");

const productosHtml = (producto) => {
    return `<div class="card cardWidth">
    <img src=${producto.imagen}
        alt="card-grid-image">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <button id="agregar${producto.id}" class="comprar">Agregar <i class="fa fa-shopping-cart"
                style="font-size:20px"></i></button>
    </div>
</div>
`
}

const productosCart = (producto) => {
    document.getElementById("modall")
    return `
    <img src=${producto.imagen}  class="img-width" >    
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <hr></hr>
    <button id="quitar${producto.idCompra}" class="comprar quit btn-danger">Quitar</button>

    
`
}



const renderHtml = () => {
    const nodo = document.getElementById("catalogo");
    let catalogoEmpty = "";
    for (const producto of stock) {
        catalogoEmpty += productosHtml(producto);
    }
    nodo.innerHTML = catalogoEmpty;
    buttonAdd();
}

const mostrarCarrito = () => {
    const nodoCart = document.getElementById("carrito");
    let carritoHtml = "";
    for (const producto of carrito) {
        carritoHtml += productosCart(producto);
    }

    nodoCart.innerHTML = carritoHtml;
    contadorProductosCart.innerText = carrito.length;
    localStorage.setItem(`carrito`, JSON.stringify(carrito));
    buttonCart()
}

const buttonAdd = () => {
    for (const producto of stock) {
        const buttonId = `agregar${producto.id}`;
        const nodoButton = document.getElementById(buttonId);
        nodoButton.addEventListener("click", () => {

            /**  Desestructuración con spread de array */
            const stock = {
                ...producto,
                idCompra: contadorCarrito,
            }
            contadorCarrito += 1;
            carrito.push(stock);
            mostrarCarrito();
        })
    }
}


const buttonCart = () => {
    for (const producto of carrito) {
        const buttonId = `quitar${producto.idCompra}`;
        const buttonNode = document.getElementById(buttonId);
        buttonNode.addEventListener("click", () => {
            const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
            carrito.splice(index, 1);
            mostrarCarrito();

        });
    }
}

const jsonStorage = () => {
    carrito = JSON.parse(localStorage.getItem(`carrito`))
    mostrarCarrito()
}
document.addEventListener("DOMContentLoaded", () => {

    /*   Operador ternario */
    localStorage.getItem(`carrito`) ? jsonStorage() : []
});


renderHtml();

/*      Es un toast para indicar al usuario que ha agregado un producto al carrito */
for (const producto of stock) {
    const btn = document.getElementById(`agregar${producto.id}`)
    btn.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado al carrito",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { }
        }).showToast();

    })
}

/*              Operador lógico and */
buttonCarrito = document.getElementById("dropdownMenuButton")
buttonCarrito.addEventListener("click", () => {
    carrito.length === 0 && Swal.fire('El carrito está vacío');
});


const $pokemon = document.querySelector('#pokemon')
function renderPokemon () {
        
}

/*fetch para cargar datos de manero asincrónica */

 fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
 .then((response) => response.json())
 .then(pokemon => console.log(pokemon) )