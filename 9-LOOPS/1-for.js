/** ### FOR LOOP ### */

/* Syntax of the 'for' loop
  for (initialization; condition; iteration) {
    // Code to be executed
  }
  'for' loop consist of:
  - keyword 'for' - this keyword indicates the start of a for loop.
  - '(' and ')' - these enclose the three main parts of the loop: initialization, condition, and increment/decrement.
  - '{' and '}' - these enclose the block of code that will be executed in each iteration of the loop.
  - initialization - this part is executed once before the loop starts. It's typically used to initialize a counter variable.
  - condition - this part is evaluated before each iteration. If the condition is true, the loop continues. If the condition is false, the loop stops.
  - iteration - This part is executed after each iteration of the loop. It's usually used to update the counter variable.
  */

//  for (let i = 5; i < 7; i++) {
//     console.log(i);
//  }

/** Practical usage example */
/** Factorial 5 (5! = 1*2*3*4*5) */
const number = 5;
let result = 1;
for (let i = 1; i <= number; i++){
    result = result * i;
}
console.log(result);