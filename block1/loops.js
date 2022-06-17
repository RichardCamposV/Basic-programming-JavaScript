
// Loop while
var counter = 0;
var n = 50;
while (counter < n){
    console.log(counter);
    counter += 1;
}


while(counter < n){
    if (counter === 0){
        // Primera iteracion
    } else {
        // Segunda iteracion
    }
}

// Loop do while
/*
do{
    // Primera iteracion
} while(condition)
*/

// Loop for
for (var i = 0; i < 10; i++){
    console.log(i);
}

var array = [10, 20, 30];
var students = [
    {
        name: 'Ricardo',
        note: 5
    },
    {
        name: 'Nate',
        note: 8
    },
    {
        name: 'Jose',
        note: 1
    }
]

console.log(students);
for (var i = 0; i < students.length; i++){
    console.log(students[i].name, students[i].note);
}
// Iterar sobre vectores y objetos
// for - of
for (var student of students){
    console.log(student.name);
}

// for - in
var special_student = {
    name: 'Ricardo',
    note: 5
}

for (var key in special_student){
    console.log(key, special_student[key]);
}

// Exercise class
/*
Utilizando bucles 'for', se tiene que dibujar un arbol, por ejemplo,
un arbol de altura 3 seria el siguiente:

    *
   ***
  *****

*/

var floors = 10;
var blank_spaces = 15;
var tree = '';
var counter = 1;
var symbol = 1;
var complete_tree = true;

console.log();
console.log();

while (complete_tree){
    for (var i = 1; i <= blank_spaces; i++){
        tree += ' ';
        // counter += 1;
        if (i === blank_spaces){
            for (var i = 1; i <= symbol; i++){
                tree += '*';
            }
            for (var i = 1; i <= blank_spaces; i++){
                tree += ' ';
            }
        }
    }
    counter += 1;
    console.log(tree);
    if (floors > 1 && counter <= floors){
        blank_spaces -= 1;
        tree = '';
        symbol += 2;
    } else {
        complete_tree = false;
    }    
}
