/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo = txtIdNumeroDividendo.value; //Inspeccionar y buscar el nombre txt en el recuadro
	var divisor = txtIdNumeroDivisor.value;
	var resultado;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resultado = dividendo % divisor;
	alert("El resto de la división es: "+resultado);
}
