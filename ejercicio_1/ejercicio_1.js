// EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.

let edadP = prompt("Por favor ingrese su edad: ");

edadP = Number(edadP);

function verificarEdad(edad){
    if (isNaN(edad) || edad<0 || edad>120){
        document.write("Por favor ingresar una edad validad ");
    }else {
        let mesaje = (edad>=18)
        ?"Su edad es de "+edad+" eso significa que usted es una persona mayor de edad 😮‍💨":"Su edad es de "+edad+" eso significa que usted es una persona menor de edad 🥺";
        
        document.write(mesaje);
    }
}

verificarEdad(edadP);