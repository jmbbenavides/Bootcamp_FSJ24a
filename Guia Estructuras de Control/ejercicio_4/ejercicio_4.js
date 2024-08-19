// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
// calcular cual número es el mayor y devolverlo. 



let numeroUno = Number(prompt("Por favor ingrese su primer numero: "));
let numeroDos = Number(prompt("Por favor ingrese su segundo numero: "));



function numerosMM(numeroUno, numeroDos){
    if (numeroUno>numeroDos){
        document.write('Su primer numero es mayor el cual es '+numeroUno);
    } else if (numeroUno<numeroDos){
        document.write("Su segundo numero es mayor el cual es "+numeroDos)
    }else if (numeroUno==numeroDos){
        document.write("Su primer numero y segundo numero son iguales "+numeroDos)
    }else{
        document.write("Los datos introducidos son inadecuados....")
    }
}

numerosMM(numeroUno,numeroDos);
