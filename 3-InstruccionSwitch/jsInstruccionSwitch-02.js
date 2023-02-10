function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var verano;
	var invierno;
	var otoño;
	var primavera;

	verano = "Es verano";
	invierno = "Es invierno";
	primavera = "Es primavera";
	otoño = "Es otoño";

	switch(mesDelAño)
	{
		case 'Diciembre':
		case 'Enero':
		case 'Febrero':
			mesDelAño = verano;
			break;
		case 'Marzo':
		case 'Abril':
		case 'Mayo':
			mesDelAño = otoño;
			break;
		case 'Junio':
		case 'Julio':
		case 'Agosto':
			mesDelAño = invierno;
			break;
		case 'Septiembre':
		case 'Octubre':
		case 'Noviembre':
			mesDelAño = primavera;
			break;
			
	}

	alert(mesDelAño);


}//FIN DE LA FUNCIÓN