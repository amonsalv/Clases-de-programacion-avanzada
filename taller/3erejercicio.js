/* . PROBLEMA: La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día */

let calcularTemperatura = (tempMax, tempMin) => (tempMax + tempMin) /2; //asi calculamos la  temperatura media, mediante la funcion flecha

//llamamos la funcion, para sacar la temperatura media de la luna

let tempMax = 50;
let tempMin = 20;
let tempMedia = calcularTemperatura(tempMax, tempMin);
console.log(`La temperatura media es ${tempMedia} grados`);