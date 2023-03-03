/*Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, 
no se deben pueden ingresar números negativos.*/

function mostrar ()
{
    debugger
    let respuesta = 'si';
    let nombre_jugador;
    let nacionalidad;
    let posicion;
    let tarjetas_rojas;
    let cantidad_goles;
    let flagGoleadorTorneo;
    let goleador_maximo;
    let nombre_goleador_maximo;
    let minimotarjetasrojas;
    let flagprimerargentino;
    let jugadorminimotarjetasrojas;
    let contadorjugadores_ingleses;
    let porcentajejugadoresingleses;
    let contadorjugadoresingresados;
    let mensaje;

    contadorjugadores_ingleses = 0;
    contadorjugadoresingresados = 0;
    flagGoleadorTorneo = false;
    flagprimerargentino = false;


    do{
        do{
            nombre_jugador = prompt("Ingrese el nombre del jugador: ").toLowerCase();
        }while(!isNaN (nombre_jugador))

        do{
            nacionalidad = prompt("ingrese la nacionalidad de "+nombre_jugador).toLowerCase();
        }while(!isNaN(nacionalidad))

        do{
            posicion = prompt("Ingrese la posición de juego de "+nombre_jugador).toLowerCase();
        }while(!isNaN(posicion) && posicion != 'arquero' && posicion != 'defensor' && posicion != 'mediocampista' && posicion != 'delantero')

        do{
            tarjetas_rojas = prompt("¿Cuántas tarjetas rojas recibió el jugador? ");
            tarjetas_rojas = parseInt(tarjetas_rojas);
        }while(isNaN(tarjetas_rojas) && tarjetas_rojas < 0)

        do{
            cantidad_goles = prompt("¿Cuántos goles hizo el jugador? ");
            cantidad_goles = parseInt(cantidad_goles);
        }while(!isNaN(cantidad_goles) && cantidad_goles < 0)
        
        if(flagGoleadorTorneo == false)
        {
            flagGoleadorTorneo = true;
            goleador_maximo = cantidad_goles;
            nombre_goleador_maximo = nombre_jugador;
        }
        else
        {
            if(cantidad_goles > goleador_maximo)
            {
                goleador_maximo = cantidad_goles;
                nombre_goleador_maximo = nombre_jugador;
            }
           
        }

        switch(nacionalidad)
        {
            case 'argentina':
                if(flagprimerargentino == false)
                {
                    flagprimerargentino = true;
                    minimotarjetasrojas = tarjetas_rojas;
                    jugadorminimotarjetasrojas = nombre_jugador;

                }
                else
                {
                    if(minimotarjetasrojas > tarjetas_rojas)
                    {
                        minimotarjetasrojas = tarjetas_rojas;
                        jugadorminimotarjetasrojas = nombre_jugador;
                    }
                }
                break;
            case 'inglesa':

                contadorjugadores_ingleses++;

                break;
        }

        contadorjugadoresingresados++;

        respuesta = prompt("¿Desea ingresar otro jugador? ");
    }while(respuesta == 'si')

    porcentajejugadoresingleses = (contadorjugadores_ingleses * contadorjugadoresingresados)/100;

    mensaje = "\n El mejor goleador del torneo fue "+nombre_goleador_maximo;
    mensaje += "\n El jugador argentino con menos tarjetas rojas es" +jugadorminimotarjetasrojas;
    mensaje += "\n total hay un porcentaje del "+porcentajejugadoresingleses+" de jugadores ingleses";

    alert(mensaje);
}