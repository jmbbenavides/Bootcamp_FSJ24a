// CATEGORIA AUMENTO
// A 15%
// B 30%
// C 10%
// D 20%
// Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
// Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
// aumento. Deberá demostrar los datos del empleado y el aumento salarial.


function calcularAumento(categoria, salario) {
    let porcentajeAumento;
    switch (categoria.toUpperCase()) { 
        case 'A':
            porcentajeAumento = 0.15;
            break;
        case 'B':
            porcentajeAumento = 0.30;
            break;
        case 'C':
            porcentajeAumento = 0.10;
            break;
        case 'D':
            porcentajeAumento = 0.20;
            break;
        default:
            porcentajeAumento = 0;
            alert("Categoría no válida");
    }
    return salario * porcentajeAumento;
}

let nombre = prompt("Ingrese el nombre del trabajador:");
let salario = Number(prompt("Ingrese el salario del trabajador:"));
let categoria = prompt("Ingrese la categoría del trabajador (A, B, C, D):");

let aumento = calcularAumento(categoria, salario);
let salarioFinal = salario + aumento;

if (aumento > 0) {
    document.write(`Nombre del trabajador: ${nombre}<br>`);
    document.write(`Salario base: $${salario.toFixed(2)}<br>`);
    document.write(`Categoría: ${categoria.toUpperCase()}<br>`);
    document.write(`Aumento salarial: $${aumento.toFixed(2)}<br>`);
    document.write(`Salario final: $${salarioFinal.toFixed(2)}<br>`);
}
