const arrayExample = [
    2022,
    'some string',
    true,
    null,
    {
        name: "Laptom",
        price: 12000,
        discount: 3.5,
        isActive: true,
    },
];

/** Deletion with 'delete'. DON'T DO THIS */
// delete arrayExample[3];
// console.log(arrayExample);
// console.log(arrayExample.length); // Wrong length here!!!

/** Delete last element of the array */
// arrayExample.pop();
// console.log(arrayExample);
// console.log(arrayExample.length);

/** Delete first element of the array */
// arrayExample.shift();
// console.log(arrayExample);
// console.log(arrayExample.length);

/** Right deletion element from the middle */
// arrayExample.splice(1, 3);
// console.log(arrayExample);
// console.log(arrayExample.length);