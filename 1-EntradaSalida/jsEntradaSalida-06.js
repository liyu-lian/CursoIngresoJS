/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
	var resultado;

	numerouno = document.getElementById('txtIdNumeroUno').value;
	numerodos = document.getElementById('txtIdNumeroDos').vaue;

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	resultado = numerouno + numerodos;
	alert("El resultado de la suma es: "+resultado);
}

