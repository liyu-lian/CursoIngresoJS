/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Importe = txtIdImporte.value;
	var descuento;
	var importetotal;

	Importe = parseInt(Importe);
	descuento = (25*Importe)/100;
	importetotal = Importe - descuento;
	txtIdResultado.value = "El importe total es de : "+importetotal;
}
