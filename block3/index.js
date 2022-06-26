
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Que edad tienes?', function(answer) {
    // TODO: Log the answer in a database
    if (answer < 18) {
        console.log('Eres menor de edad, largo de aqui');
    } else {
        console.log('Pase pase, gracias por venir');
    }

    rl.close();
})
