// EJERCICIO 10:
// Se cuenta con la siguiente información:
// • Las edades de 5 estudiantes del turno mañana.
// • Las edades de 6 estudiantes del turno tarde.
// • Las edades de 11 estudiantes del turno noche.
// Nota: Las edades de cada estudiante se deberán ingresar por la web.
// Lo que queremos devolver:
// • Obtener el promedio de las edades de cada turno (tres promedios).
// • Imprimir dichos promedios (promedio de cada turno).
// • Mostrar por pantalla un mennsaje que indique cuál de los tres turnos tiene un
// promedio de edades mayor.

const estuMañana = [];
const estuTarde = [];
const estuNoche = [];
let sumaUno = 0;
let sumaDos = 0;
let sumaTres = 0;

for (let i = 1; i <= 5; i++) {
    let edadUno = Number(prompt(`Por favor ingrese la ${i} edad TURNO MAÑANA: `));
    sumaUno += edadUno;
}
const promedioUno = sumaUno / 5;

for (let y = 1; y <= 6; y++) {
    let edadDos = Number(prompt(`Por favor ingrese la ${y} edad TURNO TARDE: `));
    sumaDos += edadDos;
}
const promedioDos = sumaDos / 6;

for (let x = 1; x <= 11; x++) {
    let edadTres = Number(prompt(`Por favor ingrese la ${x} edad TURNO NOCHE: `));
    sumaTres += edadTres;
}
const promedioTres = sumaTres / 11;

let promedioMayor = '';

if (promedioUno > promedioDos && promedioUno > promedioTres) {
    promedioMayor = `TURNO MAÑANA con promedio de ${promedioUno.toFixed(2)}`;
} else if (promedioDos > promedioUno && promedioDos > promedioTres) {
    promedioMayor = `TURNO TARDE con promedio de ${promedioDos.toFixed(2)}`;
} else if (promedioTres > promedioUno && promedioTres > promedioDos) {
    promedioMayor = `TURNO NOCHE con promedio de ${promedioTres.toFixed(2)}`;
} else {
    promedioMayor = 'Los promedios son iguales o hay un empate.';
}

document.write(`Promedio de edades del TURNO MAÑANA: ${promedioUno.toFixed(2)}` + "<br>");
document.write(`Promedio de edades del TURNO TARDE: ${promedioDos.toFixed(2)}` + "<br>");
document.write(`Promedio de edades del TURNO NOCHE: ${promedioTres.toFixed(2)}` + "<br>");
document.write(`El promedio mayor es del ${promedioMayor}` + "<br>");
