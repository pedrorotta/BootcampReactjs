let Cursos = ["Matemática", "Cálculo", "Dibujo técnico"];

function generarContenido(){
 let raiz = "<ul>";
 let cola = "</ul>";
 let content_list = "";
 for (let curso of Cursos){
  text = "<li>" + curso + "</li>"; 
  content_list = content_list + text;
  console.log(content_list);
 };
 let content = raiz + content_list + cola;
 console.log(content);
 return content
}

function actualizar(){
 let contenido = generarContenido();
 let DivContendor = document.getElementById("contenedor");
 DivContendor.innerHTML = contenido;
}