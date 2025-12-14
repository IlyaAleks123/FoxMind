/** ### WHAT PROBLEM FUNCTION SOLVE ### */

const categories = [
    "Phones",
    "Laptops",
    "Headphones",
    "Monitors",
    "Cables",
    "Cameras",
];

/** Not correct implementation */
// console.log('---Main page---');
// categories.forEach((item) => {
//     console.log('\x1b[31m', item, '\x1b[0m');
// });

// console.log('---Products List Page---');
// categories.forEach((item) => {
//     console.log('\x1b[31m', item, '\x1b[0m');
// });

// console.log('---Detail Product Page---');
// categories.forEach((item) => {
//     console.log('\x1b[31m', item, '\x1b[0m');
// });

/** Correct implementation */
function showCategories(categories){
    categories.forEach((item) => {
        console.log('\x1b[32m', item, '\x1b[0m');
    });
}

console.log('---Main page---');
showCategories(categories);
console.log('---Products List Page---');
showCategories(categories);
console.log('---Detail Product Page---');
showCategories(categories);