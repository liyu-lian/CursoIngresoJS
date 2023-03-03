function mostrar()
{
	var i;

	numeroingresado = prompt("Ingrese un numero: ");
	numeroingresado = parseInt(numeroingresado);

	for(i = 1; i <= numeroingresado;i++)
	{
		if(i % 2 == 0)
		{
			document.write(" "+i+" ");
		}
		
	}


}//FIN DE LA FUNCIÓN