/** ### EXTREMELY NESTED OBJECT ### */
// DON'T DO THIS!!!!!
const extremelyNestedObject = {
    someInnerProperty: {
        someInnerProperty: {
            someInnerProperty: {
                someInnerProperty: {
                    value: "Some Value Here"
                }
            }
        }
    }
}

console.log(extremelyNestedObject);