/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

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

function restar()
{
	var numerouno = txtIdNumeroUno.value;
	var numerodos = txtIdNumeroDos.value;
	var resultado;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resultado = (numerouno - numerodos);
	alert("El resultado de la resta es: "+resultado);
}

function multiplicar()
{ 
	var numerouno = txtIdNumeroUno.value;
	var numerodos = txtIdNumeroDos.value;
	var resultado;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resultado = numerouno * numerodos;
	alert("El resultado de la multiplicación es: "+resultado);
}

function dividir()
{
	
}
