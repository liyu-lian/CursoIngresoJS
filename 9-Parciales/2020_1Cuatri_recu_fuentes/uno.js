
function mostrar()
{
	let nombre;
	let repsuesta;

	do{

			nombre = prompt("Ingrese su nombre").toLowerCase();
		do{
			nombre = prompt("Error. Ingrese un nombre, no números: ").toLowerCase();
		}while(!isNaN(nombre))

	}while(respuesta = confirm(" Desea ingresar otro nombre?") )
}
