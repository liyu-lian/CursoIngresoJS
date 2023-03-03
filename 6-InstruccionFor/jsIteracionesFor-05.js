function mostrar()
{
	var i;
	var numero;

	for(i = 1 ; i > 0; i++)
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if(numero == 9)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN