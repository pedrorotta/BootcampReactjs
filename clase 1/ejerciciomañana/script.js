let ventana = document.getElementById("Ventana");
//console.log(ventana);
//console.log(ventana.innerHTML);

ventana.innerHTML = "Hola"
ventana.innerHTML = "<h1 class = 'text-light'>Hola<h1/>"

//***************************************************

// traer el objeto para su modificación o su análisis

let objetoDiv = document.getElementById("ObjetoDiv")
objetoDiv.innerHTML = 25;

console.log(objetoDiv);

//***************LA SINTAXIS LITERAL*****************

let Edad = Number(prompt('¿cuál es tu edad?')); //cadenas de texto

//Se solicita emitir una alerta que diga usted tiene 25 años.

//alert("Su edad es de 25 años");

//numeros o cadenas de texto. 
alert(`Tu edad es ${Edad+1}`); //Me permite usar variables dentro de texto. 
alert ('Tu edad es ${Edad}');


