
//Una constante se usa cuando no se desea ni redeclarar, ni reasignar . let en cambio se usa cuando no quiero que se redeclare, pero que sí se reasigne

let nombre = prompt ("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad: ");

const titulo = <h1>Mi nombre es {nombre} y mi edad es {edad}</h1>;


const list = 
<ul>
 <li>Item 1</li>
 <li>Item 2</li>
 <li>Item 3</li>
</ul>;

const root = document.getElementById("root");

ReactDOM.render((titulo),root);

// Ingresen una lista. 



/*
let DivRoot = document.getElementById("root");
let nombre = prompt ("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad: ");

let literal = `<h1>Mi nombre es ${nombre} y mi edad es ${edad}</h1>`;


DivRoot.innerHTML = literal;
*/








