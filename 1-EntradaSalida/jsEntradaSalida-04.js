/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	var Nombre = prompt(" Ingrese su Nombre: ");

	prompt = document.getElementById('txtIdNombre').value;
	
	alert(Nombre);
}

