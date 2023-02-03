/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (2*largo + 2*ancho)*3;
    alert("La cantidad de alambre que se necesita es de: "+perimetro);
}
function Circulo () 
{
	var radio;
    var perimetro;

    radio = document.getElementById('txtIdRadio').value;

    radio = parseInt(radio);

    perimetro = (2*3.14*radio)*3
    alert("La cantidad de alambre que se necesita es de: "+perimetro);
}
function Materiales () 
{
	var largo;
    var ancho;
    var cal;
    var cemento;
    var area;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;
    cal = area * 3;
    cemento = area * 2;

    alert("Para el alto y ancho ingresados se necesitará: " +cemento+ " bolsas de cemento y " +cal+ " bolsas de cal.");

}