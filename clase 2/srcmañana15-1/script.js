
/*
// Queremos que se genere una alerta con el valor del año actual. 
//conseguir la fecha actual
let Fecha_actual = new Date(); //contructor de objetos 
//conseguir el año
let Año_actual = Fecha_actual.getFullYear();

alert("Estamos en " + Año_actual );

//Crear un objeto acerca de peliculas favoritas, 

const peliculas = {

 interstellar: {

  duracion: "3 horas",
  director: "Cristopher Nolan",
  año_publicacion : 2014,
  cast:{
   MatthewMcConaughey:{
    edad : 42,
    role: "astronauta"
   },
   annehathaway:{
    edad : 38,
    role: "astronauta 2"
   }
  }
 },

 ConocesAJoeBlack:{

  duracion: "3 horas",
  director: "Martin Brest",
  año_publicacion: 1998,
  cast:{
   BradPitt: {
    edad: 58,
    role: "Joe Black"
   },
   AnthonyHopkins:{
    edad : 89,
    role: "William Parrish"
   },
   ClaireForlani: {
    edad : 47,
    role: "Susan Parrish"
   }
  }
 } 
};


//Escribir en un Div, la respuesta de una multiplicación, de 2 valores dados por el usuario con prompt.  

Respuesta = document.getElementById("respuesta");
let x = prompt("Ingrese un valor");
let y = prompt("Ingrese otro valor");
Respuesta.innerHTML = "<h1>" + x*y+ "</h1>";

//---------------------------------------------
*/

function multiply(){
 let multiplicador = 3;
 let multiplicando = Number(prompt("Ingresa el valor para multiplicar: "));
 let resultado = multiplicador*multiplicando;
 console.log("la variable resultado dentro de la función es " + resultado);
 return resultado;
}

//resultado = multiply();

//console.log("el valor de resultado fuera de la función con return es "+ resultado);

//Las variables dentro de una función tienen alcance local, solo aparecen cuando se llama la función. 
//alcance global => Cuando una variable es definida antes de cualquier función 

var salario = 1500; //alcance global 

function aumento(){
 
 salario = salario + 1500;
}

function mostrarsalario(){
 console.log(salario);
}

console.log(salario);

//


