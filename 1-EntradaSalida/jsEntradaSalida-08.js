/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Inspeccionar y buscar el nombre txt en el recuadro
	var dividendo = txtIdNumeroDividendo.value;
	var divisor = txtIdNumeroDivisor.value;
	var resto;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resto = dividendo % divisor;
	alert("El resto es: "+resto+".");
}
