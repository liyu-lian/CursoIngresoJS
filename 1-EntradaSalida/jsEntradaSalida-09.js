/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo = txtIdSueldo.value;
	var aumento;
	var importetotal;

	sueldo = parseInt(sueldo);

	aumento = (10 * sueldo)/100;
	importetotal = sueldo + aumento;
	txtIdResultado.value = "El resultado es con aumento incluido es: "+importetotal;
}
