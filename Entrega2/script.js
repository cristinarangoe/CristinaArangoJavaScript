/*ENTREGA 2, DESAFIO SIMULADOR INTERACTIVO*/

/* Para este simulador interactivo, lo que hares es pedirle al usuario que entre el nombre del producto, cantidad y precio de ese producto
Podra entrar muchos productos, cada vez que entre un producto, la consola sacara un mensaje con el nombre del producto, cantidad y precio
Cuando el usuario no quiera entrar mas productos, se calculara el precio final de todos los productos, el subtotal
Se le preguntara si vive en medellin o envigado, para calcular el precio del envio
al finalizar, se calculara el precio total del pedido*/

function subtotal(){
    let palabra = '';
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let precioTotal = 0;
    while((palabra !== 'NO' && palabra != 'no') && (palabra !== 'No')){
        producto=prompt("Por favor ingresar el nombre del producto:");
        cantidad=parseInt(prompt("Ingrese la cantidad del producto"));
        while(isNaN(cantidad)){
            cantidad=parseInt(prompt("Ingrese la cantidad del producto, asegurate que sea un numero"));
        }
        precio=parseFloat(prompt("Ingrese el precio del producto, sin puntos ni comas, ej: 10000"));
        while(isNaN(precio)){
            precio=parseInt(prompt("Ingrese el precio del producto, sin puntos ni comas, ej: 10000, asegurate que lo estes entrando bien"));
        }
        console.log("El producto con nombre: " + producto + " tiene una cantidad de: " + cantidad + " y un precio de: " + precio );
        precioTotal+=precio*cantidad;
        palabra=prompt("Desea agregar otro producto? Ingrese la palabra si, si desea ingresar otro. Ingrese la palabra no, si no desea ingresar otro");
    }
    console.log("El subtotal de tu producto, es decir, precio antes de envio es: " + precioTotal);
    return precioTotal;
}

function total(){
    let ubicacion=parseInt(prompt("escriba el numero 1 si vives en Medellin o escribe el numero 0 si vives en otra ciudad."));
    let precioEnvio=0;
    let precio= subtotal();
    if(ubicacion===1){
        console.log("El precio de envio de su pedido es de 4000, porque vives en Medellin")
        precioEnvio=4000;
    }else{
        console.log("El precio de envio de su pedido es de 6000, porque vives fuera de Medellin")
        precioEnvio=6000;
    }
    precio+=precioEnvio;

    console.log("El total de tu pedido es: " + precio);
}

total();