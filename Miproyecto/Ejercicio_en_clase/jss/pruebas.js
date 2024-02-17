const pi = 3.141516;

alert("Mi primer script con JavaScript");

var a = 3;
var b = 6.5;
var c = 5;

var r = a + b;

var formatoEntero = 3456;
var formatoFlotante = 3456.8765;
var formatoHexadecimal = 0x0;
var formatoOctal = 123456;

var falso = false;
var verdadero = true;

var diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "viernes"];

var apellidoPersona = "\t\"Buitrago\"";
var direccionPersona = "calle 420";

console.log("El resultado de la suma es "+ r);

var nombre = "Jose Ruperto";

console.log("El nombre del man es " + nombre);

console.log("numero pi es " + pi);

console.log("El nombre del paciente "+ nombre+ ""+ apellidoPersona);

console.log("El valor de falso es\n" + falso + "\nEl valor de verdadero es\n"+ verdadero);

console.log("Los Dias de la semana son:\n"+ diasSemana);

var miCarro = {
    placa: "LSQ-765",
    modelo: "2024",
    marca: "Renault"
}

console.log("La marca de mi carro es\n" + miCarro.marca);
console.log("La marca de mi carro es\n" + miCarro.placa + "\nEl modelo es\n" + miCarro.placa + "\nEl mododelo de mi carro es\n"+ miCarro.modelo);

if(pi > a){
    console.log("Pi es mayor que a");
}
else{
    console.log("A es mayor que PI");
}

pi > a ? console.log("PI es mayor que a") : console.log("A es mayor que PI");

if(a > b){
    console.log("A es > B");
}
else if(a > c){
    console.log("A > C");
}
else if(b > c){
    console.log("B > C");
}
else{
    console.log("C es la mayor a todas");    
}

switch(a){
    case 5:
        console.log("Es sobresaliente");
        break;
    case 4:
        console.log("Es Bueno");
        break;
    case 3:
        console.log("Enfermo");
        break;

    default:("No lo puedo evaluar");
}
a = 0;
while(a < 10){
    console.log("El valor de A en esta iteracion es\t"+ a);
    a++;
}

for(a = 0; a <= 9; a++){
    console.log("El valor de A en esta iteracion es con For\t"+ a);
}

for(i = 0; i < diasSemana.length; i++){
    console.log("El dia en la posicion\t"+ i + "\tes\t" + diasSemana[i]);
}

var i = 0;

while( i < diasSemana.length){
    console.log("\nWhile - El dia de la posicion\t" + i + "\tes\t" + diasSemana[i]);
    i++;
}
