/*EJERCICIO 1, SUMA DE NUMEROS QUE ENTRA EL USUARIO A PARTIR DE UNA CANTIDAD DE NUMEROS QUE TAMBIEN ENTRA EL USUARIO*/
let cantNumeros = parseInt(prompt("Ingrese la cantidad de números con los que desea hacer la suma, por ejemplo: para una suma de 1+3, se entraría el numero 2 porque son 2 numeros a sumar"));
let suma=0;

for(let i = 0; i<cantNumeros; i++) {
    let num = parseInt(prompt("Ingrese uno de los numeros que desea sumar: "));
    suma+=num;
}

console.log("La suma de los números, es: " + suma);

/*EJERCICIO 2, IMPRIMIENDO LA PALABRA HOLA, LAS VECES QUE EL USUARIO PIDA*/
// let cantHola= parseInt(prompt("Dijite el número de las veces que la consola le saque el mensaje hola: "));

// for(let i = 0; i<cantHola; i++){
//     console.log("iteracion numero: " + (i+1));
//     console.log("hola");
// }

/*EJERCICIO 3, CONCATENANDO CADENAS DE TEXTO INGRESADAS POR EL USUARIO, HASTA QUE PRESIONE ESC*/
// let respuesta=''
// let texto= prompt("Ingrese la primera palabra que desee, la cual sera concatenada con todas las palabras que ingrese de ahora en adelante");
// while((texto!=='esc' && texto!=='ESC')){
//     respuesta= respuesta + texto;
//     console.log(respuesta);
//     texto= prompt("Ingrese una palabra, para concatenar. Recuerde que si desea salir, escriba ESC. La concatenacion va así: "+ respuesta);
// }
