
var status = 0;
if (status === 0){
    // code
} else if (status === 1){
    // code
} else if (status === 2){
    // code
}

// Switch method
switch (status){
    case 0:
        // code
        break;
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    default:
        // code
        break;
}

// Exercise Class
/* 
Escribe una función (utilizando SWITCH CASE) que diga cuantos días tiene un mes
concreto.
Ejemplo:
var month = 'Enero'

output: El mes de Enero tiene 31 días

Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre = 31
Febrero = 28/29
Abril, Junio, Septiembre, Noviembre = 30
*/

var month = 'Julio';

switch(month){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        var long_months = 31;
        console.log("El mes de" + " " + month + " " + "tiene" + " " + long_months + " " + "días");
        break;
    case "Febrero":
        var short_months = 28;
        console.log("El mes de" + " " + month + " " + "tiene" + " " + short_months + " " + "días");
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        var intermediate_months = 30;
        console.log("El mes de" + " " + month + " " + "tiene" + " " + intermediate_months + " " + "días");
        break;
    default:
        console.log("El mes que escribiste no existe");
        break;
}
