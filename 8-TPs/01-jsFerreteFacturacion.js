/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
    var preciodos;
    var preciotres;
    var suma;

    preciouno = document.getElementById('txtIdPrecioUno').value;
    preciodos = document.getElementById('txtIdPrecioDos').value;
    preciotres = document.getElementById('txtIdPrecioTres').value;

    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);

    suma = preciouno + preciodos + preciotres;
    alert("El resultado de la suma es: " +suma);

}
function Promedio () 
{
	var preciouno;
    var preciodos;
    var preciotres;
    var promedio;

    preciouno = document.getElementById('txtIdPrecioUno').value;
    preciodos = document.getElementById('txtIdPrecioDos').value;
    preciotres = document.getElementById('txtIdPrecioTres').value;

    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);

    promedio = (preciouno + preciodos + preciotres)/3;
    alert("El promedio es: " +promedio);
}
function PrecioFinal () 
{
	var preciouno;
    var preciodos;
    var preciotres;
    var suma;
    var iva;
    var preciofinal;

    preciouno = document.getElementById('txtIdPrecioUno').value;
    preciodos = document.getElementById('txtIdPrecioDos').value;
    preciotres = document.getElementById('txtIdPrecioTres').value;

    preciouno = parseInt(preciouno);
    preciodos = parseInt(preciodos);
    preciotres = parseInt(preciotres);

    suma = preciouno + preciodos + preciotres;
    iva = (21*suma)/100;
    preciofinal = suma + iva;

    alert("El precio final con IVA(21%) añadido es de: " +preciofinal);
}