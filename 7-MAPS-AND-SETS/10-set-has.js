/** CHECKING EXISTENCE OF AN ELEMENT */

const categories = new Set([
    'Laptops',
    'Headphones',
    'Microphones',
    'Monitors'
]);

// Existent element
console.log(categories.has('Monitors'));
// Nonexistent element
console.log(categories.has('Mice'));