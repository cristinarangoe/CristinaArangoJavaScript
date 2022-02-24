/*ENTREGA 4, CLASE 8, DESAFIO COMPLEMENTARIO - INTERACTUAR CON HTML*/
/* CLASE DOM */

/* EN ESTE EJERCICIO, SE PRETENDE PODER INTERACTUAR CON DOM, HTML Y JAVASCRIPT.
PARA ESTO, VAMOS A CREAR UNA CLASE DE LOS PRODUCTOS, QUE AL SER MI PAGINA UN ECOMMERCE,
ES NECESARIO PODER CREAR DIFERENTES PRODUCTOS SIN CREARLOS EN EL HTML CADA UNO */

//Creacion de la clase producto con su constructor.
class Producto {
    constructor(id,nombre, descripcion, precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

//creacion de los objetos, se van a crear 5 objetos.
const producto1 = new Producto(1,"Plato Mexicano", "Este es un bowl mexicano que tiene ingredientes ricos y naturales", "$15,000");
const producto2 = new Producto(2,"Nachos", "Nachos hechos con maíz amarillo, 100% natural", "$10,000");
const producto3 = new Producto(3,"Carne de hamburguesa", "Carne hecha con ingredientes de la mejor calidad", "$18,000");
const producto4 = new Producto(4,"Arepas de queso", "Arepas rellenas de queso mozzarella de la mejor calidad", "$8,000");
const producto5 = new Producto(5,"Arepas blanca", "Arepas hechas con maiz blanco, naturales y sin conservantes", "$5,000");

//creacion del array con cada uno de los PRODUCTOS, objetos
const array= [producto1, producto2, producto3, producto4, producto5];

//llamamos al id del div donde vamos a meter nuestros productos en el HTML
let productsSection = document.getElementById('productsSection');

//for para ir insertando en el html cada uno de los productos, objetos creados
array.forEach(prod =>{
    productsSection.innerHTML += 
    `<div id="${prod.id}" class="cardProd">
        <h2>${prod.nombre}</h2>
        <p>${prod.descripcion}</p>
        <p>${prod.precio}</p>
    </div>`
});