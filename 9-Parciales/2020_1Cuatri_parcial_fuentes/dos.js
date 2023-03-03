
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
  debugger
  let respuesta;
  let tipodeproducto;
  let cantidadebolsas;
  let descuento;
  let precio_bruto;
  let mensaje;
  let acumuladorarena;
  let acumuladorcal;
  let acumuladorcemento;
  let contadorcal;
  let contadorcemento;
  let contadorarena;
  let tipomasbolsas;
  let flagmayorcantidad;
  let flagtipomascaro;
  let mayorcantidaddebolsas;
  let tipomascaro;
  let preciomascaro;

  contadorarena = 0;
  contadorcal = 0;
  contadorcemento = 0;
  acumuladorarena = 0;
  acumuladorcal = 0;
  acumuladorcemento = 0;
  flagmayorcantidad = false;
  flagtipomascaro = false;

  do{
    
    do{

      tipodeproducto = prompt("Ingrese el tipo de producto: ").toLowerCase();

    }while(!isNaN(tipodeproducto) || (tipodeproducto != 'arena' && tipodeproducto != 'cal' && tipodeproducto != 'cemento'));

    do{

      cantidadebolsas = prompt("Ingrese la cantidad de bolsas de producto: ");
      cantidadebolsas = parseInt(cantidadebolsas);

    }while(isNaN(cantidadebolsas) || cantidadebolsas<0);

    do{
        precio = prompt("Ingrese el precio por bolsa: ");
        precio = parseInt(precio);
    }while(isNaN(precio) || precio <0);
    
  }while(respuesta = confirm("¿Desea seguir insertando datos?"));

  switch(tipodeproducto)
  {
    case 'arena':
      contadorarena++;
      acumuladorarena += cantidadebolsas;
      break;
    case 'cal':
      contadorcal++;
      acumuladorcal += cantidadebolsas;
      break;
    case 'cemento':
      contadorcemento++;
      acumuladorcemento += cantidadebolsas;
        break;
  }

  if(cantidadebolsas >= 30)
  {
    descuento = 25;
  }
  else
  {
    if(cantidadebolsas >= 10)
    {
      descuento = 15;
    }
    else
    {
      descuento = 0;
    }
  }


 if(flagmayorcantidad == false)
 {
  flagmayorcantidad = true;
  mayorcantidaddebolsas = cantidadebolsas;
  tipomasbolsas = tipodeproducto; 
  
 }
 else
 {
  if(cantidadebolsas > tipomasbolsas)
  {
    mayorcantidaddebolsas = cantidadebolsas;
    tipomasbolsas = tipodeproducto;
  }
 }

 if(flagtipomascaro == false)
 {
    flagtipomascaro = true;
    preciomascaro = precio;
    tipomascaro = tipodeproducto;
 }
 else
 {
  if(precio>preciomascaro)
  {
    preciomascaro = precio;
    tipomascaro = tipodeproducto;
  }
 }


  precio_bruto = precio * cantidadebolsas;
  descuento = (precio_bruto*descuento)/100;
  descuento = precio_bruto - descuento;

  document.write("<br> El precio en bruto es un total de: </br>"+precio_bruto);
  document.write("<br> El precio final es de: </br>"+descuento); 
  document.write("<br> El tipo de producto con más cantidad de bolsas es: </br>"+tipomasbolsas);
  document.write("<br> El producto mas caro es: </br>"+tipomascaro);

  document.close();

}
