
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Que edad tienes?', function(answer_age) {
    rl.question('Cual es tu nombre?', function(answer_name){
        if (answer_age >= 18){
            console.log('Hola ' + answer_name + ', eres mayor de edad');
        } else {
            console.log('Hola ' + answer_name + ', eres menor de edad');
        }
        rl.close();
    });
})

rl.question('Cuantas iteraciones quieres hacer?', function(iterations){
    for (let i = 1; i <= iterations; i++){
        console.log(i);
    }
    rl.close();
})
