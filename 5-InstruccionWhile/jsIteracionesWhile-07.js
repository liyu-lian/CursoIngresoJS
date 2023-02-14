/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var respuesta = 'si';

	contador=0;
	acumulador=0;

	while(respuesta == 'si')
	{
		console.log(++contador);

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error. Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
	
		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("Desea seguir ingresando numeros? ");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN