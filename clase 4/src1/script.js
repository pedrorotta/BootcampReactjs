Nombres = ["Vicenzo", "Randy", "Lourdes", "Duber"];


function cargar(){
 let divNombres = document.getElementById("nombres"); 
 divNombres.innerHTML = Nombres;
 console.log("Los nombres a cargar 1era vez son: " + Nombres);
}


function agregar(){
 nombre = document.getElementById("nameatr").value;
 Nombres[Nombres.length] = nombre;
 console.log("Los nombres al agregar son: " + Nombres);
 let divNombres = document.getElementById("nombres");
 divNombres.innerHTML = Nombres;
}
