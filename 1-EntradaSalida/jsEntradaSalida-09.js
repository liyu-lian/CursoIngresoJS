/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var Sueldo = txtIdSueldo.value;
	var aumento;
	var importetotal;

	Sueldo = parseInt(Sueldo);
	aumento = (10*Sueldo)/100;
	importetotal = Sueldo + aumento;
	txtIdResultado.value = "El importe con aumento incluido es: "+importetotal;
}
