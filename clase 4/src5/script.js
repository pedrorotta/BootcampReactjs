//Definir con función Flecha, el salario de una persona,según sus días trabajados. 


let MultiplyDays = (x) => x*50; 



let SalaryCalculate = () =>{
 let workdays = Number(document.querySelector("#workdays").value);
 let Salario = MultiplyDays(workdays);
 let DivRespuesta = document.querySelector('#Respuesta');
 DivRespuesta.innerHTML = "<p>" + Salario + "</p>";

}


