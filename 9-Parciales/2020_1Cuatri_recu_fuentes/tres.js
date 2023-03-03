/* En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	debugger
	let respuesta;
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estado_civil;
	let temperatura;

	let personamastemperatura;
	let nacionalidadpersonamastemperatura;
	let flagmastemeperatura;

	let mayoressolteros;

	let mujeres_solteras_o_viudas;

	let terceraedad_contemperatura;

	let acumuladorpromedioedad_mujer;
	let mujer;
	let promedioedad;


	flagmastemeperatura = false;

	mayoressolteros = 0;

	mujeres_solteras_o_viudas = 0;

	terceraedad_contemperatura = 0;

	acumuladorpromedioedad_mujer = 0;
	mujer = 0;


	do{

		do{

			nombre = prompt ("Ingrese el nombre del pasajero: ");
	
		}while(!isNaN(nombre));

		do{

			nacionalidad = prompt("Ingrese el nacionalidad del pasajero: ");
	
		}while(!isNaN(nacionalidad));

		do{

			edad = prompt("Ingrese la edad del pasajero: ");
			edad = parseInt(edad);
		
		}while(isNaN(edad) || edad < 0);

		do{

			sexo = prompt("Ingrese el sexo del pasajero: ");
	
		}while( !isNaN(sexo) || sexo != 'f' && sexo != 'm');

		do{

			estado_civil = prompt("Ingrese el estado civil del pasajero: ");
	
		}while(!isNaN(estado_civil) || estado_civil != 'casado' && estado_civil != 'soltero' && estado_civil != 'viudo');

		do{

			temperatura = prompt("Ingrese la temperatura del pasajero: ");
			temperatura = parseInt(temperatura);
		
		}while(isNaN(temperatura) || temperatura < 0);


	}while(respuesta = confirm("¿Desea seguir insertando datos?"));

	if(flagmastemeperatura == false)
	{
		flagmastemeperatura = true;
		personamastemperatura = temperatura;
		nacionalidadpersonamastemperatura = nacionalidad;
	}
	else{
		if(temperatura > personamastemperatura)
		{
			personamastemperatura = temperatura;
			nacionalidadpersonamastemperatura = nacionalidad;
		}
	}
		
	switch(estado_civil)
	{
		case 'soltero':
			if(edad >= 17)
			{
				mayoressolteros++;
			}
			else
			{
				if(sexo == 'f')
				{
					mujeres_solteras_o_viudas++;
				}
			}
			break;
		case 'casado':
			if(sexo == 'f')
			{
				mujer++;

			}
			break;
		case 'viudo':
			if(sexo == 'f')
			{
				mujeres_solteras_o_viudas++;
			}
			break;
	}


	if(edad >= 60)
	{
		if(temperatura >= 38)
		{
			terceraedad++;
		}
	}
	
	acumuladorpromedioedad_mujer = acumuladorpromedioedad_mujer + edad;
	promedioedad = (acumuladorpromedioedad_mujer)/mujer;

	document.write("<br >La nacionalidad de la persona con más temperatura es: </br>"+nacionalidadpersonamastemperatura);
	document.write("<br> En total hay "+mayoressolteros+" mayores de edad solteros. </br>");
	document.write("<br> En total hay "+mayoressolteros+" mujeres solteras o viudas. </br>");
	document.write("<br> En total hay "+mayoressolteros+" personas de tercera edad con una temperatura de más de 38. </br>");
	document.write("<br> El promedio de edad de mujeres casadas es de </br>"+promedioedad);

	document.close();

	
}
