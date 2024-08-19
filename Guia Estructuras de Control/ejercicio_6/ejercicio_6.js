// EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
// en cuenta lo siguiente:
// Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
// descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
// es Puerto el Triunfo el descuento será del 15%.

function descuentoViaje(destino,precio){
    let origenC = destino.ciudad.toUpperCase();
    let origenD = destino.destino.toUpperCase();
    let descuento = 0;
    if (origenC === "PALMA" ) {
        if (origenD==="LA COSTA DEL SOL"){
            descuento=  0.05;
        }else if (origenD==="PANCHIMALCO"){
            descuento=  0.1;
        }else if(origenD==="PUERTO EL TRIUNFO"){
            descuento= 0.15;
        }
    } else{
        document.write("Lo sentimos mucho pero no hay descuento para la Ciudad o Destino 🥲." + "<br>");
        return descuento;
    }
    return precio * descuento
}

let origenCiudad=prompt("Por favor ingrese la ciudad de destino: PALMA, ect ");
let origenDestino=prompt("Por favor ingrese la ciudad de destino: LA COSTA DEL SOL, PANCHIMALCO, PUERTO EL TRIUNFO");
let precio=Number(prompt("Por favor ingrese el precio del viaje: $"));

const destino= {
    ciudad: origenCiudad,
    destino: origenDestino
};

let descuento = descuentoViaje(destino,precio);
let precioFinal = precio - descuento;

document.write("Ciudad: " + origenCiudad.toUpperCase() + "<br>");
document.write("Destino: " + origenDestino.toUpperCase() + "<br>");
document.write("Descuento: $" + descuento.toFixed(2) + "<br>");
document.write("Precio a Cancelar: $" + precioFinal.toFixed(2) + "<br>");
document.write("---------------------------");