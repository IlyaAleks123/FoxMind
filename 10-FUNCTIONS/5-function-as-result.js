/** ### FUNCTION AS A RESULT ### */

function sum(num1, num2){
    return num1 + num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function sub(num1, num2){
    return num1 - num2;
}
 function div(num1, num2){
    return num1 / num2;
 }

 /** whatToDo will return a function */
 function whatToDo(operation){
    switch(operation){
        case 'multiple':
            return mul;
        case 'subtraction':
            return sub;
        case 'division':
            return div;
        default:
            return sum;
    }
 }

 const operation = whatToDo('division');
 const result = operation(5,5);
 console.log('Result is:', result);