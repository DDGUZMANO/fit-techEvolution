// let indice;
// function imc(peso,estatura){
//     return imc = (peso / (estatura*estatura));
// }
// let peso = +prompt('Ingrese su peso en kilogramos por favor.');
// let estatura = +prompt('Ingrese su estatura en metros por favor.');
// indice = imc(peso, estatura);
// alert('Su indice de masa corporal es '+ indice + '.');
// if(indice<18.5){
//     alert('Usted esta bajo de peso.');
// }
// else if(indice>= 18.5 && indice <= 24.9){
//     alert('Su peso es normal.');
// }
// else if(indice>= 25 && indice<= 29.9){
//     alert('Usted tiene sobrepeso.');
// }else{
//     alert('Usted sufre de obesidad.');
// }
// if(indice>= 25){
//     alert('Le recomendamos seguir nuestros planes alimenticios y de entrenamientos, de esa forma obtendrá los siguientes resultados por semana...')
// }
// if(indice <= 18.5){
//     alert('Le recomendamos seguir nuestros planes de alimentación y entrenamientos para que alcance su peso ideal de la forma más saludable posible.')
// }
// let pesoInicial = peso;
// let porcentajeDePeso;

// if(indice <= 18.5){
//     for(let i = 1 ; i <= 8 ; i++){
//     porcentajeDePeso = pesoInicial + (pesoInicial * 0.015*i);
//     alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg.");
// }
// }

// if(indice >25 ){
//     for(let i = 1 ; i <= 8 ; i++){
//     porcentajeDePeso = pesoInicial - (pesoInicial * 0.015*i);
//     alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg.");
// }
// }
// if(indice > 18.5 && indice <= 24.9){
//     alert('Su peso es ideal, acá encontraras los mejores tips para seguir evolucionando.');
// }

//const suplemento = ["wheyprotein" , "massgain" , "fatburner" , "prework"];
const suplementos = [
    { codigo: 001, producto: 'wheyprotein', precio: '$25'},
    { codigo: 002, producto: 'massgain', precio: '$20'},
    { codigo: 003, producto: 'fatburner', precio: '$35'}
]
for (let i = 0 ; i < suplementos.length; i++){
    console.log(suplementos[i]);
}

suplementos.push({ codigo: 004, producto: 'creatine', precio: '$55'});

console.log(suplementos);
// console.log(suplementos.join ('-') );

for (const suplemento of suplementos){
    console.log(suplemento);
};
