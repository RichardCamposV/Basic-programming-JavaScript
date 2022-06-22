
// Example Closures
function create_function() {
    var name = 'Martin';
    function show_name() {
        console.log(name);
    }
    return show_name;
}

// Other example closures
function create_sum(x) {
    return function(y) {
        return x + y;
    }
}

function rcv_example(name) {
    function show_name(){
        console.log(name);
    }
    show_name();
}


// create_function(); // If we only call de def function it doesn't print something
var my_function = create_function();
my_function();

let sum4 = create_function(4);
console.log(sum4(3));
//rcv_example('Ricardo');
