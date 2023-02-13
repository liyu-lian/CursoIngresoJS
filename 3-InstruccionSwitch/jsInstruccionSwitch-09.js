function mostrar()
{
	var estacionIngresada;
	var destino;
	var precio;
	var precio_aumento;
	var precio_descuento;
	var porcentaje;
	var mensaje;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	precio = 15.000;
	precio = parseInt(precio);
	porcentaje = parseInt(porcentaje);

	switch(estacionIngresada)
	{
		case 'Invierno':
			switch(destino)
			{
				case 'Bariloche':
					porcentaje = 20;
					mensaje = "El precio es: " + precio_aumento;
					break;
				case 'Mar del plata':
					porcentaje = 20;
					mensaje = "El precio es: " + precio_descuento;
					break;
				case 'Cataratas':
				case 'Cordoba':
					porcentaje = 10;
					mensaje = "El precio es: " + precio_descuento;
					break;
			}
			break;
		case 'Vernano':
			break;
		case 'Otoño':
			break;
		case 'Primavera':
			break;
	}

	porcentaje = (precio*porcentaje)/100;
	precio_aumento = precio + porcentaje;
	precio_descuento  = precio - porcentaje;
	alert(mensaje);

}//FIN DE LA FUNCIÓN