
var array = ["aa", "bb", 3, [1, 2], {name: 'Ricardo', last_name: 'last name'}];
var object = {
    name: 'Martin',
    lastname: 'Cristobal',
    age: 25,
    cars: ['Ferrari', 'BMW'],
    direction: {
        street: 'text street',
        number: 4
    }
}

console.log(array[4].name);
console.log(object.cars[1], object.direction.street);

console.log(array.length);

var valid_position = 50 >= 0 && 50 < array.length;
console.log(valid_position);
