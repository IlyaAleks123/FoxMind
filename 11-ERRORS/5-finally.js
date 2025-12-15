/** ### FINALLY */

// let result = 0;

/** finally block without exception */
// try{
//     result = 10 + 5;
// }
// catch(error){
//     console.log("We don't go here");
// }
// finally{
//     console.log(result);
//     console.log("We call this anyway");
// }

/** finally block with exception */
try{
    throw new Error("Thrown error");
}
catch(error){
    console.log("Here we catch error");
}
finally{
    console.log("We call this anyway");
}