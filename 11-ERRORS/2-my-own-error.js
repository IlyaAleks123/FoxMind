/** ### CREATE AN ERROR OBJECT ### */

const error = new Error('OMG!!! This is an error');

console.log(error);
console.log(error.message);
console.log(error.stack);

console.log('This line will be executed');