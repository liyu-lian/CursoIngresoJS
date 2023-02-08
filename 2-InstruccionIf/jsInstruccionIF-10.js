function mostrar()
{
	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/

	var nota_examen = Math.floor(Math.random()*11);

	if(nota_examen == 9 || nota_examen == 10)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota_examen > 4)
		{
			alert("APROBÓ");
		}
		else
		{
			if(nota_examen < 4)
			{
				alert("Vamos que la próxima se mejora");
			}
		}
	}
	
}//FIN DE LA FUNCIÓN