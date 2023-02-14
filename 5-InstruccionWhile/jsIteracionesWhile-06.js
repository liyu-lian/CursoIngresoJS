function mostrar()
{
	/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

	var contador;
	var acumulador;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	
	while(contador < 5)
	{
	console.log(++contador);

	numeroIngresado = prompt("Ingrese un número: ");
	numeroIngresado = parseInt(numeroIngresado);

	while(isNaN(numeroIngresado)) //validar numeros (Que no sean letras. Ej: "Hola", etc)
	{
		numeroIngresado = prompt("Error. Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);
	}
	
	acumulador = acumulador + numeroIngresado;
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/5;
}//FIN DE LA FUNCIÓN