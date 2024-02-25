// todo:- Destructuring object

const person = {
    name : "Abdullah",
    age: 30,
    phone: '01234567890'
}

// todo:- Not used Destructuring

const age = person.age; 

// todo:- Used Destructuring

const {name,phone:phn} = person;

console.log(age);
console.log(name,phn);


// todo:- Destructuring Array

const numbers = [45, 99];
const [first, second] = numbers;
console.log(first,second)

// todo:- =========> OR <=========

const [x, y] = [10, 20];
console.log(x)

// todo:- Destructuring Function

function doubleThem(a, b){
    return [a*2, b*2];
}

// todo:- Not used Destructuring
let result = doubleThem(10, 20);
console.log(result)

// todo:- Used Destructuring
const [one, two] = doubleThem(10, 20);
console.log(one);