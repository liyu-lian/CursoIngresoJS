/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function motrar()
{
	let carga_productos;
	let producto;

	while(carga_productos <= 5)
	{
		producto = prompt("Ingrese un producto: ").toLowerCase();

		do{
    		producto = prompt("Error. Ingrese un producto válido: ").toLowerCase();
		}while(!isNaN(producto) || producto != 'barbijo' && producto != 'jabon' && producto != 'alcohol');



	}
}