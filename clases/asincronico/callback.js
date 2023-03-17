function procesoUno(nombreUsuario,procesoDos){
    setTimeout(function(){
        if(nombreUsuario=="ADMIN"){
            procesoDos(true)
        }else{
            procesoDos(false)
        }
    },2000)
}

procesoUno("ADMIN",function(criterio){
    if(criterio==true){
        console.log("Bienvenido")
    }else{
        console.log("Verifica tus datos")
    }
})