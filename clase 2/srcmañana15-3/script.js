//cuando yo haga click en el botón 
//aparezca la imágen. 



//Local a la función mostrarimagen()


let boton_principal = document.getElementById("button");

function mostrarimagen(){
 let divImagen = document.getElementById("imagen");
 divImagen.style.display = "block";  
 boton_principal.innerHTML = "Ocultar imagen";
}

function ocultarimagen(){
 let divImagen = document.getElementById("imagen");
 divImagen.style.display = "none";
 boton_principal.innerHTML = "Mostrar imagen";
}



//como se podría hacer para que cuando la imagen aparece el botón cambia a ocultar imagen, y cuando se oculta el botón vuelve a cambiar a mostrar imagen
