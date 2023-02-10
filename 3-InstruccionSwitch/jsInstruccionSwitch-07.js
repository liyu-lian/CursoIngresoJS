function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	switch(destinoIngresado)
	{
		case 'Ushuaia':
			mensaje = "54°48'39'' S 68°18.955' O";
			break;
		case 'Bariloche':
			mensaje = "41°8'44.1'' S 71°18.493' O";
			break;
		case 'Cataratas':
			mensaje = "25°41'43″S 54°26'12″O";
			break;
		case 'Mar del plata':
			mensaje = "38°00'S 57°33'O";
			break;

	}
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN