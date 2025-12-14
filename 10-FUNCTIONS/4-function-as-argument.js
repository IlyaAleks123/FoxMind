/** ### FUNCTION AS ARGUMENT ### */

/** Passing function as argument */
function showResult(num1, num2, doThis){
    const result = doThis(num1, num2);
    console.log("Result is =", result);
}

function sum(num1, num2){
    return num1 + num2;
}

function mul(num1, num2){
    return num1 * num2;
}

showResult(10, 2, sum);
showResult(5, 6, mul);