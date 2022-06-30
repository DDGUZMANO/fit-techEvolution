let fatBurner = document.getElementById("fatBurner");
let price = document.getElementById("price");
let FatBurnerParagraph = document.createElement("p");
FatBurnerParagraph.innerText = "Fat Burner.";
fatBurner.append(FatBurnerParagraph);

fatBurner.onmouseover = () =>{
    price.innerText = `Su precio es :${suplementos[2].precio}`;
}

let massGain = document.getElementById("massGain");
let massGainParagraph = document.createElement("p");
massGainParagraph.innerText = 'Mass Gainer.';
massGain.append(massGainParagraph);

massGain.onmouseover = () =>{
    price.innerText = `Su precio es :${suplementos[1].precio}`;
}

let wheyProtein = document.getElementById("wheyProtein");
let wheyProteinparagraph = document.createElement("p");
wheyProteinparagraph.innerText = "Whey Protein";
wheyProtein.append(wheyProteinparagraph);

wheyProtein.onmouseover = () =>{
    price.innerText = `Su precio es :${suplementos[0].precio}`;
}


const suplementos = [
    { codigo: 101, producto: 'WHEY PROTEIN MAX', precio: '$25'},
    { codigo: 202, producto: 'MASS GAIN PRO', precio: '$20'},
    { codigo: 303, producto: 'FAT BURNER PREMIUM', precio: '$35'}
];






// const suplemento = ["wheyprotein" , "massgain" , "fatburner" , "prework"];

// for (let i = 0 ; i < suplementos.length; i++){
//     console.log(suplementos[i]);
// }

// suplementos.push({ codigo: 004, producto: 'creatine', precio: '$55'});

// console.log(suplementos);
// // console.log(suplementos.join ('-') );

// for (const suplemento of suplementos){
//     console.log(suplemento);
// };


// alert('Hola, acá le ayudaremos a controlar su peso');

// let nombre = prompt('Ingrese su nombre por favor');



// let peso = +prompt(`Hola ${nombre}, Ingresa tu peso en kilogramos por favor.`);

// let estatura = +prompt(`${nombre} ingresa tu estatura en metros por favor.`)
// let indice;
// function imc(peso,estatura){
//     return imc = (peso / (estatura*estatura));
// }
// // let peso = +prompt('Ingrese su peso en kilogramos por favor.');
// // let estatura = +prompt('Ingrese su estatura en metros por favor.');
// indice = imc(peso, estatura);
// alert('Su indice de masa corporal es '+ indice + '.');
// if(indice<18.5){
//     alert('Usted esta bajo de peso.');
// }
// else if(indice>= 18.5 && indice <= 24.9){
//     alert(`Usted tiene un indice de masa corporal normal, le recomendamos probar nuestro poducto ${suplementos[0].producto}, de esta manera podrá fortalecer y tonificar su musculatura de una manera más eficiente. Este producto tiene un costo de USD ${suplementos[0].precio} y lo podrás encontrar en nuestra web con el código ${suplementos[0].codigo}.`);
// }
// else if(indice>= 25 && indice<= 29.9){
//     alert('Usted tiene sobrepeso.');
// }else{
//     alert('Usted sufre de obesidad.');
// }
// if(indice>= 25){
//     alert(`Le recomendamos probar nuestro poducto ${suplementos[2].producto}, de esta manera obtendrás los siguientes resultados...`)
// }
// if(indice <= 18.5){
//     alert(`le recomendamos tomar nuestro producto ${suplementos[1].producto}, de esta forma obtendrás los siguientes resultados...`)
// }
// let pesoInicial = peso;
// let porcentajeDePeso;

// if(indice <= 18.5){
//     for(let i = 1 ; i <= 8 ; i++){
//     porcentajeDePeso = pesoInicial + (pesoInicial * 0.015*i);
//     alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg.");
// }
// }
// if(indice <= 18.5){
//     alert(`Este producto tiene un costo de ${suplementos[1].precio} y lo podrás encontrar en nuestra web con el código ${suplementos[1].codigo}.`)
// }

// if(indice >25 ){
//     for(let i = 1 ; i <= 8 ; i++){
//     porcentajeDePeso = pesoInicial - (pesoInicial * 0.015*i);
//     alert("Luego de la semana " + i + ", su peso será " + porcentajeDePeso + "Kg.");
// }
// }
// if(indice >25 ){
//     alert(`Este producto tiene un costo de ${suplementos[2].precio} y lo podrás encontrar en nuestra web con el código ${suplementos[2].codigo}.`)
// }
// if(indice > 18.5 && indice <= 24.9){
//     alert('Su peso es ideal, acá encontraras los mejores tips para seguir evolucionando.');
// }


