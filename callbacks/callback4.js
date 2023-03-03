//recibir un objeto de 3 equipos de futbol con las siguientes caracteristicas: nombre,#titulos,añocreación, $ inversion. Encontrar que tengan 5 titulosy una inversion mayor al 100. despuesde esto hacer una sumatoria de las inversiones

let equipos=[
    {nombre:"Atletico nacional",titulos:32,creacion:1950,inversion:200},
    {nombre:"Dim",titulos:9,creacion:1930,inversion:100},
    {nombre:"Millonarios",titulos:25,creacion:1910,inversion:250}
]

function filtrarEquipos(equipos,sumarInversiones){

    setTimeout (function(){

        let equiposfiltrados= equipos.filter(equipo=>equipo.titulos>5 && equipo.inversion >100);
        sumarInversiones(equiposfiltrados)

    },3000)

}

filtrarEquipos(equipos,function(equiposfiltrados){
    let sumaInversion = 0
    console.log(equiposfiltrados)
    equiposfiltrados.forEach(equipo => {
        sumaInversion = sumaInversion + equipo.inversion
    });
    console.log("La sumatoria de lo equipos filtrados es: "+ sumaInversion)
})

