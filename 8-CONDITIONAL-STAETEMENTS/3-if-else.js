/** ### ELSE CONDITIONAL STATEMENT ### */
/** Syntax of 'if' conditional statement */
// if(/**condition is true */){
//    //Do this and ignore else block
// }
// else{
    // If condition above was false do this
    // }

/** Syntax example */
if(true){
    console.log("First block is executed.");
}
else{
    console.log("Second block is executed.")
}

/** Usage example */
const cartPrice = 9000;
let deliveryPrice;

if(cartPrice > 10000){
    deliveryPrice = 0;
}
else{
    deliveryPrice = 50;
}

const fulPrice = cartPrice + deliveryPrice;
console.log(fulPrice);