class Car{
 constructor(type,color,version){
  this.type = type;
  this.color = color;
  this.version = version;
 }
}

let Suv2022 = new Car('Suv', 'black', 'Full-Equipment');

let playcar = ()=> console.log(Suv2022);


// Creen un constructor para empleados, con clase empleados que contenga: Nombre, Cargo, Años de servicio. 

class employee{
 constructor(name, charge, years){
  this.name = name;
  this.charge = charge;
  this.years = years;
 }
}
//Crear un programa que me permita guardar los valores de varios empleados en un array, desde un formulario de html. 

let employeesArray = []

let genemployee = ()=>{
 let __name = document.getElementById("name").value;
 let __charge= document.getElementById("charge").value;
 let __years = document.getElementById("years").value;
 let __employee = new employee(__name,__charge,__years);
 return __employee;
}

let SaveEmployee = ()=>{
 let localemployee = genemployee();
 employeesArray.push(localemployee);
 console.log(employeesArray);
}



// prueben hacer un carrusel, usando objetos de javascript clases de javascript. 
























