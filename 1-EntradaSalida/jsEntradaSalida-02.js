/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var puntitos;
	var puntito;
	var flagpuntito;
	var i;

	puntito = "*";

	do{

		puntitos = prompt("Ingrese la cantidad de filas: ");
		puntitos = parseInt(puntitos);

	}while(isNaN(puntitos) || puntitos <0)

	for( i=0; i<puntitos ;i++)
	{

		console.log(puntito);
		puntito = puntito + puntito;

		
	}


}	

