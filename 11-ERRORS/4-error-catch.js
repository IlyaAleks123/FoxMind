/** ### EXCEPTION CATCHING ### */

/** try... catch construction */
// try{
//     const error = new Error('This error will be caught');
//     throw error;
//     console.log('This won\'t be called')
// }
// catch(error){
//     console.log("This line of code will be executed")
//     console.log(error);
// }

/** try ... catch without error as arg */
try{
    const error = new Error('This error will be caught');
    throw error;
}
catch{
    console.log("This line of code will be executed");
}