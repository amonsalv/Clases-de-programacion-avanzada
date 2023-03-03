function saludar() { //declarando la funcion UNO (PRINCIPAL)
  setTimeout(function () {
    console.log("Hola como estas, iniciando el programa...");
    despedir(); //LLAMADO A LA FUNCION SECUNDARIA (CALLBACK)
  }, 2000);
  
}
function despedir() {//DECLARANDO LA FUNCION SECUNDARIA
  console.log("Adios, fin del programa...");
}

saludar();//LLAMANDO A LA FUNCION PRIMARIA
