let estudiantes=[
    {
        id:1,
        nombre:"Juan",
        equipo:"NACIONAL"
        },
    {
        id:2,
        nombre:"Francia",
        equipo:"MEDELLIN"
    },
    {
        id:3,
        nombre:"Ana",
        equipo:"MEDELLIN"
    }
]

//mapeando el arreglo de estudiantes
let mapa=estudiantes.map(estudiante=>{
    estudiante.equipo="NACIONAL"
    estudiante.nota= 4.9
    return estudiante
})//no podemos quitar el retorno ya que tienen mas procesos

console.log(mapa)
