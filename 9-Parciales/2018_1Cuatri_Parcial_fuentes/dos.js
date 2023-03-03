/*
Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, 
es necesario llevar un registro de la venta diaria de cafés, 
medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

Cuantas Medialunas se compraron durante toda la jornada.
Cuál fue el producto con más unidades vendidas.
Nombre del cliente, y tipo de producto con mayor cantidad de compras
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
Informar cuál fue el producto menos vendido


*/

function mostrar()
{
    let tipo;
    let medialunas;
    let cafe;
    let churros;
    let cantidad;
    let tipo2;
    let nombre;
    let contador_total;
    let acompañaflag;
    let acompañaflag_2;
    let acompañaflag_3;
    let descuento = 0;
    let precio;
    let acum_medialunas;
    let acum_churros;
    let acum_cafe;
    
    let flag;

    flag = false;
    contador_total = 0;
    cafe = 100;
    medialunas = 60;
    churros = 50;
    acum_medialunas = 0;
    acum_churros = 0;
    acum_cafe = 0;

    do{
  
        nombre = prompt("Ingrese el nombre del comprador: ").toLowerCase();

        while (!isNaN(nombre))// nombre != '' && nombre != '' && nombre != '')
        { 
	        nombre = prompt("Error!! ingrese el nombre del comprador: ").toLowerCase();
        }
        
        tipo = prompt("Ingrese el producto: ").toLowerCase();

        while (!isNaN(tipo) || tipo != 'medialunas' && tipo != 'cafe' && tipo != 'churros')
        { 
	         tipo  = prompt("Error!! ingrese el producto: ").toLowerCase();
        }

        cantidad = prompt("Ingrese la cantidad: ");
        cantidad =parseInt(cantidad);

        while (isNaN(cantidad) || cantidad < 0)// && cantidad < )
        { 
	        cantidad = prompt("Error!! ingrese la cantidad: ");
            cantidad =parseInt(cantidad);
        }

        /*Cuantas Medialunas se compraron durante toda la jornada.
Cuál fue el producto con más unidades vendidas.
Nombre del cliente, y tipo de producto con mayor cantidad de compras
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
Informar cuál fue el producto menos vendido */

        switch(variable)
        {
            case 'cafe':

            precio = cantidad * cafe;
                break;
            case 'medialunas':
                if(cantidad == 12)
                {
                    descuento = 20
                }
                else
                {
                    if(cantidad == 10)
                    {
                        descuento = 10;
                    }
                    else{
                        if(cantidad == 5)
                        {
                            descuento = 5;
                        }
                    }
                }
                
                precio = cantidad * medialunas;
                acum_medialunas = acum_medialunas + cantidad;
                break;
            case 'churros':
                if(cantidad == 12)
                {
                    descuento = 20
                }
                else
                {
                    if(cantidad == 10)
                    {
                        descuento = 10;
                    }
                    else{
                        if(cantidad == 5)
                        {
                            descuento = 5;
                        }
                    }

                    precio = cantidad * churros;

                break;
        }

    }while(respuesta = confirm("¿ Desea seguir ingresando datos?"));

    if(flag == false)
    {
        flag = true;
        acompañaflag = ;
        acompañaflag_2 = ;
        acompañaflag_3 = ;

    }
    else
    {
        if( variable_2 > variable_1) 
        {
            acompañaflag_2 = ;
            acompañaflag_3 = ;
        }
    }

    descuento = (precio*descuento)/100;
    descuento =  precio - descuento;

    document.write("<br> </br>");
    document.write("<br>  </br>");
    document.write("<br>  </br>");

    document.close();

}

