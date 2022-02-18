function getAges(){
 var edades = [];
 let cantidad = prompt("Ingrese la cantidad de edades: ");
 for(i = 0;i<cantidad;i++){
  let edad = prompt("Ingresa la edad: " + (i+1));
  edades[i] = edad;
  console.log(edades);
 };
 return edades; 
}


function mostrar(){
 
 let Edades = getAges();
 let DivVisual = document.getElementById("visual");
 console.log(Edades);
 DivVisual.innerHTML = Edades;

}