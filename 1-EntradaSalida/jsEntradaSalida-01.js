/*Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos 
adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.*/


function mostrar()
{
	debugger
   let respuesta;
   let nombre_mascota;
   let edad;
   let tipo;
   let peso;
   let diagnostico;
   let vacuna;
   let mascota_vieja //= Number.NEGATIVE_INFINITY;
   let nombre_vieja;
   let flagmascota_vieja;
   let contadorsin_vacuna;
   let contadorconparasitos;
   let contadorproblemas_digestivosgato;
   let contadorproblemas_digestivosperro;
   let contadorproblemas_digestivoshamster;
   let contadormas_problemasdigestivos;
   let razamasproblemasdigestivos;
   let flagmasproblemasdigestivos;

	contadorproblemas_digestivosgato = 0;
	contadorproblemas_digestivosperro = 0;
	contadorproblemas_digestivoshamster = 0;
	contadormas_problemasdigestivos = 0;
	contadorsin_vacuna = 0;
	contadorconparasitos = 0;
	flagmasproblemasdigestivos = false;
   flagmascota_vieja = false;
   
    do{

        do{
            nombre_mascota = prompt("Ingrese el nombre de su mascota: ").toLowerCase();
        }while(!isNaN(nombre_mascota)); //Condición contraria

        do{

            edad = prompt("Ingrese la edad de su mascota: ");
			edad = parseInt(edad);

        }while(isNaN(edad) || (edad <0 || edad > 20));

        do{
            tipo = prompt("Ingrese el tipo de mascota: ").toLowerCase();
           }while(!isNaN(tipo) || (tipo != 'gato' && tipo != 'perro' && tipo!= 'hamster')) //se va a repetir
           // && = "y" || = "o"  != --> "distinto" == --> "Igual"

        do{
            peso = prompt("Ingreser el peso de su animal: ");
        }while(isNaN(peso) || peso < 0);

        do{
            diagnostico = prompt("Ingrese el diagnostico de su mascota: ").toLowerCase(); 
        }while(!isNaN(diagnostico ) || diagnostico != 'problema digestivo' && diagnostico != 'otitis' && diagnostico!= 'alergias en la piel' && diagnostico != 'parasitos' && diagnostico != 'picazon de abeja')

        do{
            vacuna = prompt("¿Su animal tiene la vacuna antirrabica? ").toLowerCase();
        }while(!isNaN(vacuna) || (vacuna != 'si' && vacuna != 'no'));
    
		/*if(edad > mascota_vieja)
		{
			mascota_vieja = edad;
			nombre_vieja = nombre_mascota;
		}*/

		if(flagmascota_vieja == false)
		{
			flagmascota_vieja = true;
			mascota_vieja = edad;
			nombre_vieja = nombre_mascota;
		}
		else
		{
			if(edad > mascota_vieja)
			{
				mascota_vieja = edad;
				nombre_vieja = nombre_mascota; 
			}
		}

		switch(vacuna)
		{
			case 'no':
				contadorsin_vacuna++;
				break;
		}

		switch(diagnostico)
		{
			case 'parasitos':
				contadorconparasitos++;
				break;
			case 'problemas digestivos':
				switch(tipo)
				{
					case 'gato':
						contadorproblemas_digestivosgato++;
						break;
					case 'perro':
						contadorproblemas_digestivosperro++;
						break;
					case'hamster':
						contadorproblemas_digestivoshamster++;
						break;
				}
				break;
		}

		if(flagmasproblemasdigestivos = false)
		{
			flagmasproblemasdigestivos = true;
			razamasproblemasdigestivos = tipo;
			
		}
		else
		{
			
		}

    }while(respuesta = confirm("Desea continuar ingresando datos? "));

	document.write("La mascota más vieja es: "+nombre_vieja);
	document.write("Hay "+contadorsin_vacuna+"animales sin vacuna y "+contadorconparasitos+" con parasitos.");
	document.write("");

}

