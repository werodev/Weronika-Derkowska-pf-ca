// Question 1
// Declare and initialise a variable with a string value.

var exampleOfVariable = "string value";
console.log(exampleOfVariable);

// also

const exampleOfConstVariable = "also string value";
console.log(exampleOfConstVariable);

// Question 2
// Create an object variable called person and give it two properties(a key and a value) of your choice.

const person = {
    name: "Harry",
    age: 36
};

// console.log(person.name);
// console.log(person.age);

// Question 3
// Create a variable called outOfStock and assign it a boolean value.
let outOfStock = false;
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock".Otherwise log "In stock".
if (outOfStock) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}
// Question 4
// Create an array of five numbers.
// Loop through the array and console log each value.
const arrayOf5 = [4, 6, 2, 1, 7];
for (let i = 0; i < arrayOf5.length; i++) {
    let num = arrayOf5[i];
    console.log(num);
}

// Question 5
// Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
for (let i = 15; i <= 25; i++) {
    console.log(i);
}

// Question 6
// Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
for (let i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// // Question 7
// Create an array of two objects.Each object must have the same three properties(with different values):
// one property with a string value
// one property with a number value
// one property with a boolean value
// Loop through the array and console log the number value and the boolean value.
const people = [
    {
        name: "Harry",
        age: 36,
        single: true
    },
    {
        name: "Barry",
        age: 34,
        single: false
    }
];
for (let i = 0; i < people.length; i++) {
    if (typeof people[i].name !== "string") {
        console.log(people[i].name);
    }
    if (typeof people[i].age !== "string") {
        console.log(people[i].age);
    }
    if (typeof people[i].single !== "string") {
        console.log(people[i].single);
    }
}

// Question 8
// Create a function called whatIDontLike that accepts one argument.Choose a good name for the argument.
// Inside the function, log the string "I don't like " together with the argument.
// Call the function and pass in a value of your choice.
//     Example:
// If you pass in the value "giraffes", the function should log: "I don't like giraffes".
function whatIDontLike(argument) {
    console.log("I don't like", argument);
}
whatIDontLike("little, green vegetables");

// Question 9
// Create a function that accepts two arguments.
function subtraction(firstArgument, secondArgument) {

    // Inside the function, subtract the second argument from the first and console log the result.

    let result = firstArgument - secondArgument;
    console.log(result);
}
subtraction(4, 3);


// Question 10
// Create an empty array.
// Create a function that accepts one argument.
// Inside the function, add the argument to the array.
// Call the function and pass in a value of any type.

let arrayQ10 = [];
function addArgumentToArray(newArgument) {
    arrayQ10.push(newArgument);
}
addArgumentToArray("bob");
addArgumentToArray(true);
console.log(arrayQ10);