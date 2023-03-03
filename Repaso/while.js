function mostrar()
{   
    let variable;
    let variable_1;
    let variable_2;
    let variable_;
    let acompañaflag;
    let acompañaflag_2;
    let acompañaflag_3;

    let flag;

    flag = false;
    contador_total = 0;
    
    while(variable <> )
    {
        
        variable = prompt("Ingrese : ").toLowerCase();

        while (!isNaN(variable))// variable != '' && variable != '' && variable != '')
        { 
	    variable = prompt("Error!! ingrese  : ").toLowerCase();
        }
        
        variable_1 = prompt("Ingrese : ");

        while (isNaN(variable_1) ||variable_1 < 0)// && variable_1 < )
        { 
	    variable_1 = prompt("Error!! ingrese  : ");
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

    }


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

    

    document.write("");
    document.write("");
    document.write("");

    document.close();
}
