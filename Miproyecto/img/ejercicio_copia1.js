/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////EJERCICIO 1 CALCULADORA///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////
//PRIMER CODIGO//
//////////////////
// let operacion = parseFloat(prompt("Elegir que desea realizar \n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division \n 5.Exponenciacion"));
// let num1 = parseFloat(prompt("num1"));
// let num2 = parseFloat(prompt("num2"));

// let Suma = num1 + num2;
// let Resta = num1 - num2;
// let Multiplicacion = num1 * num2;
// let Division = num1 / num2;
// let Exponenciacion = Math.pow(num1, num2);

// if (operacion == 1){
//     console.log("El resultado de la Suma es = ", Suma);
// }
// if (operacion == 2){
//     console.log("El resultado de la Resta es = ", Resta);
// }
// if (operacion == 3){
//     console.log("El resultado de la Multiplicacion es = ", Multiplicacion);
// }
// if (operacion == 4){
//     console.log("El resultado de la Division es = ", Division);
// }
// if (operacion == 5){
//     console.log("El resultado de la Exponenciacion es = ", Exponenciacion);
// }

//////////////////
//SEGUNDO CODIGO//
//////////////////

//1.Convertir Celsius a Fahrenheit
// function celsius (celsius){
//     var celsius =parseInt(prompt("Ingrese cantidad de celsius"));
//     // (°C x 1,8) + 32.
//     var resultado = (celsius * 1.8) + 32;
//     // mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// //2.Convertir Fahrenheit a Celsius
// function fahrenheit (fahrenheit){
//     var fahrenheit =parseInt(prompt("Ingrese cantidad de fahrenheit"));
//     // (°F - 32) ÷ 1,8.
//     var resultado = (fahrenheit - 32) / 1.8 ;
//     // mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// //3.Convertir Celsius a grados Kelvin
// function celsiuss (celsiuss){
//     var kelvin =parseInt(prompt("Ingrese la cantidad de celsius"));
//     //K = 25 °C + 273.15
//     var resultado = (kelvin + 273.15);
//     //mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// //4.Convertir Kelvin a Celsius
// function kelvin2 (kelvin2){
//     var kelvin2 =parseInt(prompt("Ingrese la cantidad de kelvin"));
//     //°C = K - 273.15
//     var resultado = (kelvin2 - 273.15);
//     //mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }

// var respuesta_usuario = parseInt(prompt("Elegir que desea realizar \n 1.Convertir de ºC a ºF \n 2.Convertir ºF a ºC \n 3.Convertir de ºC a ºK \n 4.Convertir de ºK a ºC"));

// //El switch es como un selec y el case es la option
// switch (respuesta_usuario){
//     case 1:
//         celsius();
//         break;
//     case 2:
//         fahrenheit();
//         break;
//     case 3:
//         kelvin();
//         break ;
//     case 4:
//         celsiuss();
//         break ;
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////EJERCICIO 2 CONVERTIR TEMPERATURA, 2 FORMAS///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////
//PRIMER CODIGO//
//////////////////

//1.Convertir Celsius a Fahrenheit
// function celsius (celsius){
//     var celsius =parseInt(prompt("Ingrese cantidad de celsius"));
//     // (°C x 1,8) + 32.
//     var resultado = (celsius * 1.8) + 32;
//     // mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// //2.Convertir Fahrenheit a Celsius
// function fahrenheit (fahrenheit){
//     var fahrenheit =parseInt(prompt("Ingrese cantidad de fahrenheit"));
//     // (°F - 32) ÷ 1,8.
//     var resultado = (fahrenheit - 32) / 1.8 ;
//     // mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// //3.Convertir Celsius a grados Kelvin
// function celsiuss (celsiuss){
//     var kelvin =parseInt(prompt("Ingrese la cantidad de celsius"));
//     //K = 25 °C + 273.15
//     var resultado = (kelvin + 273.15);
//     //mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// //4.Convertir Kelvin a Celsius
// function kelvin2 (kelvin2){
//     var kelvin2 =parseInt(prompt("Ingrese la cantidad de kelvin"));
//     //°C = K - 273.15
//     var resultado = (kelvin2 - 273.15);
//     //mostrar resultado
//     return console.log("La conversion es = ", resultado);
// }
// var respuesta_usuario = parseInt(prompt("Elegir que desea realizar \n 1.Convertir de ºC a ºF \n 2.Convertir ºF a ºC \n 3.Convertir de ºC a ºK \n 4.Convertir de ºK a ºC"));
// //El switch es como un selec y el case es la option
// switch (respuesta_usuario){
//     case 1:
//         celsius();
//         break;
//     case 2:
//         fahrenheit();
//         break;
//     case 3:
//         kelvin();
//         break ;
//     case 4:
//         celsiuss();
//         break ;
// }

//////////////////
//SEGUNDO CODIGO//
//////////////////

// var respuesta_usuario = parseInt(prompt("Elegir que desea realizar \n 1.Convertir de ºC a ºF \n 2.Convertir ºF a ºC \n 3.Convertir de ºC a ºK \n 4.Convertir de ºK a ºC"));

// switch (respuesta_usuario){
//     case 1:
//         var celsius =parseInt(prompt("Ingrese los celsius que desea convertir"));
//         var resultado = (celsius * 1.8) + 32;
//         console.log("La conversion es = ", resultado);
//         break;
//     case 2:
//         var fahrenheit =parseInt(prompt("Ingrese cantidad de fahrenheit"));
//         var resultado = ((fahrenheit - 32) / 1.8 );
//         console.log("La conversion es = ", resultado);
//         break;
//     case 3:
//         var celsiuss =parseInt(prompt("Ingrese los celsius que desea convertir"))
//         var resultado = (celsiuss + 273.15);
//         console.log("La conversion es = ", resultado);
//         break;
//     case 4:
//         var kelvin =parseInt(prompt("Ingrese la cantidad de kelvin que desea convertir"))
//         var resultado = (kelvin - 273.15);
//         console.log("La conversion es = ", resultado);
//         break;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////EJERCICIO 3 INGRESAR 10 NUM Y IMPRIMIRLOS/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let numeros = [];
// let numero = parseInt(prompt("Ingrese la cantidad de numeros a guardar"));
//     for (let i = 0; i < numero; i++){
//     let dato =prompt("Ingrese el numero" + (i + 1) + ":")
//     numeros.push(dato)
// }
// for (let i = 0; i < numero; i++) {
//     console.log(numeros[i]);
    
// }

//////////////////
//SEGUNDO CODIGO//
//////////////////

// function ejercicio3 (){
//     let respuesta;
//     const array_3=[];
//     for (let i = 0; i <=9; i++) {
//     respuesta = parseInt(prompt("Ingrese un numero."));
//     array_3.push(respuesta);
//     }
//     return array_3;
// }
// function mostrar_3(pepe){

//     console.log(pepe);
// }

// var resultado = ejercicio3();
// mostrar_3(resultado);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////EJERCICIO 4 INGRESAR 8 NUM Y IMPRIMIRLOS/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function guardarNum() {
//     var numeros = [];
//     let numeroo = 9;
//     for (var i = 0; i <= numeroo; i++) {
//       var numero = parseInt(prompt("Ingrese el número: " + (i+1) + ":"));
//       numeros.push(numero);
//     }
    
//     return numeros;
//   }
  
//   function mostrarNumeros(array) {

//     for (var i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   }
  
//   var arrayNum = guardarNum();
//   mostrarNumeros(arrayNum);

//////////////////
//SEGUNDO CODIGO//
//////////////////

// function ejercicio4 (){
//     let respuesta;
//     const array_4=[];
//     for (let i = 0; i <=7; i++) {
//     respuesta = parseInt(prompt("Ingrese un numero."));
//     array_4.push(respuesta);
//     }
//     return array;
// }
// function mostrar_4(mostrar){
//     for (let i = 0; i <=7; i++){
//         if(mostrar[i] % 3 == 0){
//             alert(mostrar[i] +": Es multiplo de 3" );
//         }else{
//             alert(mostrar[i] +": No es multiplo de 3: ");
//         }
//     }
//     console.log(mostrar);
// }

// var resultado = ejercicio4();
// mostrar_4(resultado);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////EJERCICIO 5 INGRESAR NOMBRE CON SU EDAD E IMPRIMIR MAYORES////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// almacenar en un array nombre y edad por teclado
// funcion que imprima el nombre y la edad de los mayores a 18

// function ejercicio_5_agregar (){
//     let nombre;
//     let edad;
//     const usuarios_5=[];    // array
//     for (let i = 0; i <=1; i++) {
//     nombre = String(prompt("Ingrese un nombre."));
//     usuarios_5.push(nombre);
//     edad = parseInt(prompt("Ingrese un edad."));
//     usuarios_5.push(edad);
    
//     // array = ["J",18];
//              // 0   1
//     }
//     return usuarios_5;
// }


//  function ejercicio_5_imprimir(usuarios_5){

//     var limite;
//     limite = usuarios_5.length; // saber que cantidad de items tiene el array
//     var nombres=[];
//     var edad=[];
    
//     for (let i = 0; i < limite; i++) {
//        if (typeof usuarios_5[i] === "string"){
//         nombres.push(usuarios_5[i]);
//        }else{
//         edad.push(usuarios_5[i]);
//        }
//     }
//     limite_edad = edad.length;    
//     for (let i = 0; i < limite_edad; i++){    
//     if(edad[i] >= 18){
//         var respuesta = console.log (nombres[i] + " Tiene la edad de: " + edad[i] + " y es mayor de edad." ); 
//         }
//     }
//     return respuesta;
//  }


// const usuarios_5 = ejercicio_5_agregar();
// ejercicio_5_imprimir(usuarios_5);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////EJERCICIO 6 INGRESAR NOMBRE Y 3 NOTAS LUEGO SACAR PROMEDIO E IMPRIMIR///////////////////////////////////////////////////
//////////////////////FALTA VERIFICACION DE 3.5 PARA MOSTRAR APROBADO ///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var estudiante;
// var nota_1;
// var nota_2;
// var nota_3;
// var promedio = [];
// var promedio_final;
// var resultado;
// function Promedio(myArray) {
//     var i = 0, summ = 0, ArrayLen = myArray.length;
//     while (i < ArrayLen) {
//         summ = summ + myArray[i++];
// }
//     return console.log(summ / ArrayLen);
// }

// function verificar(valor){
    
//     if (valor >= 3.5){
//         resultado = console.log("El estudiante: "+ estudiante + " Aprobo con una nota de: "+ valor);
//     }else{
//         resultado = console.log("El estudiante: "+ estudiante + " Reprobo con una nota de: "+ valor);
//     }
//     return resultado;
// }


// estudiante = String(prompt("Ingrese el nombre del estudiante: "));
// nota_1 = parseInt(prompt("Ingrese nota 1: (escala del 1 al 5) "));
// promedio.push(nota_1);
// nota_2 = parseInt(prompt("Ingrese nota 2: (escala del 1 al 5) "));
// promedio.push(nota_2);
// nota_3 = parseInt(prompt("Ingrese nota 3: (escala del 1 al 5) "));
// promedio.push(nota_3);


// promedio_final = Promedio(promedio);
// console.log(promedio_final);
// verificar(promedio_final);

//////////////////
//SEGUNDO CODIGO//
//////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////EJERCICIO 7 HALLAR AREA DE FIGURAS GEOMETRICAS////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var respuesta_usuario = parseInt(prompt("Elegir que desea realizar \n 1.hallar el área de un cuadrado \n 2.hallar el área de un triángulo \n 3.hallar el área de una circunferencia."));
// //El switch es como un selec y el case es la option
// switch (respuesta_usuario){
//     case 1:
//         area_cuadrado();
//         break;
//     case 2:
//         area_triangulo();
//         break;
//     case 3:
//         area_circunferencia();
//         break ;
// }
// //1.hallar el área de un cuadrado
// function area_cuadrado (area_cuadrado){
//     var lado =parseInt(prompt("Ingrese el lado del cuadrado"));
//     //Área = Lado * Lado
//     var resultado = lado * lado ;
//     // mostrar resultado
//     return console.log("El area del cuadrado es = ", resultado);
// }
// //2.hallar el área de un triángulo
// function area_triangulo (area_triangulo){
//     var base =parseInt(prompt("Ingrese la base del triangulo"));
//     var altura =parseInt(prompt("Ingrese la altura del triangulo"))
//     //Área = (Base * Altura) / 2
//     var resultado = (base * altura) / 2
//     // mostrar resultado
//     return console.log("El area es = ", resultado);
// }
// //3.hallar el área de una circunferencia.
// function area_circunferencia (area_circunferencia){
//     var radio =parseInt(prompt("Ingrese el radio de la circunferencia"));
//     //Área = π * radio²
//     radio = Math.pow(radio,2);
//     var resultado = Math.PI * radio;
//     //mostrar resultado
//     return console.log("El area de la circunferencia es = ", resultado);
// }

// function numeroMayor() {
//     var numero1 = parseFloat(prompt("Ingresa el primer número:"));
//     var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
//     var numero3 = parseFloat(prompt("Ingresa el tercer número:"));
  
//     if (numero1 === numero2 && numero2 === numero3) {
//       return console.log("Son iguales");
//     } else {
//       var mayor = Math.max(numero1, numero2, numero3);
//       return console.log(mayor);
//     }
//   }
// numeroMayor();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////EJERCICIO 9 DIGITAR 3 NUMEROS Y IMPRIMIR SI SON IGUALES Y SI NO IMPRIMIR EL MAYOR//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
