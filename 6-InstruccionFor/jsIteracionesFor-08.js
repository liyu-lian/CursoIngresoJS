/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
	var numero;
	var i;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);
	
	for(i = 2; i<= numero; i++)
	{
		if(numero % i === 0)
		{
			alert("El numero no es primo");
		}
		else
		{
			alert("El numero es primo");
		}

		break;
	}

}//FIN DE LA FUNCIÓN