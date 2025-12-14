/** ### FUNCTION PARAMS ### */

/** Function with params definition */
// function showUserInfo(firstName, lastName, age){
//     console.log("User is:", firstName, lastName, age);
// }

/** Pass params to function call */
// showUserInfo('Silvia', 'Coy', 54);
// showUserInfo('Beatrice', 'Nat', 21);
// showUserInfo('Toby', 'Royal', 68);

/** Default values to params */
function showUserInfo(firstName = 'not defined', lastName = 'not defined', age = 'not defined'){
    console.log("User is:", firstName, lastName, age);
}
showUserInfo('Silvia');