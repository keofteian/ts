// Tuple types allow you to express an array where the type of a fixed number of elements is known, 
// but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

// When accessing an element with a known index, the correct type is retrieved:

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'