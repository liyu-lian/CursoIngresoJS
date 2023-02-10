function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var febrero;
	var otros;

	febrero = "Este mes no tiene más de 29 días";
	otros = " Este mes tiene 30 o más días"
	
	switch(mesDelAño)
	{
		case 'Febrero':
			mesDelAño = febrero;
			break;
		default:
			mesDelAño = otros;
	}
	
	alert(mesDelAño);

}//FIN DE LA FUNCIÓN