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

//
let buscador=estudiantes.find(estudiante=>estudiante.id==3)

let filtro=estudiantes.filter(estudiante=>estudiante.id==3)

let busqueda=estudiantes.some(estudiante=>estudiante.id==3)

console.log(buscador) //busca el criterio algo especifico
console.log(filtro) //busca el criterio donde queda adentro de un arreglo
console.log(busqueda)//si existe, nos dice si es verdadero

/* ejecucion en node
{ id: 3, nombre: 'Ana', equipo: 'MEDELLIN' }
[ { id: 3, nombre: 'Ana', equipo: 'MEDELLIN' } ] 
*/