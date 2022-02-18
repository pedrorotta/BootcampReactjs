// Crear un objeto con los datos de una persona e imprimir estos datos en la consola. 

function createobject(){

 const person = {
  name : document.getElementById("name").value,
  last_name : document.getElementById("lastname").value,
  printNames: function(){
   console.log(this.name + " " + this.last_name)
  }
 };
 return person;
}

function save(){
 userdata = createobject();
 userdata.printNames();
}

