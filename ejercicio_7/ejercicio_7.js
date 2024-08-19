// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// • La cantidad de valores negativos ingresados.
// • La cantidad de valores positivos ingresados.
// • La cantidad de múltiplos de 15.
// • El valor acumulado de los números ingresados que son pares

let contador = 1;
const numeros=[];

while (contador <=10){
    let numeroA =Number(prompt("Favor ingrese su " + contador + " numero: "));
    numeros.push(numeroA);
    contador++;
}


let positivos = 0;
let negativos = 0;
let mult = 0;
let multDos = 0;


for (let numero of numeros){

    if (numero >0){
        positivos++;
    } else if (numero < 0){
        negativos++;
    }

    if (numero % 15 ===0){
        mult++;
    }

    if (numero%2==0){
            multDos += numero;
    }
}

for (let mostar of numeros){
    document.write(mostar +"<br>")
}

document.write("Cantidad de numeros Positivos: " + positivos + "<br>");
document.write("Cantidad de numeros Negativos: " + negativos + "<br>");
document.write("Cantidad de numeros Multiplos de 15: " + mult + "<br>");
document.write("Suma de los numeros que son Pares: " + multDos);
