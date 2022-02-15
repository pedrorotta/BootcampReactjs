//Recibir el elemento (Atrapar el elemento)


let Cabecera = document.getElementById("cabecera");

//console.log(Cabecera);

//console.log(Cabecera.innerHTML);

//Escribe un título h1 dentro de la cabecera. 

//Cambiar el contenido al header.

Cabecera.innerHTML = "<h1>Bienvenido, Welcome</h1>";
//console.log(Cabecera.innerHTML);

//**************************************

//Ejercio 2: que la consola te imprima el hola del div con id = caja

let h1_CajaDiv = document.getElementById("titulo");
//let h1_CajaDiv = CajaDiv.innerHTML; // se tiene que atrapar el elemento cuyo contenido queremos obtener. 
console.log("primera vez de h1" + " " + h1_CajaDiv.innerHTML);
let hola_h1_CajaDiv = h1_CajaDiv.innerHTML;
//Ya no se puede obtener su contenido => Api no lo ha captado. 
//console.log(hola_h1_CajaDiv);

//Ejercio 3: que el contenido del div ahora sea un título que en vez de hola, diga Adios mundo. 

// Primera forma: 


let CajaDiv = document.getElementById("caja");
console.log("primera vez "+ CajaDiv.innerHTML);
/*
CajaDiv.innerHTML = "<h1>Adiós mundo</h1>";
console.log("CajaDiv con el cambio" + CajaDiv.innerHTML);
console.log("segunda vez " + h1_CajaDiv.innerHTML);
console.log(h1_CajaDiv.innerHTML);
//
*/
// Segunda forma
h1_CajaDiv.innerHTML = "Adiós mundo"; //Contenido del 
console.log("segunda vez, pero de la segunda forma del h1_Div " + h1_CajaDiv.innerHTML);
console.log("segunda vez" + CajaDiv.innerHTML);
//*******************************/














//**********************************
//Tipos de variables
//Tipo de variable

let edad = 22; 
let edad_2 = "22";
console.log("edad es un " + typeof(edad));
console.log("edad_2 es un "+ typeof(edad_2));

// Conversión de str a Number

edad_2convertido = Number(edad_2);
console.log("edad_2covertido es un " + typeof(edad_2convertido));

edad_convertidoastr = String(edad);
console.log("edad_convertidoastr es un "+ typeof(edad_convertidoastr));
// Formas de concatenar str con variables. 

console.log(edad_2.concat(" es mi edad"));
console.log(edad_2.concat(" es un str, ", edad, " es un número")); 

console.log(`${edad_2} pertenece a los str, ${edad} es un número`);
alert(edad_2.concat(" es mi edad"));
//let edad3 = prompt("Ingrese su edad: ");
//console.log(typeof(edad3));
//***********************************

//Objetos de JavaScript.  : Datos de una base de datos
const ceviche = {
sabor: "salado y picante", 
puntaje: 20, 
ingredientes: "pescado y limón"
};

const platos_tipicos = {
 ceviche: {
  sabor: "salado y picante", 
  puntaje: 20, 
  ingredientes: "pescado y limón"
 },
 aji_de_gallina : {
  sabor: "dulce", 
  puntaje: 20, 
  ingredientes: "pollo, pan y ají"
 }
}

console.log(ceviche.sabor);
console.log(platos_tipicos.aji_de_gallina.puntaje)

//********************************/

//Objeto Fecha: 

let  fecha_actual = new Date();

let fecha_puntual = new Date(2021,00,24);

console.log(fecha_actual);
console.log(fecha_puntual);

let año_actual = fecha_actual.getFullYear();
console.log(año_actual + " es un valor de tipo " + typeof(año_actual));

// Queremos que se genere una alerta con el valor del año actual. 


//Crear un objeto acerca de peliculas favoritas, 


//Escribir en un Div, la respuesta de una multiplicación, de 2 valores dados por el usuario con prompt. 









