
function mostrar()
{
    let variable_;
    let variable_1;
    let variable_2;
    let variable;
    
    let flag;

    flag = false;

    do{

        variable = prompt("Ingrese : ").toLowerCase();

        while (!isNaN(variable))// variable != '' && variable != '' && variable != '')
        { 
	        variable = prompt("Error!! ingrese  : ").toLowerCase();
        }
        
        variable_1 = prompt("Ingrese : ");
        variable_1 =parseInt(variable_1);

        while (isNaN(variable_1) || variable_1 < 0)// && variable_1 < )
        { 
	        variable_1 = prompt("Error!! ingrese  : ");
            variable_1 =parseInt(variable_1);
        }

        variable_ = prompt("Ingrese : ").toLowerCase();

        while (!isNaN(variable_) || variable_ != '' && variable_ != '')
        { 
	         variable = prompt("Error!! ingrese  : ").toLowerCase();
        }

        switch(variable)
        {
            case '':
                break;
            case '':
                break;
            case '':
                break;
        }
    

    }while(respuesta = confirm("¿ Desea seguir ingresando datos?"));

    if(flag == false)
    {
        flag = true;

    }
    else
    {
        if( variable_2 > variable_1) 
        {

        }
    }


    document.write("<br>   </br>");
    document.write("<br>  </br>");
    document.write("<br>  </br>");

    document.close();

}
