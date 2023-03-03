/* 2. Una librería que se especializa en venta de libros importados desea calcular ciertas 
métricas en base a las ventas de sus productos 
(No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió. */

function mostrar()
{
    debugger
    let titulo;
    let genero;
    let importe;
    let contador_cienciaficcion;
    let contador_drama;
    let contador_terror;
    let contadortotal;
    let primerlibro_drama;
    let importedramabarato;
    let titulodramabarato;
    let flagdramabarato;

    flagdramabarato = false;
    contador_cienciaficcion = 0;
    contador_drama = 0;
    contador_terror = 0;
    contadortotal = 0;

    do{

        titulo = prompt("Ingrese el título del libro: ").toLowerCase();

        while (!isNaN(titulo))
        { 
	        titulo = prompt("Error!! ingrese el título del libro: ").toLowerCase();
        }

        genero = prompt("Ingrese el genero del libro: ").toLowerCase();

        while (!isNaN(genero) || genero != 'ciencia ficcion' && genero != 'drama' && genero != 'terror')
        { 
	        genero = prompt("Error!! ingrese el género del libro: ").toLowerCase();
        }

         diseño = prompt("Ingrese el diseño del libro: ").toLowerCase();

        while (!isNaN(diseño) || diseño != 'rustica' && diseño != 'tapa dura')
        { 
	        diseño = prompt("Error!! ingrese el tipo de diseño del libro: ").toLowerCase();
        }
        
        importe = prompt("Ingrese el importe: ");
        importe = parseInt(importe);

        while (isNaN(importe) || importe < 0 || importe > 3000) // estaba mal la valdación de menor a 3000. es "v > 3000"
        { 
	        importe = prompt("Error!! ingrese importe del libro: ");
            importe = parseInt(importe);//me olvidé del parseInt
        }

       switch (genero)
       {
        case 'drama':
                
            if(flagdramabarato == false)
            {
                flagdramabarato = true;
                importedramabarato = importe; // Marca Undefined
                titulodramabarato = titulo;   // Marca Undefiend
                primerlibro_drama = titulo; //  Marca Undefined
            }
            else
            {
                if(importedrama>importe);
                {
                    importedramabarato = importe; //Undefined
                    titulodramabarato = titulo; //Undefined
                }
                
            }
                contador_drama++;
            break;
       
        case 'ciencia ficcion':
            contador_cienciaficcion++;
            break;
        case 'terror':
            contador_terror++;
            break;
        
       }

       contadortotal++;

    }while(respuesta = confirm("¿ Desea seguir ingresando datos?"))

    promedio_drama = (contador_drama * 100)/contadortotal;
    promedio_ciencia_ficcion = (contador_cienciaficcion* 100)/contadortotal;
    promedio_terror= (contador_terror * 100)/contadortotal;

    document.write("<br> Libro de drama más barato fue "+titulodramabarato+" con un importe de "+importedramabarato+".</br>");
    document.write("<br> El promedio de libros de drama es de "+promedio_drama+", el promedio de libros de ciencia ficción es de "+promedio_ciencia_ficcion+", el promedio de libros de terror es de "+promedio_terror+".</br>");
    document.write("<br> El primer libro de drama vendido fue "+primerlibro_drama+".</br>");

    document.close();

}