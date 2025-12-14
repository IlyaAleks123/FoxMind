/** ### FOR IN AND FOR OF LOOPS ### */

const categories = [
    "Phones",
    "Laptops",
    "Headphones",
    "Monitors",
    "Cables",
    "Cameras",
];

/** Syntax `for in` and `for of`
for(let variable in/of array){
     Block of code to be executed
}
For in/of loop consist of: 
 - `for` - the keyword that initiates the loop
 - `(` and `)` - parentheses that enclose the loop's control statement
 - `in/of` - The keyword that specifies that the loop should iterate over the enumerable properties 
 - `variable` - a variable that will be assigned the name of each property of the object on each iteration
 - `array` - the array whose enumerable properties are being iterated over
 - `{` and `}` - curly braces that enclose the block of code to be executed on each iteration
 */

/** For in loop */
for(let idx in categories){
    console.log(idx);
}

/** For of loop */
for(let value of categories){
    console.log(value);
}