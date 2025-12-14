/** ### FOR IN FOR OBJECTS ### */

const storeInventory = {
    lenovo: { quantity: 50 },
    headphones: { quantity: 30 },
    microphones: { quantity: 20 },
    pears: { quantity: 10, pricePerUnit: 1.3 }
};

// `for in` works for objects
for (let item in storeInventory) {
    console.log(`Товар: ${item}`);
    console.log(`  Количество: ${storeInventory[item].quantity}`);
    console.log(`  Цена за единицу: ${storeInventory[item].pricePerUnit}`);
}

// !!! `for of` doesn't work for objects (Object is not iterable)
// for (let item of storeInventory) {
//     console.log(`Product: ${item}`);
//     console.log(`  Quantity: ${storeInventory[item].quantity}`);
//     console.log(`  Price per unit: ${storeInventory[item].pricePerUnit}`);
// }