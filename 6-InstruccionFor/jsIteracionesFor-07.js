function mostrar()
{
	/*al presionar el botón pedir un número. mostrar los numeros 
	divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros
	divisores encontrados.*/
	
	debugger

	var i;
	var numero;
	var cantidad = 0;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);

	for(i = 0; i <= numero; i++)
	{
		if( numero % i === 0)
		{
			cantidad++;
		}
	}

	alert("Se encontró "+cantidad+" divisor/es.");


}//FIN DE LA FUNCIÓN