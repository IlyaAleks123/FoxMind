/** USAGE EXAMPLE ### */
const sum = (num1, num2) => {
    if(typeof num1 !== 'number')
        throw new Error('Number1 has to be a number');

    if(typeof num2 !== 'number')
        throw new Error('Number2 has to be a number');

    return num1 + num2;
}

let result;

try{
    result = sum("string", 45);
    console.log(result);
}
catch(error){
    console.log("Not wrong");
}