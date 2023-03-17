/*1.PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetas de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planeta NABOO.
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como: 
√(𝑥2 − 𝑥1)2 + (𝑦2 − 𝑦1)2
*/

function medirDistancia(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
}

let distanciaCalculada=medirDistancia(10,10,5,5)
console.log(`La distancia calculada fue de ${distanciaCalculada} UA`)