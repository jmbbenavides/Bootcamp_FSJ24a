// EJERCICIO 9:
// Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
// Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
// • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
// • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
// • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
// • Si no está entre ningún caso anterior la frase “Temperatura desconocida”

let tempeCelsius = Number(prompt("Favor ingresar Celsius a convertir °C: "));

let tempeFahren = (9/5 * tempeCelsius) + 32

if (tempeFahren >= 14 && tempeFahren < 32){
    document.write("Temperatura baja");
} else if (tempeFahren >= 32 && tempeFahren < 68){
    document.write("Temperatura adecuada");
} else if (tempeFahren >= 68 && tempeFahren <=96){
    document.write("Temperatura alta");
}else {
    document.write("Temperatura desconocida"); 
}