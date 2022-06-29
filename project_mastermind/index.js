
const readline = require('readline');
const internal = require('stream');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function add_task(task_list, task_description){
    task_list.push({done: false, description: task_description});
}

function print_task_list(task_list){

    number_index = 1;

    console.log('Tareas:');
    for(let task of task_list){

        if (task.done){
            console.log('#' + number_index + ' [x]' + ' ' + task.description);
        } else {
            console.log('#' + number_index + ' [ ]' + ' ' + task.description);
        }
        number_index += 1;
    }
}

function mark_task_as_done(task_list, index){

    if (index >= 0 && index < Object.keys(task_list).length) {
        task_list[index].done = true;
    } else {
        console.log('Invalid task number');
    }
}

function check_all_done(task_list){
    for(let task of task_list){
        if (!task.done) return false;
    }
    return true;
}

// first mode: read necesary tasks
function mode1(task_list) {
    rl.question('\nIntroduce una nueva tarea ( [s] - para salir )\n-', function(task_desc){

        switch(task_desc) {
            case 's':
                console.log('\nNo se introducen ya mas tareas');
                mode2(task_list);
                break;
            default:
                add_task(task_list, task_desc);
                console.log('\nLa lista de tareas actual es:');
                print_task_list(task_list);
                mode1(task_list);
                break;
        }
        
    });
}

// second mode: mark done tasks

function mode2(task_list) {
    print_task_list(task_list);
    rl.question('\nQue tarea has realizado? (1 - N) - [ Escribe (exit) para salir ]\n*', function(task_number){
        switch(task_number) {
            case 'exit':
                console.log('bye bye...');
                rl.close;
                break;
            default:
                mark_task_as_done(task_list, task_number - 1);
                // Check if all tasks are complete and close the program
                check_tasks = check_all_done(task_list);
                if (check_tasks === false){
                    mode2(task_list);
                } else {
                    print_task_list(task_list);
                    console.log('\nTodas las tareas se han hecho, NICE!!!');
                    rl.close;
                }
                break;
        }
    });
}

let task_list = [];

mode1(task_list);
