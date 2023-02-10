function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
			mensaje = "Este mes tiene 31 días";
			break;
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
			mensaje = "Este mes tiene 30 días";
			break;
		default:
			mensaje = "Este mes tiene 28 días";
	}
	
	alert(mensaje);



}//FIN DE LA FUNCIÓN