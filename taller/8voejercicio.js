/*PROBLEMA:
 Para descubrir la ubicación de un listado con los
últimos guerreros jedi de la galaxia se debe recibir un listado de
15 mapas los cuales tienen la siguiente información:

{nombrePlaneta, latitud, longitud, nivel de oxígeno en el
planeta, volumen total del agua del planeta}. Diseñe una
solución para:

• Sumar la cantidad total de agua de los 15 planetas

• Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas

• Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
negativo y de ser así mostrar la información general de este

• Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
información general de este */

//hacemos un array con los 15 mapas, este mencionando a cada uno representado como un objeto con las propiedades mencionadas

const planetas = [
    { nombrePlaneta: 'Tatooine', latitud: 0, longitud: 0, nivelOxigeno: 10, volumenAgua: 0 },
    { nombrePlaneta: 'Alderaan', latitud: 0, longitud: 0, nivelOxigeno: 20, volumenAgua: 30 },
    { nombrePlaneta: 'Coruscant', latitud: 0, longitud: 0, nivelOxigeno: 40, volumenAgua: 50 },
    { nombrePlaneta: 'Naboo', latitud: 0, longitud: 0, nivelOxigeno: 30, volumenAgua: 80 },
    { nombrePlaneta: 'Bespin', latitud: 0, longitud: 0, nivelOxigeno: 50, volumenAgua: 0 },
    { nombrePlaneta: 'Dagobah', latitud: 0, longitud: 0, nivelOxigeno: 20, volumenAgua: 10 },
    { nombrePlaneta: 'Endor', latitud: 0, longitud: 0, nivelOxigeno: 25, volumenAgua: 40 },
    { nombrePlaneta: 'Hoth', latitud: 0, longitud: 0, nivelOxigeno: 5, volumenAgua: 0 },
    { nombrePlaneta: 'Jakku', latitud: 0, longitud: 0, nivelOxigeno: 15, volumenAgua: 0 },
    { nombrePlaneta: 'Mordor', latitud: 0, longitud: 0, nivelOxigeno: 35, volumenAgua: 10 },
    { nombrePlaneta: 'Kamino', latitud: 0, longitud: 0, nivelOxigeno: 45, volumenAgua: 100 },
  ];
  
  
//Ahora vamos con los problemas planteados:

//• Sumar la cantidad total de agua de los 15 planetas

//recorremos el array  y sumamos la propiedad "volumenAgua" de cada objeto. Podemos utilizar el método reduce para realizar esta operación

let totalAgua = planetas.reduce((acumulador, planeta) => acumulador + planeta.volumenAgua, 0); //lo hacemos en funcion flecha e imprimimos

//el reduce esta función se ejecutará para cada elemento del array, con dos parámetros: el acumulador y el elemento actual. En este caso, el acumulador será la suma acumulada de las cantidades de agua y el elemento actual será el objeto que representa el planeta. 

console.log(`La cantidad total de agua de los 15 planetas es: ${totalAgua}`); //La cantidad total de agua de los 15 planetas es: 320

//• Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas

//suamos la propiedad "nivelOxigeno" de cada objeto en el array, y luego multiplicamos el resultado por 100. 

let totalOxigeno = planetas.reduce((acumulador, planeta) => acumulador + planeta.nivelOxigeno, 0) * 100; //estamos haciendo lo mismo, solo que al final multiplicamos por 100.

//e imprimimos
console.log(`El total de oxígeno de los 15 planetas es: ${totalOxigeno}`); //El total de oxígeno de los 15 planetas es: 29500

//• Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno negativo y de ser así mostrar la información general de este

//nos vamos a el array de planetas y comprobamos si el valor de la propiedad nivelOxigeno es menor que 0. Si se cumple esta condición, mostramos la información general del planeta usando console.log().

for (let i = 0; i < planetas.length; i++) {
    if (planetas[i].nivelOxigeno < 0) {
      console.log(`El planeta ${planetas[i].nombrePlaneta} tiene un nivel de oxígeno negativo.`);
      console.log(`Información general:`, planetas[i]);
    }
  }
  
  



