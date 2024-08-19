// EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
// Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
// coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
// el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
// aplicara en base a lo que selecciono el usuario.

function calcularDescuento(modelo,precioV){
    // modelo=modelo.toUpperCase();
    let decuento;
    switch (modelo.toUpperCase()){
        case "FORD FIESTA" :
            decuento= 0.05;
            break;
        case "FORD FOCUS":
            decuento=0.1;
            break;
        case "FORD ESCAPE":
            decuento=0.2;
            break;
        default:
            decuento=0;
            alert("El coche que ingreso no cuenta con descuento😫");
    }
    return precioV * decuento;
}

let modelo=prompt("Por favor ingresar el modelo del vehiculo(FORD FIESTA, FORD FOCUS, FORD ESCAPE) ");
let precioV=prompt("Por favor ingresar el valor del vehiculo: $");


let decuento = calcularDescuento(modelo,precioV);
let precioFinal= precioV - decuento;

document.write('Modelo de vehiculo seleccionado: '+modelo.toUpperCase()+'<br>');
document.write('El descuento que tendra por este vehiculo sera de: $'+decuento.toFixed(2)+'<br>');
document.write('Precio final a pagar: $'+precioFinal.toFixed(2)+'<br>');
document.write('-----------------------------------------------------------');
