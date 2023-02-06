/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
function mostrar()
{	
	var nombre = txtIdNombre.value;
	var edad = txtIdEdad.value;

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;

	alert("Usted se llama "+nombre+" y tiene "+edad);
}*/


/*Se debe ingresar por prompt: razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades se ingresarán por id. 
Mostrar por alert todos los datos ingresados y el cuit de la empresa, sabiendo que el mismo está conformado 
por un código numérico según el tipo de persona (30 en el caso de empresas), un guión, el dni del titular, 
otro guión y un dígito verificador (será un número aleatorio entre 0 y 9).
Por ejemplo: 30-22666548-7
*/

function mostrar()
{
	var razon;
	var nombre_titular;
	var dni;
	var fecha_ini;
	var mensaje;

	dni = document.getElementById('txtIdNombre').value;
	fecha_ini = document.getElementById('txtIdEdad').value;

	razon = prompt("Ingrese la razón social de la empresa: ");
	nombre_titular = prompt("Ingrese el nombre del titular: ");

	mensaje = "Razón social: "+razon+"	";
	mensaje = mensaje+"	"+" Nombre del titular: " +nombre_titular+"	";
	mensaje = mensaje +"	"+ " DNI: "+dni+"	";
	mensaje = mensaje +"	"+ " Fecha de inicio: "+fecha_ini+"	";
	mensaje = mensaje +"	"+ " CUIT: 30-"+dni+"-7"+"	";

	alert(mensaje);
}
