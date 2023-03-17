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


for (let i = 0; i < 20; i++) { //vamos a crear un bucle for para crear aleatoriamente las 20 edades y los 20 codigos, para tenerlos en el arreglo, hacemos la iteraccion entre 1 y 20
    edades.push(Math.floor(Math.random() * 100) + 1);
    codigos.push(Math.floor(Math.random() * 20) + 1);//generamos los numeros aleatorios utilizamos el math random,que devuelve un número aleatorio entre 0 y 1. Multiplicamos ese número por 100 y redondeándolo hacia abajo con la función Math.floor(), podemos obtener un número aleatorio entre 0 y 99, que luego sumamos 1 para obtener un número aleatorio entre 1 y 100. Para los códigos, podemos utilizar la misma técnica, pero generando números aleatorios entre 1 y 20.
  }

  //para encontrar los mayores de edad en el array, utilizamos la funcion math.max, para que nos devuelva el valor maximo del conjunto de numeros para esto esta el spread ... que nos pasa los valores del arreglo

  let mayorEdad = Math.max(...edades);

  //