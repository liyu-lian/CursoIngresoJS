/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//alert("ok");

	let nombre;
	let nombrecompleto;//Notación Lower Camel case: se espera doble dato "Nombre y Apellido"
	//let = Var (Palabra reservad que crea variable)
	/*En Java Script no hace falta identificar el 
	tipo de variable*/

	nombre = prompt("Ingrese Nombre: "); //Prompt funciona como un String (Permite al usuario ingresar un valor)

	//nombre = 'Mario';
	//asignación (=) a la izquierda va la variable
	/*El código debe ser legible*/
	//nombre='Alberto';
	/*Asignación destructiva, pisa la asignación
	anterior*/
	alert(nombre);
}

