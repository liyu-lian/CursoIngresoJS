//cheat code 2//

// vALIDAR DATOS HASTA QUE EL USUARIO QUIERA

let validacion = false;
let continuar;


 while (!validacion) {

   
    continuar = confirm("¿desea continuar?");

    if (!continuar) {
      //alert("gracias por su compra")
			break;
		}
  }

// VALIDAD DATOS X CANTIDAD DE VECES

let contador = 0;

  while (contador < x) { //DATOS

    contador = contador = contador + 1;
}

// VALIDAR POR PROMPT RESPUESTAS ESPECIFICAS

let tipo;


tipo = prompt("¿cual es el producto que desea comprar?").toUpperCase();
while (tipo != "ARENA" && tipo != "CAL" && tipo != "CEMENTO") {
    tipo = prompt("ERROR!!  ¿cual es el producto que desea comprar?").toUpperCase();
}

// CATEGORIZAR RESPUESTAS CON SWITCH + ACUMULADORES 

switch (tipo) {
    case "ARENA":
      //acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
      //acumuladorPrecioArena = acumuladorPrecioArena + precio;

      break;

    case "CAL":
      //acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
      //acumuladorPrecioCal = acumuladorPrecioCal + precio;
      break;

    default: // cemento
      //acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
      //acumuladorPrecioCemento = acumuladorPrecioCemento + precio;

      break;
    }
    
//VALIDAR ALGO VERIFICANDO QUE SEA SI O SI TEXTO

marca = prompt("Ingrese lar marca del producto");
		while (!isNaN(marca) || marca.trim() === ""){
			marca = prompt ("la marca es requerida, ingrese nuevamente");
    }

//VALIDAD CANTIDAD DE ALGO  (si o si son numeros)

let cantidadDeBolsas

cantidadBolsas = prompt("¿cual es la cantidad de bolsas que va a necesitar");
cantidadBolsas = parseInt(cantidadBolsas);
while (isNaN(cantidadBolsas)) {
cantidadBolsas = prompt("ERROR. ¿cual es la cantidad de bolsas que va a necesitar");
cantidadBolsas = parseInt(cantidadBolsas);
}
/*
*/
cantidadDeBolsas = 0

//VALIDAR CANTIDAD DE ALGO, LIMITANDO SU RESPUESTA A UN RANGO

let cantidadBolsas = 0

while(cantidadBolsas < 1){ 
    cantidadBolsas = prompt("¿cual es la cantidad de bolsas que va a necesitar");
    cantidadBolsas = parseInt(cantidadBolsas);
    while (isNaN(cantidadBolsas)) {
        cantidadBolsas = prompt("ERROR. ¿cual es la cantidad de bolsas que va a necesitar");
        cantidadBolsas = parseInt(cantidadBolsas);
    }
}
/*
*/
cantidadDeBolsas = 0

//VALIDAR CANTIDAD DE ALGO CON UN RANGO MAS ESPECIFICO

while(precio < 100 || precio > 300){ 
  precio = prompt("¿cual es el precio del producto a ingresar?");
  precio = parseInt(precio);
  while (isNaN(precio)) {
    precio = prompt("ERROR. ¿cual es el precio del producto a ingresar?");
    precio = parseInt(precio);
    }
  }

//USO DE BANDERA Y TOMAR MAXIMO O MINIMO DE UN OBJETO

let precioIngresado
let precioMasCaro
let precioMasBarato
let banderaPrecioMax
let banderaPrecioMin

banderaPrecioMax = true
banderaPrecioMin = true

/*
la bandera procura que el codigo entre 1 vez al if
*/

if(banderaPrecioMax == true || precioIngresado > precioMasCaro){

    precioMasCaro = precioIngresado
    banderaPrecioMax = false
}

if(banderaPrecioMin == true || precioIngresado < precioMasBarato){

    precioMasBarato = precioIngresado
    banderaPrecioMin = false
}

// MARCAR LA CANTIDAD MAXIMA  O MINIMA  DE 3 OBJETOS O MAS

if (contadorEfectivo >= contadorMercado && contadorEfectivo >= contadorTarjeta) {
    formaDePagoMasUtilizada = "Efectivo";
}else{
    if (contadorMercado >= contadorEfectivo && contadorMercado >= contadorTarjeta) {
        formaDePagoMasUtilizada = "Mercado pago";
    } else {
        formaDePagoMasUtilizada = "Tarjeta";
    }
}

// ACUMULADORES (usar para precio, kilos, metros etc)

let importe
let importeFinal

importeFinal = importe + importeFinal
importeFinal += importe

//SACAR PONCENTAJE

porcentajeEquipaje = cantidadConEquipaje / totalPasajeros * 100; //porcentaje de personas con equipaje
porcentajeHombres = cantidadHombres / totalPasajeros * 100;
porcentajeMujeres = cantidadMujeres / totalPasajeros * 100;
porcentajeNB = cantidadNoBinario / totalPasajeros * 100;

// SACAR DESCUENTO POR CANTIDAD DE COSAS

if(bolsasTotales > 10 && bolsasTotales <= 30){
    descuento = 0.15
  }else{
    if(bolsasTotales > 30 ){
      descuento = 0.25
    }
  }

  descuento = precioXcantidad * descuento
  totalConDescuento = precioXcantidad - descuento

  //SACAR DESCUENTO  O AUMENTO
  
  let Precio
  let precioXcantidad
  let descuento = 0.15 // o aumento
  let precioConDescuento
  
  precioXcantidad = //acumuladores * acumuladores
  descuento = precioXcantidad * descuento;
  precioConDescuento = precioXcantidad - descuento;
  precioConAumento = precioXcantidad + aumento

  //CONSOLE LOG PARA MOSTRAS RESULTADOS RAPIDO

    console.log("Importe Bruto a pagar: "+importeTotalSinDescuento);
    console.log("Importe con descuento: "+totalConDescuento);
    console.log("Tipo con mas cantidad de bolsas: "+tipoConMasbolsas);
    console.log("Tipo mas caro: "+tipoConMasPrecio);

