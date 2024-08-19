// EJERCICIO 8:
// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
// por el usuario.

let numeroM = Number(prompt("Por favor ingresar el numero que desea multiplicar🫡: "));
const resultado = [];

for (let i = 1; i <= 10; i++){
    resultado.push(`${numeroM} x ${i} = ${numeroM * i}`);
}

for (let mostrar of resultado) {
    document.write(mostrar + "<br>");
}
