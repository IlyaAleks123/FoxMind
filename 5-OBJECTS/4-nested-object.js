/** ### NESTED OBJECT CREATION ### */

/** Incorrect implementation */
const productWithGiftIncorrect = {
    name: "Laptop",
    price: 12000,
    discount: 3.5,
    isActive: true,
    // Fields bellow better move to a nested object!!!
    presentName: "Mouse",
    presentSize: "100*50",
    presentWeight: 100,
}

/** Correct implementation of the object above */
const productWithGiftCorrect = {
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

console.log(productWithGiftIncorrect);
console.log(productWithGiftCorrect);