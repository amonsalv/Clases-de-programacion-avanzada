// Programa que reciba 5 numeros los sume despues de 5 segundos y el resultado lo multiplique por 100

function principal(numeros,callback){//declarando la funcion principal
    setTimeout(function(){
        let sumatoria=0
        numeros.forEach(numero => {
            sumatoria=sumatoria+numero
        });
        callback(sumatoria)//llamando al callback
    },5000)
}

principal([1,2,3,4,5],function(sumatoria){//llamando a la principal
    let resultado=sumatoria*100//declarando el callback
    console.log("La suma es: "+resultado)
})