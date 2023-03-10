function procesoUno(nombreUsuario){
    let promise= new Promise(function(resuelve,rechaza){
        setTimeout(function(){
            if(nombreUsuario=="ADMIN"){
                resuelve("Welcome")
            }else{
                rechaza("Check your data")
            }
        },2000)
    })//siempre ejecutamos una funcion anonima
    return promise
}

async function callThePromise(){
    console.log("call the promise...")
    try{
        let respuesta=await procesoUno("ADMIN")//el await siempre debe ir asociado a una funcion asincrona async
        console.log(respuesta)
    }catch(error){
        console.log(error)
    }
}

callThePromise()