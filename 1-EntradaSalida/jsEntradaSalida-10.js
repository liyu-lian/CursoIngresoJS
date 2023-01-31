/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe = txtIdImporte.value;
	var descuento;
	var importetotal;

	importe = parseInt(importe);

	descuento = (importe * 25)/100;
	importetotal = importe - descuento;
	txtIdResultado.value = "El importe con descuendo incluido es: "+importetotal;
}
