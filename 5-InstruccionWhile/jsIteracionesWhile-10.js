/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	debugger
	var respuesta = 'si';
	var numeroingresado;
	var negativos = 0;
	var positivos = 0;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var ceros = 0;
	var par = 0;
	var promedionegativos = 0;
	var promediopositivos = 0;
	var diferencia;

	do{
		
		numeroingresado = prompt(" Ingrese un numero: ");
		numeroingresado = parseInt(numeroingresado);

		if(numeroingresado < 0)
		{
			sumaNegativos += numeroingresado;
			negativos++;
		}
		else
		{
			if(numeroingresado > 0)
			{
				sumaPositivos += numeroingresado;
				positivos++;
			}
			else
			{
				ceros++;
			}
		}

		if(numeroingresado % 2 == 0)
		{
			par++;
		}

		respuesta = prompt("¿Desea seguir? ");
	}while(respuesta == 'si')

	promedionegativos = (sumaNegativos)/negativos;
	promediopositivos = (sumaPositivos)/positivos;
	diferencia = positivos - negativos;
	document.write("<p>la suma de negativos es :</p>"+sumaNegativos);
	document.write("<p>la suma de positivos es :</p>"+sumaPositivos);
	document.write("<p>Cantidad de negativos: </p>"+negativos);
	document.write("<p>Catidad de positivos: </p>"+positivos);
	document.write("<p>Cantidad de ceros: </p>"+ceros);
	document.write("<p>Cantidad de numeros pares: </p>"+par);
	document.write("<p>Promedio negativos: </p>"+promedionegativos);
	document.write("<p>Promedio positivos: </p>"+promediopositivos);
	document.write("<p>Diferencia entre positivos y negativos: </p>"+diferencia);

	document.close();
}//FIN DE LA FUNCIÓN