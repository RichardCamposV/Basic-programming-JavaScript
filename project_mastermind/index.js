
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function add_task(task_list, task_description){
    task_list.push({done: false, description: task_description});
}

function print_task_list(task_list){

    console.log('Tareas:');
    for(let task of task_list){

        if (task.done){
            console.log('[x]' + ' ' + task.description);
        } else {
            console.log('[ ]' + ' ' + task.description);
        }
    }
}

// first mode: read necesary tasks
function ask_for_tasks(task_list) {
    rl.question('\nIntroduce una nueva tarea ( [S] - para salir )\n', function(task_desc){

        switch(task_desc) {
            case 'S':
                console.log('\nNo se introducen ya mas tareas');
                rl.close();
                break;
            default:
                add_task(task_list, task_desc);
                console.log('\nLa lista de tareas actual es:');
                print_task_list(task_list);
                ask_for_tasks(task_list);
                break;
        }
        
    });
}

let task_list = [];

ask_for_tasks(task_list);
// second mode: mark done tasks
