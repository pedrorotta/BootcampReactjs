function jugar(){
 let respuesta = prompt("Ingrese 'S' si desea jugar: ");
 if (respuesta == "S"){
  let divRespuesta = document.getElementById("Respuesta");
  divRespuesta.innerHTML = "<h1>Bienvenido al Juego</h1>";
 } else{
  alert("Gracias por participar");
 };
};



