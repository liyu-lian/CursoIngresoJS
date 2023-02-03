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
}//FIN DE LA FUNCIÓN