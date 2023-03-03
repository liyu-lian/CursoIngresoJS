/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
function comenzar()
{	
  debugger
  var numeroSecreto;
  var numeroingresado;
  var contadorIntentos;

  contadorIntentos = 0;
  numeroingresado = document.getElementById('txtIdNumero').value;

  numeroSecreto =  math.floor(math.random()*100);

 if(numeroingresado != 0)
 {
  contadorIntentos++;
 }

}

function verificar()
{
  if(numeroingresado == numeroSecreto)
  {
    alert("Usted es un ganador!! y en solo "+contadorIntentos+" intentos.");
  }
  else
  {
    if(numeroingresado > numeroSecreto)
    {
      alert("Se pasó, mi loco");
    }
    else
    {
      alert("Está acerca, mi loco");
    }
  }
}