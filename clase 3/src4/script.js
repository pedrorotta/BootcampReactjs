function verificaredad(){
 let edad = document.getElementById("edad").value;
 if(edad < 18){
  alert("Aún no debes votar");
 }
 else if (edad>=18 && edad<=65){
  alert("Debes votar");
 }else {
  alert("No es obligatorio que votes");
 }
}


let mensaje = " Elige entre 'rojo', 'verde' y 'amarillo' y recibirás una sorpresa"

function decidir(){
 let decision = prompt(mensaje);
 let DivIdColor = document.getElementById("MostrarColor");
 switch(decision){
  case "rojo":
   DivIdColor.style.backgroundColor = "red";
   break;
  case "verde":
   DivIdColor.style.backgroundColor = "green";
   break;
  case "amarillo":
   DivIdColor.style.backgroundColor = "yellow";
   break;
  default:
   DivIdColor.style.backgroundColor = "blue";
 }
}


//*************************************


var array_nombres  = ["Vincenzo", "Yanira", "Vicente", "Valeria", "Sebastián", "Randy", "Pedro", "Lourdes", "Isabel", "Duber"];

function cargarvalores(){
 let DivColection = document.getElementById("colectiondiv");
 DivColection.innerHTML = array_nombres;
 console.log(array_nombres);
}

function AgregarValor(){
  let DivColection = document.getElementById("colectiondiv");
  let elemento_nuevo = document.getElementById("nombreagregado").value;  
  array_nombres[array_nombres.length] = elemento_nuevo;
  console.log(array_nombres);
  DivColection.innerHTML = array_nombres;
};




























