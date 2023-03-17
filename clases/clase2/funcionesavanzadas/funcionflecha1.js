//es una forma de reedescribir la funcion

//la flechas es la muestra del return
let medirDistancia =(x1,y1,x2,y2)=>Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2))


let disitanciaCalculada=medirDistancia(10,10,5,5)
console.log(`la distancia calculada fue de ${disitanciaCalculada} UA`)