/* PROBLEMA: se necesita clasificar 10 números enteros positivos
o negativos que contienen códigos de naves de guerra. Diseño
un algoritmo que permita recibir dichos 50 números e indicar
¿Cuál fue el más cercano a cero? (Si el número es negativo se
debe mostrar el resultado del valor absoluto)*/

//definimos un array para los 50 numeros

let numeros = [4, -7, 2, 9, -5, -1, -3, 6, 8, -10, -2, 3, 7, -4, 1, -8, -6, 5, 10, -9, -5, 2, 3, -1, 7, -7, 8, 6, -4, -3, 1, -2, -6, 7, 5, -8, 9, -10, 4, 9, -9, 10, -1, 2, -3, -5, 6, -7, -4, 3];

//definimos una variable para almacenar el número más cercano a cero encontrado hasta ahora.

let masCercano = Infinity;// En este punto, no se ha encontrado ninguno, por lo que la variable se inicializa con un valor muy grande para asegurarnos de que cualquier número que encontremos sea más cercano a cero

//recorremos el array con el bucle for:

for (let i = 0; i < numeros.length; i++) {
    const distancia = Math.abs(numeros[i] - 0); // calculamos la distancia entre el número actual y cero. Para hacer esto, utilizamos la función Math.abs() para obtener el valor absoluto del número actual, ya que necesitamos la distancia y no la diferencia con cero

    if (distancia < masCercano) {
        masCercano = distancia; //Si la distancia calculada es menor que la distancia del número más cercano encontrado hasta ahora, actualizamos la variable masCercano con el valor actual
    }
}  

//Después de recorrer todo el array, mostramos el número más cercano a cero encontrado. Si es un número negativo, mostramos su valor absoluto

console.log(`El número más cercano a cero es ${masCercano > 0 ? masCercano : -masCercano}`);
