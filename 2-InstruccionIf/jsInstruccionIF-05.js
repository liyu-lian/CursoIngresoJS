function mostrar()
{
	//tomo la edad  
	var Edad;
	Edad = document.getElementById('txtIdEdad').value;
	Edad = parseInt(Edad);

	if( Edad < 13 || Edad > 17)
	{
		alert("Usted no es un adolescente");
	}
}//FIN DE LA FUNCIÓN