function mostrar()
{
	var estacionIngresada;
	var destino;
	var precio;
	var mensaje;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	precio = 15000;

	switch(estacionIngresada)
	{
		case 'Invierno':
			switch(destino)
			{
				case 'Bariloche':
					porcentaje = 20;
					mensaje = "El precio es: "+precio;
			}
			
	}
	porcentaje = (precio*)/100;

}//FIN DE LA FUNCIÓN