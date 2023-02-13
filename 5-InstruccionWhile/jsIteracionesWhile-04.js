/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	
	while(numeroIngresado < 0 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("Error. Su numero no se encuentra entre el 0 y 9");
	}

	document.getElementById('txtIdNumero').value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN