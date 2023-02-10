function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case 'Mar del plata':
		case 'Usuhaia':
		case 'Bariloche':
			mensaje = "Hace frío";
			break;
		case 'Cataratas':
			mensaje = "Hace calor";
	}
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN