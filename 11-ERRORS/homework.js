// let factorial = function(num){
//     let result = 1;
//     for (let i = 1; i <= num; i++){
//       result = result * i;
//     }
//     return result;
// }
//  const result = factorial(5);
//  console.log(result);

 let summa = function(num1, num2){
    if (num1 < 0 || num2 < 0) {
        throw new Error("Аргумент не может быть отрицательным")
    }
    return num1 + num2;
 }
 
 try{
   const result = summa(15, 35);
   console.log(result);
 }
 catch(error){
    console.log(error.message);
}