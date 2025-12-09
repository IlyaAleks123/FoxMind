/** ### ADDING VALUES TO A SET ### */
const categories = new Set([
    'Laptops',
    'Headphones',
    'Microphones',
    'Monitors'
]);

/** Adding an existent value. Nothing changes */
// categories.add('Laptops');
// console.log(categories);

/* Adding nonexistent value */
categories.add('Mice');
console.log(categories);