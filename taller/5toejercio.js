/* PROBLEMA: Watto paga a su personal de ventas un salario de
3500000 mensuales, más una comisión de 1500000 por cada
licencia de software vendida
menos el 5% de deducciones por
impuestos sobre el total devengado.
Codifica un programa que calcule e imprima el salario mensual de un vendedor dado;
*/ 

//declaramos las variables antes de empezar nuestra funcion, las cuales son el salario base y la comision por venta

let salarioBase = 3500000;
let comisionVendida = 1500000;

//Agregamos una variable para que este calcule cada lincencia de vendida que hizo el vendedor, dada por el usuario que lo solicita, ojo esta es distinta, ya que es la cantidad, ya sabemos cuanto vale la comision, falta saber cuantas vendio

let licenciasVendidas = 5; //le damos cualquier valor

//Calculamos primero la comision total (lo que vale la comision por las lincencias vendidas)

let comisionTotal = comisionVendida * licenciasVendidas;

//Ahora el salario total sin la dedducion

let salarioTotal = salarioBase + comisionTotal;

//Ahora si, hacemos el calculo para la dedducion solicitada

let deducciones = salarioTotal * 0.05;

//Ahora aplicamos el salario Mensual (ya con las dedducciones dadas)

let salarioMensual = salarioTotal - deducciones;

//ahora imprimimos el salario

console.log(`El salario mensual neto del vendedor es: ${salarioMensual}`);