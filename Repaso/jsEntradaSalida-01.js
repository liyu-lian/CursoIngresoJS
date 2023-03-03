
/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*******************************************************************************/
function mostrar()
{
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let pesoAvellaneda;
	let pesoCABA;
	let pesoLanus;
	let pesoProducto;
	let descripcionProducto;
	let deposito;
	let banderaPrimerPesoIngresado;
	let pesoMaximo;
	let productoMaximo;
	let ingresosCABA;
	let ingresosAvellaneda;
	let ingresosLanus;
	let mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCABA = 0;
	pesoLanus = 0;
	ingresosCABA = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do{

		do {
            deposito = prompt("Ingrese el deposito").toLowerCase();
        }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do{
			descripcionProducto = prompt("Ingrese la descripcion del producto");
		}while(!isNaN(descripcionProducto));

		do{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);
		}while(isNaN(pesoProducto));

		if(banderaPrimerPesoIngresado || pesoProducto > pesoMaximo){
			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if(deposito == "caba"){
			if((pesoCABA + pesoProducto) > TOTAL_CABA){
				alert("Deposito lleno");
				continue;
			}
			else{
				pesoCABA += pesoProducto;
				ingresosCABA++;
			}
		}
		else{
			if(deposito == "avellaneda"){
				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;
				}
			}
			else{
				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}
		}

	}while(confirm("Desea realizar otro deposito?"));

	//A:
	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//B:
	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else{
		if(ingresosCABA > ingresosLanus){
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else{
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//C:
	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else{
		if(pesoCABA > pesoLanus){
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else{
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//D:
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

	alert(mensajeDeSalida);
}







/******************************************************************************
 * Apellido:
 * Nombre:
 * Comisión:
 * Tutor:
 * 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
			  1			2			3				4
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas (No puede ser un numero negativo)
-Goles(No puede ser un numero negativo)

Se necesita saber

a)El goleador del torneo -> busqueda de maximo
b)El jugador Argentino con menos rojas recibidas.-> primero preguntar si hay argentinos en la liga y despues buscar un minimo
c)El porcentaje de jugadores Ingleses de la liga -> primero conocer la cantidad de jugadores ingleses y despues calcular un porcentaje

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.
*******************************************************************************/
function mostrar()
{
	var nombreDelJugadorIngresado;
	var nacionalidadIngresada;
	var posicionIngresada;
	var cantidadDeTarjetasRojas;
	var cantidadDeGoles;
	var respuesta;
	var flagGoleadorTorneo;
	var maximoGoleador;
	var nombreMaximoGoleador;
	var minimaCantidadTarjetasRojas;
	var jugadorConMenorCantidadDeTarjetasRojas;
	var flagPrimerArgentino;
	var contadorJugadoresIngresados;
	var contadorJugadoresIngleses;
	var porcentajeJugadoresIngleses;
	var mensaje;

	contadorJugadoresIngleses = 0;
	contadorJugadoresIngresados = 0;
	flagPrimerArgentino = false;
	flagGoleadorTorneo = false;


	do
	{
		do{
			nombreDelJugadorIngresado = prompt("Ingrese el nombre del jugador").toLowerCase();
		}while(!isNaN(nombreDelJugadorIngresado));
		do{
			nacionalidadIngresada = prompt("Ingrese la nacionalidad de "+nombreDelJugadorIngresado).toLowerCase();
		}while(!isNaN(nacionalidadIngresada));
		do{
			posicionIngresada = prompt("Ingrese la posicion de "+nombreDelJugadorIngresado).toLowerCase();
		}while(!isNaN(nacionalidadIngresada) && (posicionIngresada != "arquero" && posicionIngresada != "defensor" && posicionIngresada != "mediocampista" && posicionIngresada != "delantero"));
		do{
			cantidadDeTarjetasRojas = prompt("Ingrese la cantidad de tarjetas rojas del jugador");
			cantidadDeTarjetasRojas = parseInt(cantidadDeTarjetasRojas);
		}while(isNaN(cantidadDeTarjetasRojas) && cantidadDeTarjetasRojas < 0);
		do{
			cantidadDeGoles = prompt("Ingrese la cantidad de goles del jugador");
			cantidadDeGoles = parseInt(cantidadDeGoles);
		}while(isNaN(cantidadDeGoles) && cantidadDeGoles < 0);

		if(flagGoleadorTorneo == false){
			flagGoleadorTorneo = true;
			maximoGoleador = cantidadDeGoles;
			nombreMaximoGoleador = nombreDelJugadorIngresado;
		}
		else{
			if(cantidadDeGoles > maximoGoleador){
				maximoGoleador = cantidadDeGoles;
				nombreMaximoGoleador = nombreDelJugadorIngresado;
			}

		}

		switch(nacionalidadIngresada){
			case "argentina":
				if(flagPrimerArgentino == false){
					flagPrimerArgentino = true;
					minimaCantidadTarjetasRojas = cantidadDeTarjetasRojas;
					jugadorConMenorCantidadDeTarjetasRojas = nombreDelJugadorIngresado;
				}
				else{
					if(minimaCantidadTarjetasRojas > cantidadDeTarjetasRojas){
						minimaCantidadTarjetasRojas = cantidadDeTarjetasRojas;
						jugadorConMenorCantidadDeTarjetasRojas = nombreDelJugadorIngresado;
					}
				}
			break;
			case "inglesa":
				contadorJugadoresIngleses++;
				//contadorJugadoresIngleses = contadorJugadoresIngleses + 1;
				//contadorJugadoresIngleses += 1;
			break;
		}
		contadorJugadoresIngresados++;
		respuesta = confirm("Desea ingresar otro jugador?");
	}while(respuesta);
	
	porcentajeJugadoresIngleses = contadorJugadoresIngleses / contadorJugadoresIngresados * 100;

	mensaje = "\n El goleador del torneo es: "+nombreMaximoGoleador;
	mensaje += "\n El jugador Argentino con menor cantidad de tarjetas rojas es: "+jugadorConMenorCantidadDeTarjetasRojas;
	mensaje += " El porcentaje de jugadores Ingleses en la liga es de: "+porcentajeJugadoresIngleses;

	alert(mensaje)
	//document.write(mensaje);
}










/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Se sabe que el precio de cada pasaje vendido dentro del paquete de viaje es de 10000 pesos.
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor. *
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor. *
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos. *
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert*
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/
function mostrar()
{
	var nombreVendedor;
	var nombreComprador;
	var cantidadPasajes;
	var precioBase;
	var precioPorPasaje;
	var precioFinal;
	var tipoDeAsiento;
	var tipoDeViaje;
	var tipoDeDestino;
	var continua;
	var porcentaje;
	var recaudacionHuesos;
	var recaudacionPepepeposo;
	var recaudacionQuinoto;
	var vendedorConMayorRecaudacion;
	var contadorViajesNacionales;
	var contadorViajesInternacionales;
	var porcentajeInternacional;
	var porcentajeNacional;
	var cantidadTotalDePaquetesVendidos;
	var contadorPaqueteEconomico;
	var contadorPaqueteEjecutivo;
	var contadorPaquetePrimeraClase;
	var promedioEconomica;
	var promedioEjecutivo;
	var promedioPrimeraClase;
	var vendedorConMayorRecaudacionEnPesos;
	var mensaje;

	contadorPaqueteEconomico = 0;
	contadorPaqueteEjecutivo = 0;
	contadorPaquetePrimeraClase = 0;
	contadorViajesInternacionales = 0;
	contadorViajesNacionales = 0;
	recaudacionHuesos = 0;
	recaudacionPepepeposo = 0;
	recaudacionQuinoto = 0;
	precioPorPasaje = 10000;


	do{
		do{
			nombreVendedor = prompt("Identifiquese (Quinoto, Huesos o Pepepeposo)").toLowerCase();
		}while(!isNaN(nombreVendedor) || (nombreVendedor != "quinoto" && nombreVendedor != "pepepesoso" && nombreVendedor != "huesos"));
		do{
			nombreComprador = prompt("Ingrese el nombre del comprador").toLowerCase();
		}while(!isNaN(nombreComprador));
		do{
			cantidadPasajes = prompt("Ingrese la cantidad de pasajes a vender (minimo 1 - maximo 5)");
			cantidadPasajes = parseInt(cantidadPasajes);
		}while(isNaN(cantidadPasajes) || (cantidadPasajes< 1 || cantidadPasajes > 5));
		do{
			tipoDeAsiento = prompt("Ingrese el tipo de asiento (economica, ejecutiva o primera clase)").toLowerCase();
		}while(!isNaN(tipoDeAsiento) || (tipoDeAsiento != "economica" && tipoDeAsiento != "ejecutiva" && tipoDeAsiento != "primera clase"));
		do{
			tipoDeViaje = prompt("Ingrese el tipo de viaje (directo o con escala)");
		}while(!isNaN(tipoDeViaje) || (tipoDeViaje != "directo" && tipoDeViaje != "con escala"));
		do{
			tipoDeDestino = prompt("Ingrese el tipo de destino (nacional o internacional)");
		}while(!isNaN(tipoDeDestino) || (tipoDeDestino != "internacional" && tipoDeDestino != "nacional"));

		//Punto E
		precioBase = precioPorPasaje * cantidadPasajes;
		if(tipoDeAsiento == "ejecutiva"){
			porcentaje = 1.20;
		}
		else{
			if(tipoDeAsiento == "primera clase"){
				porcentaje = 1.35;
			}
			else{
				porcentaje = 1;
			}
		}
		precioFinal = precioBase * porcentaje;
		alert("El precio del paquete es de: " + precioFinal);
		//Punto A
		switch(nombreVendedor){
			case "huesos":
				recaudacionHuesos = recaudacionHuesos + precioFinal;
			break;
			case "pepepesoso":
				recaudacionPepepeposo = recaudacionPepepeposo + precioFinal;
			break;
			case "quinoto":
				recaudacionQuinoto = recaudacionQuinoto + precioFinal;
			break;
		}
		//Punto C y D
		if(tipoDeViaje == "Internacional"){
			contadorViajesInternacionales++;
		}
		else{
			contadorViajesNacionales++;
		}
		//Punto F
		switch(tipoDeAsiento){
			case "economica":
				contadorPaqueteEconomico++;
			break;
			case "ejecutiva":
				contadorPaqueteEjecutivo++;
			break;
			case "primera clase":
				contadorPaquetePrimeraClase++;
			break;
		}
		cantidadTotalDePaquetesVendidos++;
		continua = confirm("Vender otro pasaje");
	}while(continua);

	
	//Punto B
	if(recaudacionPepepeposo > recaudacionHuesos && recaudacionPepepeposo > recaudacionQuinoto)
	{
		vendedorConMayorRecaudacion = "Pepepeposo";
		vendedorConMayorRecaudacionEnPesos = recaudacionPepepeposo;
	}
	else{
		if(recaudacionHuesos > recaudacionQuinoto){
			vendedorConMayorRecaudacion = "Huesos";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
		else{
			vendedorConMayorRecaudacion = "Quinoto";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
	}

	//Punto C
	porcentajeInternacional = contadorViajesInternacionales / cantidadTotalDePaquetesVendidos * 100;
	porcentajeNacional = contadorViajesNacionales / cantidadTotalDePaquetesVendidos * 100;

	//Punto F
	promedioEconomica = cantidadTotalDePaquetesVendidos / contadorPaqueteEconomico;
	promedioEjecutivo = cantidadTotalDePaquetesVendidos / contadorPaqueteEjecutivo;
	promedioPrimeraClase = cantidadTotalDePaquetesVendidos / contadorPaquetePrimeraClase;

	mensaje = "\nEl total recaudado por cada vendedor";
	mensaje += "\nQuinoto vendio un total de: $"+recaudacionQuinoto;
	mensaje += "\nPepeposo vendio un total de: $"+recaudacionPepepeposo;
	mensaje += "\nHuesos vendio un total de: $"+recaudacionHuesos;
	mensaje += "\nEl vendedor que mas recaudo fue: "+vendedorConMayorRecaudacion+" con un total de: $"+vendedorConMayorRecaudacionEnPesos;
	mensaje += "\nEl porcentaje de paquetes de viajes internaciones es: %"+porcentajeInternacional;
	mensaje += "\nEl porcentaje de paquetes de viajes nacionales es: %"+porcentajeNacional;
	mensaje += "\nLos promedios de ventas segun el tipo de pasaje es:";
	mensaje += "\nPromedio de paquetes clase economica: "+promedioEconomica;
	mensaje += "\nPromedio de paquetes clase ejecutiva: "+promedioEjecutivo;
	mensaje += "\nPromedio de paquetes primera clase: "+promedioPrimeraClase;

	alert(mensaje);
}





/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/ 






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
  descuento = precioXcantidad * descuento
  precioConDescuento = precioXcantidad - descuento
  precioConAumento = precioXcantidad + aumento

  //CONSOLE LOG PARA MOSTRAS RESULTADOS RAPIDO

    console.log("Importe Bruto a pagar: "+importeTotalSinDescuento);
    console.log("Importe con descuento: "+totalConDescuento);
    console.log("Tipo con mas cantidad de bolsas: "+tipoConMasbolsas);
    console.log("Tipo mas caro: "+tipoConMasPrecio);

















    /******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
function mostrar()
{
	var contador = 0;
	var vacacionesEstadia;
	var respuesta = "si";
	var temporada;
	var importe;
	var nombre;
	var lugar;
	var peso;
	var equipajeMano;
	var metodoPago;
	var sexo;
	var altura;
	var contadorAlta = 0;
	var contadorBaja = 0;
	var acumuladoCordobaDias = 0;
	var acumuladoGessel = 0;
	var acumuladoGesselDias = 0;
	var acumuladoMadrynDias = 0;
	var mayorCantidadDias;
	var acumuladoImporte = 0;
	var nombreMasPesado;
	var nombreMenosPesado;
	var pesoMaximo;
	var pesoMinimo;
	var mayorImporte;
	var lugarImporte;
	var MujerMasAlta;
	var maximaAltura;
	var contadorGessel = 0;
	var contadorCordoba = 0;
	var contadorMadryn = 0;
	var contadorTarjeta = 0;
	var contadorMercado = 0;
	var contadorEfectivo = 0; 
	var contadorTarjeta = 0;
	var masPasajeros;
	var temporadaMasViajada;
	var pagoMasUtilizado;
	var llevaEquipaje = 0;
	var noLLevaEquipaje = 0;
	var contadorMasculino = 0;
	var contadorFemenino = 0;
	var totalSexo;
	var totalEquipaje;
	var porcentajeFemenino;
	var porcentajeLleva;
	var porcentajeMasculino;
	var contadorNb = 0;
	var porcentajeNoBinario;																															

	while(respuesta == "si")
	{
		nombre = prompt("ingrese su nombre");	
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ingrese su nombre");
		}
		
		vacacionesEstadia = prompt("ingrese la cantidad de días que se quiere quedar");
		vacacionesEstadia = parseInt(vacacionesEstadia);
		while(isNaN(vacacionesEstadia) || (vacacionesEstadia < 1 || vacacionesEstadia > 30))
		{
			vacacionesEstadia = prompt("ingrese la cantidad de días que se quiere quedar");
			vacacionesEstadia = parseInt(vacacionesEstadia);
		}
		
		lugar = prompt("ingrese el lugar al que quiere ir");
		lugar = lugar.toLowerCase();
		while(isNaN(lugar) == false ||  (lugar != "puerto madryn" && lugar != "villa gessel" && lugar != "cordoba"))
		{
			lugar = prompt("ingrese el lugar al que quiere ir correctamente");
			lugar = lugar.toLowerCase();
		}
		
		temporada = prompt("Ingrese en que temporada va");
		temporada = temporada.toLowerCase();
		while(isNaN(temporada) == false || (temporada != "alta" && temporada != "baja"))
		{
			temporada = prompt("Ingrese en que temporada va correctamente");
			temporada = temporada.toLowerCase();
		}
		
		altura = prompt("ingrese la altura en centimetros");
		altura = parseInt(altura);
		while(isNaN(altura) || (altura < 1 || altura > 300))
		{
			altura = prompt("ingrese la altura en centimetros");
			altura = parseInt(altura);
		}
		
		peso = prompt("ingrese el peso del pasajero");
		peso = parseInt(peso);
		while(isNaN(peso) || (peso < 1 || peso > 300))
		{
			peso = prompt("ingrese el peso en kilos");
			peso = parseInt(peso);
		}
		
		importe = prompt("ingrese el importe del viaje");
		importe = parseInt(importe);
		while(isNaN(importe) || (importe < 30000 || importe > 200000))
		{
			importe = prompt("ingrese el importe del viaje");
			importe = parseInt(importe);
		}
		
		sexo = prompt("ingrese su sexo");
		sexo = sexo.toLowerCase();
		while(isNaN(sexo) == false || (sexo != "f" && sexo != "m" && sexo != "nb"))
		{
			sexo = prompt("ingrese su sexo correctamente");
			sexo = sexo.toLowerCase();
		}
		
		equipajeMano = prompt("viaja con equipaje de mano?");
		equipajeMano = equipajeMano.toLowerCase();
		while(isNaN(equipajeMano) == false || (equipajeMano != "si" && equipajeMano != "no"))
		{
			equipajeMano = prompt("viaja con equipaje de mano(si/no)?");
			equipajeMano = equipajeMano.toLowerCase();
		}
		
		metodoPago = prompt("ingrese metodo de pago");
		metodoPago = metodoPago.toLowerCase();
		while(isNaN(metodoPago) == false || (metodoPago != "mercado" && metodoPago != "tarjeta" && metodoPago != "efectivo"))
		{
			metodoPago = prompt("ingrese el metodo de pago correctamente");
			metodoPago = metodoPago.toLowerCase();
		}
		switch(temporada)
		{
			case "alta":
				contadorAlta++;
				break;
			case "baja":
				contadorBaja++;
				break;
		}
		switch(sexo)
		{
			case "f":
				if(contadorFemenino == 0)
				{	
					MujerMasAlta = nombre;
					maximaAltura = altura;
				}
				else
				{
					if(altura > maximaAltura)
					{
						MujerMasAlta = nombre;
						maximaAltura = altura;
					}
				}
				contadorFemenino++;
				break;
			case "m":
				contadorMasculino++;
				break;
			case "nb":
				contadorNb++;
				break;
		}
		switch(equipajeMano)
		{
			case "si":
				llevaEquipaje++;
				break;
			case "no":
				noLLevaEquipaje++;
				break;
		}
		switch(lugar)
		{
			case "villa gessel":
				acumuladoGessel = acumuladoGessel + peso;
				acumuladoGesselDias = acumuladoGesselDias + vacacionesEstadia;
				contadorGessel++;
				break;
			case "puerto madryn":
				acumuladoMadrynDias = acumuladoMadrynDias + vacacionesEstadia;
				contadorMadryn++;
				break;
			case "cordoba":
				acumuladoCordobaDias = acumuladoCordobaDias + vacacionesEstadia;
				contadorCordoba++;
				break;
		}
		
		if (contador == 0)
		{
			nombreMasPesado = nombre;
			pesoMaximo = peso;
			nombreMenosPesado = nombre;
			pesoMinimo = peso;
			mayorImporte = importe;
			lugarImporte = lugar;
		}
		else
		{
			if(pesoMaximo < peso)
			{
				nombreMasPesado = nombre;
				pesoMaximo = peso;
			}
			if(pesoMinimo > peso)
			{
				nombreMenosPesado = nombre;
				pesoMinimo = peso;
			}
			if(importe > mayorImporte)
			{
				mayorImporte = importe;
				lugarImporte = lugar;
			}
		}
		switch(metodoPago)
		{
			case "tarjeta":
				contadorTarjeta++;;
				break;
			case "mercado":
				contadorMercado++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break; 
		}
		acumuladoImporte = acumuladoImporte + importe;
		respuesta = prompt("quiere ingresar otro pasajero?");
		contador++;
	}
	
	if(acumuladoGesselDias > acumuladoCordobaDias && acumuladoGesselDias > acumuladoMadrynDias)
	{
		mayorCantidadDias = "Villa Gessel";
	}
	else
	{
		if(acumuladoCordobaDias > acumuladoMadrynDias)
		{
			mayorCantidadDias = "Córdoba";
		}
		else
		{
			mayorCantidadDias = "Puerto Madryn";
		}
	}
	if(contadorMercado > contadorTarjeta && contadorMercado > contadorEfectivo)
	{
		pagoMasUtilizado = "mercado";
	}
	else
	{
		if(contadorTarjeta > contadorEfectivo)
		{
			pagoMasUtilizado = "tarjeta";
		}
		else
		{
			pagoMasUtilizado = "efectivo";
		}
	}
	if(contadorAlta > contadorBaja)
	{
		temporadaMasViajada = "alta";
	}
	else
	{
		temporadaMasViajada = "baja";
	}
	if(contadorGessel > contadorMadryn && contadorGessel > contadorCordoba)
	{
		masPasajeros = "Villa Gessel";
	}
	else
	{
		if(contadorMadryn > contadorCordoba)
		{
			masPasajeros = "Puerto Madryn" ;
		}
		else
		{
			masPasajeros = "Córdoba";
		}
	}
	
	if(isNaN(maximaAltura))
	{
		MujerMasAlta = "no hay mujeres";
	}
	
	totalSexo = contadorFemenino + contadorMasculino + contadorNb;
	porcentajeFemenino = (contadorFemenino / totalSexo) * 100;
	porcentajeMasculino = (contadorMasculino / totalSexo) *100;
	porcentajeNoBinario = (contadorNb / totalSexo) * 100;

	totalEquipaje = llevaEquipaje + noLLevaEquipaje;
	porcentajeLleva = (totalEquipaje * llevaEquipaje) / 100;

	alert("en temporada alta viajan " + contadorAlta);
	alert("en temporada baja viajan " + contadorBaja);
	alert("el peso acumuladod e los que viajan a Gessel es " + acumuladoGessel);
	alert("el lugar con mas dias es " + mayorCantidadDias);
	alert("la suma de todos los importes es " + acumuladoImporte);
	alert("El mas pesado es " + nombreMasPesado);
	alert("El mas liviano es " + nombreMenosPesado);
	alert("el mayor importe se pago en " + lugarImporte);
	alert("la mujer mas alta es " + MujerMasAlta);
	alert("la forma de pago mas utilizada es " + pagoMasUtilizado);
	alert("la temporada en la que mas se viajo es " + temporadaMasViajada);
	alert("el lugar que tuvo mas pasajeros es " + masPasajeros);
	alert("el porcentaje que utilico bolso de mano es " + porcentajeLleva);
	alert("de hombres hay " + porcentajeMasculino + " porciento");
	alert("de mujeres hay " + porcentajeFemenino + " porciento");
	alert("de no binarios hay " + porcentajeNoBinario + " porciento");

}















/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Se sabe que el precio de cada pasaje vendido dentro del paquete de viaje es de 10000 pesos.
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor. *
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor. *
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos. *
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert*
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/
function mostrar()
{
	var nombreVendedor;
	var nombreComprador;
	var cantidadPasajes;
	var precioBase;
	var precioPorPasaje;
	var precioFinal;
	var tipoDeAsiento;
	var tipoDeViaje;
	var tipoDeDestino;
	var continua;
	var porcentaje;
	var recaudacionHuesos;
	var recaudacionPepepeposo;
	var recaudacionQuinoto;
	var vendedorConMayorRecaudacion;
	var contadorViajesNacionales;
	var contadorViajesInternacionales;
	var porcentajeInternacional;
	var porcentajeNacional;
	var cantidadTotalDePaquetesVendidos;
	var contadorPaqueteEconomico;
	var contadorPaqueteEjecutivo;
	var contadorPaquetePrimeraClase;
	var promedioEconomica;
	var promedioEjecutivo;
	var promedioPrimeraClase;
	var vendedorConMayorRecaudacionEnPesos;
	var mensaje;

	contadorPaqueteEconomico = 0;
	contadorPaqueteEjecutivo = 0;
	contadorPaquetePrimeraClase = 0;
	contadorViajesInternacionales = 0;
	contadorViajesNacionales = 0;
	recaudacionHuesos = 0;
	recaudacionPepepeposo = 0;
	recaudacionQuinoto = 0;
	precioPorPasaje = 10000;


	do{
		do{
			nombreVendedor = prompt("Identifiquese (Quinoto, Huesos o Pepepeposo)").toLowerCase();
		}while(!isNaN(nombreVendedor) || (nombreVendedor != "quinoto" && nombreVendedor != "pepepesoso" && nombreVendedor != "huesos"));
		do{
			nombreComprador = prompt("Ingrese el nombre del comprador").toLowerCase();
		}while(!isNaN(nombreComprador));
		do{
			cantidadPasajes = prompt("Ingrese la cantidad de pasajes a vender (minimo 1 - maximo 5)");
			cantidadPasajes = parseInt(cantidadPasajes);
		}while(isNaN(cantidadPasajes) || (cantidadPasajes< 1 || cantidadPasajes > 5));
		do{
			tipoDeAsiento = prompt("Ingrese el tipo de asiento (economica, ejecutiva o primera clase)").toLowerCase();
		}while(!isNaN(tipoDeAsiento) || (tipoDeAsiento != "economica" && tipoDeAsiento != "ejecutiva" && tipoDeAsiento != "primera clase"));
		do{
			tipoDeViaje = prompt("Ingrese el tipo de viaje (directo o con escala)");
		}while(!isNaN(tipoDeViaje) || (tipoDeViaje != "directo" && tipoDeViaje != "con escala"));
		do{
			tipoDeDestino = prompt("Ingrese el tipo de destino (nacional o internacional)");
		}while(!isNaN(tipoDeDestino) || (tipoDeDestino != "internacional" && tipoDeDestino != "nacional"));

		//Punto E
		precioBase = precioPorPasaje * cantidadPasajes;
		if(tipoDeAsiento == "ejecutiva"){
			porcentaje = 1.20;
		}
		else{
			if(tipoDeAsiento == "primera clase"){
				porcentaje = 1.35;
			}
			else{
				porcentaje = 1;
			}
		}
		precioFinal = precioBase * porcentaje;
		alert("El precio del paquete es de: " + precioFinal);
		//Punto A
		switch(nombreVendedor){
			case "huesos":
				recaudacionHuesos = recaudacionHuesos + precioFinal;
			break;
			case "pepepesoso":
				recaudacionPepepeposo = recaudacionPepepeposo + precioFinal;
			break;
			case "quinoto":
				recaudacionQuinoto = recaudacionQuinoto + precioFinal;
			break;
		}
		//Punto C y D
		if(tipoDeViaje == "Internacional"){
			contadorViajesInternacionales++;
		}
		else{
			contadorViajesNacionales++;
		}
		//Punto F
		switch(tipoDeAsiento){
			case "economica":
				contadorPaqueteEconomico++;
			break;
			case "ejecutiva":
				contadorPaqueteEjecutivo++;
			break;
			case "primera clase":
				contadorPaquetePrimeraClase++;
			break;
		}
		cantidadTotalDePaquetesVendidos++;
		continua = confirm("Vender otro pasaje");
	}while(continua);

	
	//Punto B
	if(recaudacionPepepeposo > recaudacionHuesos && recaudacionPepepeposo > recaudacionQuinoto)
	{
		vendedorConMayorRecaudacion = "Pepepeposo";
		vendedorConMayorRecaudacionEnPesos = recaudacionPepepeposo;
	}
	else{
		if(recaudacionHuesos > recaudacionQuinoto){
			vendedorConMayorRecaudacion = "Huesos";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
		else{
			vendedorConMayorRecaudacion = "Quinoto";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
	}

	//Punto C
	porcentajeInternacional = contadorViajesInternacionales / cantidadTotalDePaquetesVendidos * 100;
	porcentajeNacional = contadorViajesNacionales / cantidadTotalDePaquetesVendidos * 100;

	//Punto F
	promedioEconomica = cantidadTotalDePaquetesVendidos / contadorPaqueteEconomico;
	promedioEjecutivo = cantidadTotalDePaquetesVendidos / contadorPaqueteEjecutivo;
	promedioPrimeraClase = cantidadTotalDePaquetesVendidos / contadorPaquetePrimeraClase;

	mensaje = "\nEl total recaudado por cada vendedor";
	mensaje += "\nQuinoto vendio un total de: $"+recaudacionQuinoto;
	mensaje += "\nPepeposo vendio un total de: $"+recaudacionPepepeposo;
	mensaje += "\nHuesos vendio un total de: $"+recaudacionHuesos;
	mensaje += "\nEl vendedor que mas recaudo fue: "+vendedorConMayorRecaudacion+" con un total de: $"+vendedorConMayorRecaudacionEnPesos;
	mensaje += "\nEl porcentaje de paquetes de viajes internaciones es: %"+porcentajeInternacional;
	mensaje += "\nEl porcentaje de paquetes de viajes nacionales es: %"+porcentajeNacional;
	mensaje += "\nLos promedios de ventas segun el tipo de pasaje es:";
	mensaje += "\nPromedio de paquetes clase economica: "+promedioEconomica;
	mensaje += "\nPromedio de paquetes clase ejecutiva: "+promedioEjecutivo;
	mensaje += "\nPromedio de paquetes primera clase: "+promedioPrimeraClase;

	alert(mensaje);
}















/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
function mostrar()
{
	var contador = 0;
	var vacacionesEstadia;
	var respuesta = "si";
	var temporada;
	var importe;
	var nombre;
	var lugar;
	var peso;
	var equipajeMano;
	var metodoPago;
	var sexo;
	var altura;
	var contadorAlta = 0;
	var contadorBaja = 0;
	var acumuladoCordobaDias = 0;
	var acumuladoGessel = 0;
	var acumuladoGesselDias = 0;
	var acumuladoMadrynDias = 0;
	var mayorCantidadDias;
	var acumuladoImporte = 0;
	var nombreMasPesado;
	var nombreMenosPesado;
	var pesoMaximo;
	var pesoMinimo;
	var mayorImporte;
	var lugarImporte;
	var MujerMasAlta;
	var maximaAltura;
	var contadorGessel = 0;
	var contadorCordoba = 0;
	var contadorMadryn = 0;
	var contadorTarjeta = 0;
	var contadorMercado = 0;
	var contadorEfectivo = 0; 
	var contadorTarjeta = 0;
	var masPasajeros;
	var temporadaMasViajada;
	var pagoMasUtilizado;
	var llevaEquipaje = 0;
	var noLLevaEquipaje = 0;
	var contadorMasculino = 0;
	var contadorFemenino = 0;
	var totalSexo;
	var totalEquipaje;
	var porcentajeFemenino;
	var porcentajeLleva;
	var porcentajeMasculino;
	var contadorNb = 0;
	var porcentajeNoBinario;																															

	while(respuesta == "si")
	{
		nombre = prompt("ingrese su nombre");	
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ingrese su nombre");
		}
		
		vacacionesEstadia = prompt("ingrese la cantidad de días que se quiere quedar");
		vacacionesEstadia = parseInt(vacacionesEstadia);
		while(isNaN(vacacionesEstadia) || (vacacionesEstadia < 1 || vacacionesEstadia > 30))
		{
			vacacionesEstadia = prompt("ingrese la cantidad de días que se quiere quedar");
			vacacionesEstadia = parseInt(vacacionesEstadia);
		}
		
		lugar = prompt("ingrese el lugar al que quiere ir");
		lugar = lugar.toLowerCase();
		while(isNaN(lugar) == false ||  (lugar != "puerto madryn" && lugar != "villa gessel" && lugar != "cordoba"))
		{
			lugar = prompt("ingrese el lugar al que quiere ir correctamente");
			lugar = lugar.toLowerCase();
		}
		
		temporada = prompt("Ingrese en que temporada va");
		temporada = temporada.toLowerCase();
		while(isNaN(temporada) == false || (temporada != "alta" && temporada != "baja"))
		{
			temporada = prompt("Ingrese en que temporada va correctamente");
			temporada = temporada.toLowerCase();
		}
		
		altura = prompt("ingrese la altura en centimetros");
		altura = parseInt(altura);
		while(isNaN(altura) || (altura < 1 || altura > 300))
		{
			altura = prompt("ingrese la altura en centimetros");
			altura = parseInt(altura);
		}
		
		peso = prompt("ingrese el peso del pasajero");
		peso = parseInt(peso);
		while(isNaN(peso) || (peso < 1 || peso > 300))
		{
			peso = prompt("ingrese el peso en kilos");
			peso = parseInt(peso);
		}
		
		importe = prompt("ingrese el importe del viaje");
		importe = parseInt(importe);
		while(isNaN(importe) || (importe < 30000 || importe > 200000))
		{
			importe = prompt("ingrese el importe del viaje");
			importe = parseInt(importe);
		}
		
		sexo = prompt("ingrese su sexo");
		sexo = sexo.toLowerCase();
		while(isNaN(sexo) == false || (sexo != "f" && sexo != "m" && sexo != "nb"))
		{
			sexo = prompt("ingrese su sexo correctamente");
			sexo = sexo.toLowerCase();
		}
		
		equipajeMano = prompt("viaja con equipaje de mano?");
		equipajeMano = equipajeMano.toLowerCase();
		while(isNaN(equipajeMano) == false || (equipajeMano != "si" && equipajeMano != "no"))
		{
			equipajeMano = prompt("viaja con equipaje de mano(si/no)?");
			equipajeMano = equipajeMano.toLowerCase();
		}
		
		metodoPago = prompt("ingrese metodo de pago");
		metodoPago = metodoPago.toLowerCase();
		while(isNaN(metodoPago) == false || (metodoPago != "mercado" && metodoPago != "tarjeta" && metodoPago != "efectivo"))
		{
			metodoPago = prompt("ingrese el metodo de pago correctamente");
			metodoPago = metodoPago.toLowerCase();
		}
		switch(temporada)
		{
			case "alta":
				contadorAlta++;
				break;
			case "baja":
				contadorBaja++;
				break;
		}
		switch(sexo)
		{
			case "f":
				if(contadorFemenino == 0)
				{	
					MujerMasAlta = nombre;
					maximaAltura = altura;
				}
				else
				{
					if(altura > maximaAltura)
					{
						MujerMasAlta = nombre;
						maximaAltura = altura;
					}
				}
				contadorFemenino++;
				break;
			case "m":
				contadorMasculino++;
				break;
			case "nb":
				contadorNb++;
				break;
		}
		switch(equipajeMano)
		{
			case "si":
				llevaEquipaje++;
				break;
			case "no":
				noLLevaEquipaje++;
				break;
		}
		switch(lugar)
		{
			case "villa gessel":
				acumuladoGessel = acumuladoGessel + peso;
				acumuladoGesselDias = acumuladoGesselDias + vacacionesEstadia;
				contadorGessel++;
				break;
			case "puerto madryn":
				acumuladoMadrynDias = acumuladoMadrynDias + vacacionesEstadia;
				contadorMadryn++;
				break;
			case "cordoba":
				acumuladoCordobaDias = acumuladoCordobaDias + vacacionesEstadia;
				contadorCordoba++;
				break;
		}
		
		if (contador == 0)
		{
			nombreMasPesado = nombre;
			pesoMaximo = peso;
			nombreMenosPesado = nombre;
			pesoMinimo = peso;
			mayorImporte = importe;
			lugarImporte = lugar;
		}
		else
		{
			if(pesoMaximo < peso)
			{
				nombreMasPesado = nombre;
				pesoMaximo = peso;
			}
			if(pesoMinimo > peso)
			{
				nombreMenosPesado = nombre;
				pesoMinimo = peso;
			}
			if(importe > mayorImporte)
			{
				mayorImporte = importe;
				lugarImporte = lugar;
			}
		}
		switch(metodoPago)
		{
			case "tarjeta":
				contadorTarjeta++;;
				break;
			case "mercado":
				contadorMercado++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break; 
		}
		acumuladoImporte = acumuladoImporte + importe;
		respuesta = prompt("quiere ingresar otro pasajero?");
		contador++;
	}
	
	if(acumuladoGesselDias > acumuladoCordobaDias && acumuladoGesselDias > acumuladoMadrynDias)
	{
		mayorCantidadDias = "Villa Gessel";
	}
	else
	{
		if(acumuladoCordobaDias > acumuladoMadrynDias)
		{
			mayorCantidadDias = "Córdoba";
		}
		else
		{
			mayorCantidadDias = "Puerto Madryn";
		}
	}
	if(contadorMercado > contadorTarjeta && contadorMercado > contadorEfectivo)
	{
		pagoMasUtilizado = "mercado";
	}
	else
	{
		if(contadorTarjeta > contadorEfectivo)
		{
			pagoMasUtilizado = "tarjeta";
		}
		else
		{
			pagoMasUtilizado = "efectivo";
		}
	}
	if(contadorAlta > contadorBaja)
	{
		temporadaMasViajada = "alta";
	}
	else
	{
		temporadaMasViajada = "baja";
	}
	if(contadorGessel > contadorMadryn && contadorGessel > contadorCordoba)
	{
		masPasajeros = "Villa Gessel";
	}
	else
	{
		if(contadorMadryn > contadorCordoba)
		{
			masPasajeros = "Puerto Madryn" ;
		}
		else
		{
			masPasajeros = "Córdoba";
		}
	}
	
	if(isNaN(maximaAltura))
	{
		MujerMasAlta = "no hay mujeres";
	}
	
	totalSexo = contadorFemenino + contadorMasculino + contadorNb;
	porcentajeFemenino = (contadorFemenino / totalSexo) * 100;
	porcentajeMasculino = (contadorMasculino / totalSexo) *100;
	porcentajeNoBinario = (contadorNb / totalSexo) * 100;

	totalEquipaje = llevaEquipaje + noLLevaEquipaje;
	porcentajeLleva = (totalEquipaje * llevaEquipaje) / 100;

	alert("en temporada alta viajan " + contadorAlta);
	alert("en temporada baja viajan " + contadorBaja);
	alert("el peso acumuladod e los que viajan a Gessel es " + acumuladoGessel);
	alert("el lugar con mas dias es " + mayorCantidadDias);
	alert("la suma de todos los importes es " + acumuladoImporte);
	alert("El mas pesado es " + nombreMasPesado);
	alert("El mas liviano es " + nombreMenosPesado);
	alert("el mayor importe se pago en " + lugarImporte);
	alert("la mujer mas alta es " + MujerMasAlta);
	alert("la forma de pago mas utilizada es " + pagoMasUtilizado);
	alert("la temporada en la que mas se viajo es " + temporadaMasViajada);
	alert("el lugar que tuvo mas pasajeros es " + masPasajeros);
	alert("el porcentaje que utilico bolso de mano es " + porcentajeLleva);
	alert("de hombres hay " + porcentajeMasculino + " porciento");
	alert("de mujeres hay " + porcentajeFemenino + " porciento");
	alert("de no binarios hay " + porcentajeNoBinario + " porciento");

}



