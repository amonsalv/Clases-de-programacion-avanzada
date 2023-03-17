/* PROBLEMA: Para habilitar la guerra de los clones es necesario
clasificar la edad de estos, elabore un programa que permita
recibir 20 edades y 20 códigos diferentes generadas
aleatoriamente y determine cual de esas edades es la mayor. Si
se repite la misma edad se debe contar el número de
repeticiones
*/

//Procedemos a crear un arreglo vacio, para almecenar las edades y los codigos
let edades = [];
let codigos = [];


for (let i = 0; i < 20; i++) { //creamos un bucle for para crear aleatoriamente las 20 edades y los 20 codigos, para tenerlos en el arreglo, hacemos la iteraccion entre 1 y 20

    edades.push(Math.floor(Math.random() * 100) + 1);//generamos los numeros aleatorios utilizamos el math random,que devuelve un número aleatorio entre 0 y 1. Multiplicamos ese número por 100 y redondeándolo hacia abajo con la función Math.floor(), podemos obtener un número aleatorio entre 0 y 99

    codigos.push(Math.floor(Math.random() * 20) + 1);// que luego sumamos 1 para obtener un número aleatorio entre 1 y 100. Para los códigos, podemos utilizar la misma técnica, pero generando números aleatorios entre 1 y 20.
}

//para encontrar los mayores de edad en el array, utilizamos la funcion math.max, para que nos devuelva el valor maximo del conjunto de numeros para esto esta el spread ... que nos pasa los valores del arreglo

let mayorEdad = Math.max(...edades);



let contador = 0; //Hacemos el contador para el numero de repeticiones de la edad mas alta,
for (let i = 0; i < edades.length; i++) { //y hacemos un for para recorrer el arreglo
    if (edades[i] === mayorEdad) {// ademas del que el contador nos cuente las veces que aparece la edad mas alta
        contador++;
    }
}

//e imprimimos todo
console.log("La edad más alta es " + mayorEdad + " y aparece " + contador + " veces.");
