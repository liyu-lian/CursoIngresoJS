function mostrar()
{
	debugger
	var estacionIngresada;
	var destino;
	var precio;
	var precio_aumento;
	var precio_descuento;
	var aumento=0;
	var descuento=0;
	var mensaje;

	estacionIngresada = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	precio = 15000;

	switch(estacionIngresada)
	{
		case 'Invierno':
			if(destino == 'Cataratas' || destino == 'Cordoba')
			{
				descuento = 10;
			}
			else
			{
				if(destino == 'Mar del plata')
				{
					descuento = 20;
				}
				else
				{
					aumento = 20;
				}
			}
			break;
		case 'Verano':
			if(destino == 'Cataratas' || destino == 'Cordoba')
			{
				aumento = 10;
			}
			else
			{
				if(destino == 'Mar del plata')
				{
					aumento = 20;
				}
				else
				{
					descuento = 20;
				}
			}
			break;
		case 'Otoño':
		case 'Primavera':
			if(destino == 'Bariloche')
			{
				aumento = 10;
			}
			else
			{
				if(destino == 'cataratas')
				{
					aumento = 20;
				}
				else
				{
					if(destino == 'Mar del plata')
					{
						aumento = 10;
					}
					else
					{
						descuento = 0;
						mensaje = "El precio es: " +precio;
					}
				}
			}
			break;
			
	}
	
	if(aumento != 0)
	{
		precio_aumento = precio + precio*aumento/100;
		mensaje = "El precio es: " +precio_aumento;
	}
	else
	{
		precio_descuento = precio - precio*descuento/100;
		mensaje = "El precio es: " +precio_descuento;

	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN