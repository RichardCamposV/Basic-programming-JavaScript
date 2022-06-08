
var condition = true;
var condition2;
var condition3;

if (condition){
    console.log("Estoy en el if");
} else {
    console.log("Estoy en el else");
}

if (condition){
    // code
} else if (condition2){
    // code
} else if (condition3){
    // code
} else {
    // code
}

if (condition){
    if (condition2){
        // code
    }
} else {
    // code
}

// Exercise Class
/* Se debe realizar un programa que, dados dos números, imprima por pantalla si el
primer número es múltiplo del segundo.
Ejemplo:
number_1 = 20;
number_2 = 2;

output: 20 es múltiplo de 2
*/

number_1 = 20;
number_2 = 2;

if (number_1 % number_2 === 0){
    console.log(number_1 + " " + "es múltiplo de" + " " + number_2);
} else {
    console.log(number_1 + " " + "no es múltiplo de" + " " + number_2);
}
