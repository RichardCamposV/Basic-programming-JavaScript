
// Syntax
function process() {
    console.log('Hago una cosa');
    console.log('Luego hago otra');
}

function generate_full_name(name, lastname) {
    console.log(name + ' ' + lastname);
}

function calculate_mid_point(num1, num2) {
    return (num1 + num2)/2;
}

// Las funciones son un tipo de dato, por lo que podemos utilizrlo como varibale
var hello_logic = function(name) {console.log('Hola, mi nombre es ' + name)};

// Podemos pasar una funcion a otra
function super_educate_hello(past_function, name) {
    console.log('Disculpe, perdone que le moleste, pero ');
    // Ejecutamos la funcion que hemos recibido
    past_function(name);
    console.log('Espero pasar una muy buena velada con usted.');
}

function multiplier_arrays(array, number) {
    var new_array = [];
    
    for(var data of array) {
        result = data * number;
        new_array.push(result);
    }

    console.log('User array: ' + array);
    console.log('Number: ' + number);
    console.log('Final array: ' + new_array);
    
}

// process();
// generate_full_name('Ricardo', 'Campos');
// console.log(calculate_mid_point(8, 4));
// super_educate_hello(hello_logic, 'Martin');

var user_array = [2, 3, 4, 5, 7, 8, 9];
var number = 2

multiplier_arrays(user_array, number);
