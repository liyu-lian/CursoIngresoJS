function mostrar()
{
	var estacionIngresada;
	var destino;
	var mensaje;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	
	switch(estacionIngresada)
	{
		case 'Invierno':
			switch(destino)
			{
				case 'Bariloche':
					mensaje = "Se viaja";
					break;
				case 'Cataratas':
				case 'Mar del plata':
				case 'Cordoba':
					mensaje = "No se viaja";
					break;
			}
			break;
		case 'Verano':
			switch(destino)
			{
				case 'Cataratas':
				case 'Mar del plata':
					mensaje = "Se viaja";
					break;
				case 'Bariloche':
				case 'Cordoba':
					mensaje = "No se viaja";
					break;
			}
			break;
		case 'Otoño':
			switch(destino)
			{
				case 'Cataratas':
				case 'Mar del plata':
				case 'Bariloche':
				case 'Cordoba':
					mensaje = "Se viaja";
					break;
			}
			break;
		case 'Primavera':
			switch(destino)
			{
				case 'Bariloche':
					mensaje = "Se viaja";
					break;
				case 'Cordoba':
				case 'Cataratas':
				case 'Mar del plata':
					mensaje = "No se viaja";
					break;
			}
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN