/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio () 
{
 	var cantidad_LAMPARAS;
    var marca;
    var precio;
    var descuento;
    var precio_final;
    var impuesto_IIBB;

    cantidad_LAMPARAS = document.getElementById('txtIdCantidad').value;
    cantidad_LAMPARAS = parseInt(cantidad_LAMPARAS);
    marca = document.getElementById('Marca').value;

    precio = 35*cantidad_LAMPARAS;

    if(cantidad_LAMPARAS >= 6)
    {
        descuento = 50;
    }
    else
    {
        

        if(cantidad_LAMPARAS == 5 && marca == 'ArgentinaLuz')
        {
            descuento = 40;
        }
        else
        {
            if(cantidad_LAMPARAS == 5 && marca != 'ArgentinaLuz')
            {
                descuento = 30;
            }
            else
            {
                if(cantidad_LAMPARAS == 4)
                {
                    if(marca == 'ArgentinaLuz' || marca == 'FelipeLamparas')
                    {
                        descuento = 25;
                    }
                    else
                    {
                        descuento = 20;
                    }
                }
                else
                {
                    if(cantidad_LAMPARAS == 3)
                    {
                        if(marca == 'ArgentinaLuz')
                        {
                        descuento = 15;
                        }
                        else
                        {
                            if(marca == 'FelipeLamparas')
                            {
                                descuento = 10;
                            }
                            else
                            {
                                descuento = 5;
                            }
                        }
                    }
                   
                }
            }
        }

        document.getElementById('txtIdprecioDescuento').value = "El precio es: " + precio;
    }

    descuento = (descuento*precio)/100;
    precio_final = precio - descuento;

    if(precio_final > 120)
    {
        impuesto_IIBB = 10
    }
    impuesto_IIBB = (10*precio_final)/1000;
    impuesto_IIBB = precio_final + impuesto_IIBB;


    
    document.getElementById('txtIdprecioDescuento').value = "su precio más impuesto IIBB: " + precio_final;
    document.getElementById('txtIdprecioDescuento').value = "El precio es: " + precio_final;
}
