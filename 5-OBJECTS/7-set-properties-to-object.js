/** ### SET PROPERTIES TO AN OBJECT */

const product = {
    name: "Laptop",
    price: 12000,
    discount: 3.5,
    present: {
        name: "Mouse",
        size: "100*50",
        weight: 100
    }
}

/** New properties adding */
//product.isDeleted = true;
//console.log(product);

/** Adding object as a property */
// product.processor = {
//     manufacturer: "Intel",
//     frequency: "2.7",
//     model: "i3",
// }
// console.log(product);

/** Updating existent properties */
// product.price = 13000;
// console.log(product);

/** Updating existent object property */
// product.present = {
//     name: "HeadPhones",
//     wireless: true,
//     color: "black",
// }
// console.log(product);

/** Variations of object properties updating */
// product['price'] = 13000;
// product.present.name = "Mega.Mouse";
// product['present'].size = '250*100';
// product.present['weight'] = '500';
// console.log(product);

/** Attempt to create property for nonexistent property */
// Code bellow will throw an error. Uncoment to see.
// product.notExisted.notExistedLevel2 = 12;
// console.log(product);