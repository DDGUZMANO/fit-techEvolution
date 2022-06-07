let indice;
function imc(peso,estatura){
    return imc = (peso / (estatura*estatura));
}
let peso = +prompt('Ingrese su peso en kilogramos por favor.');
let estatura = +prompt('Ingrese su estatura en metros por favor.');
indice = imc(peso, estatura);
alert('Su indice de masa corporal es '+ indice + '.');
if(indice<18.5){
    alert('Usted esta bajo de peso.');
}
else if(indice>= 18.5 && indice <= 24.9){
    alert('Su peso es normal.');
}
else if(indice>= 25 && indice<= 29.9){
    alert('Usted tiene sobrepeso.');
}else{
    alert('Usted sufre de obesidad.');
}
if(indice>= 25){
    alert('Le recomendamos seguir nuestros planes alimenticios y de entrenamientos, de esa forma obtendrá los siguientes resultados por semana...')
}
if(indice <= 18.5){
    alert('Le recomendamos seguir nuestros planes de alimentación y entrenamientos para que alcance su peso ideal de la forma más saludable posible.')
}
let pesoInicial = peso;
let porcentajeDePeso;

if(indice <= 18.5){
    for(let i = 1 ; i <= 8 ; i++){
    porcentajeDePeso = pesoInicial + (pesoInicial * 0.015*i);
    alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg.");
}
}

if(indice >25 ){
    for(let i = 1 ; i <= 8 ; i++){
    porcentajeDePeso = pesoInicial - (pesoInicial * 0.015*i);
    alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg.");
}
}
if(indice > 18.5 && indice <= 24.9){
    alert('Su peso es ideal, acá encontraras los mejores tips para seguir evolucionando.');
}

// let nombre = prompt("Dime tu nombre");
// alert("Bienvenido "+ nombre);

// greeting = "hi!";

// ask = "how are you?";

// frase = greeting + " " + ask;

// frase = `soy ${nombre} y estudio desarrollo web`;

// document.write(frase);


// let precio = prompt("Ingrese precio");

// if (precio < 500) {
//     alert("el precio es menor a 500");
// }
// else if ((precio >= 500) && (precio < 1000)) {
//     alert("el precio está entre 500 y 1000");
// }
// else if ((precio >= 1000) && (precio < 1500)) {
//     alert("el precio está entre 1000 y 1500");
// }
// else if(precio == 1500) {
//     alert("el precio es igual a 1500");
// }
// else{
//     alert("el precio es mayor a 1500");
// }

// ejemplo de ciclo for

// let ingresarNumero = parseInt(prompt("Ingrese un número por favor"));

// for ( let i = 1 ; i <= 10 ; i++ ){
//     let resultado = ingresarNumero * i ;
//     console.log( ingresarNumero + " x "+ i + " = " + resultado) ;
// }

//ejemplo de ciclo for con acumulador. cajero automatico

// let plataEnBanco = 0;
// let numeroDeTransacciones = +prompt("Cuantas operaciones desea hacer?");
// let monto;
// let tipoDeTransaccion;

// for(let i = 1 ; i <= numeroDeTransacciones ; i++){
//     tipoDeTransaccion = prompt("Que tipo de transaccion desea hacer? depositar o retirar");

//     if(tipoDeTransaccion !== "depositar" && tipoDeTransaccion !== "retirar"){
//         alert("tipo de transacción no valida, por favor escriba depositar si quiere sumar saldo a su cuenta o retirar si desea restar saldo.");
//         break
//     }
//     monto = +prompt("Indique el Monto:");

//     if(tipoDeTransaccion === "depositar"){
//         plataEnBanco = plataEnBanco + monto;
//     }
//     if(tipoDeTransaccion === "retirar"){
//         plataEnBanco = plataEnBanco - monto;
//     }
//     alert("Su saldo es: " + plataEnBanco)
// }

// alert("Su saldo final es: " + plataEnBanco)

// alert("Con el plan de entrenamiento de fit-tech podrás perder peso de la forma más eficiente en solo 4 semanas");

// let pesoInicial = +prompt("Indique cuantos kilos pesa y presione aceptar");
// let porcentajeDePeso;

// for(let i = 1 ; i <= 4 ; i++){
//     porcentajeDePeso = pesoInicial - (pesoInicial * 0.015*i);
//     alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg");
// }
// function saludar(){
//     document.write('Hola, soy una función');
// }
// saludar();

// function tablaDelUno(){
//     for (let i = 0; i <= 10; i++){
//         console.log("1x" + i + "=" + 1*i);
//     };
// };

// for( let j = 0; j <3 ; j++){

// tablaDelUno();

// }
// function tablaDeMultiplicar(tabla , hasta){
//     for(i = 1 ; i <= hasta; i++ ){
//     alert(tabla + "x" + i + "=" + tabla*i);
// }
// }

// tablaDeMultiplicar(+prompt("Qué número de tabla desea ver?"),+prompt("hasta qué número desea ver su tabla?"));
// tablaDeMultiplicar(5,10);
// sumar(2,6);
// function sumar (x,y=1){
//     console.log('x='+x);
//     console.log('y='+y);
//     let total = x+y;
//     console.log (total);
// }

// sumar (4,3);

// let respuesta;

// function hola (nombre){
//     return 'Bienvenido '+ nombre;
// };

// let respuesta = hola(prompt('Escriba su nombre'));
// alert(respuesta);

// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const iva = x => x*0.21;
// let precioDelProducto = +prompt('Cual es el precio del producto?');
// let descuento = 50;




// let nuevoPrecio = resta(suma(precioDelProducto,iva(precioDelProducto)),descuento)
// alert(nuevoPrecio);
