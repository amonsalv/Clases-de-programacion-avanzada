/* PROBLEMA: QUI-GON JINN está encargado de revisar n sables
de luz y contabilizar la cantidad de energía de sables que tienen
negativa en Joules.

Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables
defectuosos con energía negativa fue de 2 sables.
*/

//creamos una funcion para contar los sables defectuosos
function contarSablesDefectuosos(sables) { // sables va a hacer un array de números representando la energía de cada sable de luz.
    let contador = 0;//inicializamos un contador desde 0, para contar los sables de luz que contengan energia negativa
    for (let i = 0; i < sables.length; i++) { //creamos un ciclo for para iterar el array, el ciclo va comenzar desde 0 y termina con el lenght
        if (sables[i] < 0) { //creamos un condicional para verificar la energia del sable, si esta es menor que 0 aumentamos el contador en 1
            contador++;
        }
    }
    return contador; //devolvemos todo
}

let sables = [2, 4, -8, 5, -6]; //llamamos el ejemplo
let cantidadSablesDefectuosos = contarSablesDefectuosos(sables); //finalmente llamamos la funcion
console.log(cantidadSablesDefectuosos); // 2