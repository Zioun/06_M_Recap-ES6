// todo:- Function declaration
/*

function add(a, b){
    const result = a + b;
    return result
}
const result = add(10, 20)
console.log(result);

*/

// todo:- Function expression
/*

const add = function(a, b){
    const result = a + b;
    return result;
}
const result = add(10, 20);
console.log(result);

*/

// todo:- Arrow function 
/*

const add = (a, b, c, d) => a + b + c + d;
const sum = add(10, 20, 30, 40) ;
console.log(sum);

*/

// todo:- Get age from object (Arrow function) single parameter
/*

const person = {name: "Abdullah", age: 50};
const getPerson = (per) => per.age;
const call = getPerson(person);
console.log(call);

*/

// todo:- Get number from array (Arrow function) without -> () <- single parameter
/*

const numbers = [10, 20, 30, 40, 50];
const getNumber = num => num[3];
const call = getNumber(numbers);
console.log(call);

*/

// todo:- Learge arrow function (not auto return)
/*

const numbers = [50, 79, 30, 20, 43];
const getCalculte = (number) => {
    const num1 = number[1];
    const num3 = number[3];
    const sum = num1 + num3;
    const total = number[2] * sum;
    return total;
}
const call = getCalculte(numbers);
console.log(call);

*/

// todo:- Arrow function Math.PI
/*

const getPI = () => Math.PI;
console.log(getPI());

*/