//atributos que pueden ser modificados. 

let imagen = document.getElementById("imagen");

let url = "images/imgedi.jpg";

imagen.src = url;
console.log(imagen.innerText)

function sombra(){
 let contenedor = document.getElementById("imagendiv");
 contenedor.style.backgroundImage = "url(" + url + ")";
 contenedor.style.backgroundSize = "100%";
 contenedor.style.backgroundColor = "rgba(255,255,255)";
 contenedor.innerHTML = "<p>" + imagen.alt + "</p>";
}

function sinsombra(){
 let contenedor = document.getElementById("imagendiv");
 contenedor.innerHTML = "";
}




