// EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
// de lo siguiente:
// • Examen =20%
// • tareas = 40%
// • asistencia = 10%
// • investigación = 30%
// Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.


let cantidadAlumnos = prompt("Favor ingresar la cantidad de alumnos: ");
cantidadAlumnos = Number(cantidadAlumnos);

const paquete = [];  

function calcularNotaFinal(examen, tarea, asistencia, investigacion) {
    return (examen * 0.2) + (tarea * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
}

for (let i = 0; i < cantidadAlumnos; i++) {
    let nombre = prompt(`Favor ingresar el nombre del alumno ${i + 1}:`);
    let carnet = prompt(`Favor ingresar el carnet de ${nombre}:`);
    let examen = Number(prompt(`Ingresar nota del examen de ${nombre}:`));
    let tarea = Number(prompt(`Ingresar nota de las tareas de ${nombre}:`));
    let asist = Number(prompt(`Ingresar nota de la asistencia de ${nombre}:`));
    let investi = Number(prompt(`Ingresar nota de la investigación de ${nombre}:`));

    let notaFinal = calcularNotaFinal(examen, tarea, asist, investi);

    let alumno = {
        nombre: nombre,
        carnet: carnet,
        examen: examen,
        tarea: tarea,
        asistencia: asist,
        investigacion: investi,
        notaFinal: notaFinal
    };

    paquete.push(alumno);  
}

for (let i = 0; i < paquete.length; i++) {
    document.write(`Alumno: ${paquete[i].nombre}<br>`);
    document.write(`Carnet: ${paquete[i].carnet}<br>`);
    document.write(`Examen: ${paquete[i].examen}<br>`);
    document.write(`Tarea: ${paquete[i].tarea}<br>`);
    document.write(`Asistencia: ${paquete[i].asistencia}<br>`);
    document.write(`Investigacion: ${paquete[i].investigacion}<br>`);
    document.write(`Nota Final: ${paquete[i].notaFinal.toFixed(2)}<br>`);
    document.write("---------------------------<br>");
}


