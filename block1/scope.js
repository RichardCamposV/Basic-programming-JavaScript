
// El scope es el contexto donde una variable es visible 
// existen 2 scopes principales global y local

// Scope global: Toda variable que esta fuera de una funcion

var global_var = 1;
function global() {
    console.log(global_var);
}

global();
console.log(global_var);

// Scope local: solo visible dentro de una funcion
function local() {
    var local_var = 2;
    console.log(local_var);
}

local();
// console.log(local_var); // Don't work

// En javascript moderno (>2015) existe 'let'
// 'let' define scope de bloque
// un bloque es todo lo que se encuentra entre { y }

if (true){
    // This is a block
    let variable = 0;
}

while (condition) {
    // This is another block
}

for (let i = 0; i < 10; i++){
    // This is another block
}

// JS constants

const var_constants = 5;
const pi = 3.1416;

