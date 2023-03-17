//ForEach

let datos=[10,20,30,40,50]

//recorriendo el arreglo: Es un metodo que nos devuelve Nada, lo que hace es contar elemento por elemento
let sumatoria=0
datos.forEach(function(dato){

    sumatoria=sumatoria+dato
})
console.log(sumatoria)