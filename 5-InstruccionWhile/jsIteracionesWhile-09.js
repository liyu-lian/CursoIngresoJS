/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var respuesta = 'si';
	var maximo= 0;
	var minimo= 0;
	var flag = 0;

	do
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		if(flag == 0)
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;

			flag = 1;
		}

		if(numeroIngresado > maximo)
		{
			maximo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado > maximo)
			{
				minimo = numeroIngresado;
			}
		}

		respuesta = prompt("¿Desea seguir?: ");

	}while(respuesta == 'si')

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;

}//FIN DE LA FUNCIÓN