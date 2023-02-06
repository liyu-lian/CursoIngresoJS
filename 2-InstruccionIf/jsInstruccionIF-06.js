function mostrar()
{
	//tomo la edad  
	var Edad;
	Edad = document.getElementById('txtIdEdad').value;
	Edad = parseInt(Edad);

	if(Edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else{
		if(Edad >= 13 && Edad <= 17)
		{
			alert("Usted es adolescente");
		}
		else
		{
			alert("Usted un niño.");
		}
	}
}//FIN DE LA FUNCIÓN
