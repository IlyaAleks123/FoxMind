/** ### GET OBJECT PROPERTIES */

const product = {
    name: "Laptop",
    price: 12000,
    discount: 3.5,
    isActive: true,
    present: {
        name: "Mouse",
        size: "100*50",
        weight: 100
    }
}

/** Get first level properties */
console.log(product.name);
console.log(product.present);

/** Get second level properties */
console.log(product.present.name);

/**Variation of properties getting */
console.log(product['discount']);
console.log(product['present']['size']);
console.log(product['present'].weight);

/* Get by property name as variable */
const key = 'isActive';
console.log(product[key]);

/* Get nonexistent property*/
console.log(product.notExistedKey);

/* Optional chaining operator (оператор опциональной цепочки) */
// Code line bellow will throw an error. Uncoment to see.
// console.log(product.notExistedKey.alsoNotExist);
console.log(product.notExistedKey?.alsoNotExist);

/* Set property to a variable */
const productName = product.name;
console.log(productName);
