const product = {
    name: "Laptop",
    prise: 12000,
    discount: 3.5,
    isActive: true,
    present: {
        name: "Mouse",
        size: "100*50",
        weight: 100
    }
}

// console.log(product);

/** First level property deletion */
// delete product.isActive;
// console.log(product);

//** Second level property deletion */
// delete product.present.name;
// console.log(product);

//** Deletion syntax variations */
// delete product['present'].weight;
// delete product.present['size'];
// console.log(product);

// delete product.notExisted;
// console.log(product);

// delete product.notExisted.notExistedLevel2;
// console.log(product);