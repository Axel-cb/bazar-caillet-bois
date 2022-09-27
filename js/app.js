
let contadorCarrito = 0;
let carrito = [];
const emptyButton = document.getElementById("buttonCartEmptyView")
emptyButton.addEventListener("click", () => {
    carrito.length = 0
    mostrarCarrito()
})
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
    return `
    <table class="table table-hover tableCart" id="carritoRender" >         
    <tbody>           
                    <td><img src="${producto.imagen}" class="img-cart"</td>
                    <td class="width-listCart">${producto.nombre}</td>
                    <td class="width-listCart">$${producto.precio}</td>                    
                    <td><a href="#" class="eliminarProducto" id="quitar${producto.idCompra}">x</a></td>            
                </tbody>
              </table>
             
`
}

const renderHtml = () => {
    const nodo = document.getElementById("catalogo");
    let catalogoEmpty = "";
    fetch('../catalogo.json')
        .then((response) => response.json())
        .then((data) => {

            for (const producto of data) {
                catalogoEmpty += productosHtml(producto);
            }
            nodo.innerHTML = catalogoEmpty;
            console.log(data)
            buttonAdd();
            
        });
       
}
const mostrarCarrito = () => {
    const nodoCart = document.getElementById("carritoRender");
    let carritoHtml = "";
    for (const producto of carrito) {
        carritoHtml += productosCart(producto);
    }
    nodoCart.innerHTML = carritoHtml;

    contadorProductosCart.innerText = carrito.length;
    localStorage.setItem(`carrito`, JSON.stringify(carrito));

    const precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML = carrito.reduce((acc, producto) => acc + producto.precio, 0)
    buttonCart()
}


const buttonAdd = () => {
    fetch('../catalogo.json')
        .then((response) => response.json())
        .then((data) => {
            for (const producto of data) {
                const botonId = `agregar${producto.id}`;
                const botonNodo = document.getElementById(botonId);

                botonNodo.addEventListener("click", () => {

                    const productoCarrito = {
                        imagen: producto.imagen,
                        nombre: producto.nombre,
                        idCompra: contadorCarrito,
                        precio: producto.precio,
                    };

                    contadorCarrito += 1;
                    carrito.push(productoCarrito);
                    mostrarCarrito();
                })
            }
        })
};




const buttonCart = () => {
    for (const producto of carrito) {
        const buttonId = `quitar${producto.idCompra}`;
        const buttonNode = document.getElementById(buttonId);
        buttonNode.addEventListener("click", () => {
            Swal.fire({
                title: '¿Estás seguro que deseas eliminar?',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, quiero borrarlo'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Producto borrado!',
                        '',
                        'success'
                    )
                    const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
                    carrito.splice(index, 1);
                    mostrarCarrito();
                }
            })
        })
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



/*              Operador lógico and */
buttonCarrito = document.getElementById("dropdownMenuButton")
buttonCarrito.addEventListener("click", () => {
    carrito.length === 0 && Swal.fire('El carrito está vacío');
});



renderHtml();



