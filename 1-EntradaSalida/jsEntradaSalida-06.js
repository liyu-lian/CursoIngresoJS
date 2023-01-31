/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno = txtIdNumeroUno.value;
	var numerodos = txtIdNumeroDos.value;
	var resultado;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resultado = numerouno + numerodos;
	alert("El resultado de la suma es: " +resultado);
}

