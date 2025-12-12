/** ### SIMPLE CONDITIONAL STATEMENT ### */

/**
 * Conditional statement consist of:
 * - Conditional Expression(Вираз-умова)
 * - Code Block to Execute(Блок коду для виконання)
 * - Control Flow Keywords(Ключевые слова для управления потоком) if, else if, else, switch
 */

/** Syntax of 'if' conditional statement */
// if(/**condition is true*/){
//    //Do this
// }

/** Syntax of the conditional statement */
// if(true){
//     console.log("Conditional block is executed.");
// }
// console.log("This code will be executed anyway.");

/** Usage example */
let cartPrice = 12000;

if(cartPrice > 10000){
    cartPrice = cartPrice * 0.9;
}
console.log(cartPrice);