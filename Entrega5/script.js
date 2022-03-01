/*ENTREGA 5, CLASE 9, DESAFIO - INCORPORAR EVENTOS*/
/* CLASE DOM */

/* EN ESTE EJERCICIO, SE PRETENDE PODER INTERACTUAR CON DOM, HTML, JAVASCRIPT Y EVENTOS.
PARA ESTO, VAMOS A CREAR UNA CLASE DE LOS PRODUCTOS, QUE AL SER MI PAGINA UN ECOMMERCE,
ES NECESARIO PODER CREAR DIFERENTES PRODUCTOS SIN CREARLOS EN EL HTML CADA UNO */

//Creacion de la clase producto con su constructor.
class Producto {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

//creacion de los objetos, se van a crear 5 objetos.
const producto1 = new Producto("Plato Mexicano", "Este es un bowl mexicano que tiene ingredientes ricos y naturales", "$15,000");
const producto2 = new Producto("Nachos", "Nachos hechos con maíz amarillo, 100% natural", "$10,000");
const producto3 = new Producto("Carne de hamburguesa", "Carne hecha con ingredientes de la mejor calidad", "$18,000");
const producto4 = new Producto("Arepas de queso", "Arepas rellenas de queso mozzarella de la mejor calidad", "$8,000");
const producto5 = new Producto("Arepas blanca", "Arepas hechas con maiz blanco, naturales y sin conservantes", "$5,000");

//creacion del array con cada uno de los PRODUCTOS, objetos
const array= [producto1, producto2, producto3, producto4, producto5];

//id del formulario
let formProducto = document.getElementById('formulario');

//vamor a hacer el evento del submit del formulario
formProducto.addEventListener('submit', (e) =>{
    e.preventDefault(); //por defecto este evento subit envia al servidor. hay que prevenir esto porque aun no se tiene nada del servidor

    let inputNombre = document.getElementById('nombre');
    let inputDescripcion = document.getElementById('descripcion');
    let inputPrecio = document.getElementById('precio');

    const producto = new Producto(inputNombre.value, inputDescripcion.value, inputPrecio.value);
    array.push(producto);

    console.log(producto);
    formProducto.reset();
})

//llamamos al id del div donde vamos a meter nuestros productos en el HTML
let productsSection = document.getElementById('productsSection');

//llamamos al id del boton que es el encargado de obtener el boton
let botonProductos = document.getElementById('botonProductos');

//funcion del evento click que nos permitira que cuando hagamso click podamos ver los productos
botonProductos.addEventListener('click', () =>{
    //for para ir insertando en el html cada uno de los productos, objetos creados
    array.forEach((prod,indice) =>{
        productsSection.innerHTML += 
        `<div id="prod${indice}" class="cardProd">
            <h2>${prod.nombre}</h2>
            <p>${prod.descripcion}</p>
            <p>${prod.precio}</p>
        </div>`
    });
})

