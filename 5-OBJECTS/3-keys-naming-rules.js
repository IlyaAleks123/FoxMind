/** ### SOME ### */
const thisIsAKey = "keyAsVariable";

const keysTesting = {
    camelCase: "Camel Case",
    $dollarAtStart: "Dollar At the Start",
    _underscoreAtStart: "Underscore At the Start",
    numbersAllowed123: "Numbers allowed But not at the start",
    // 123numbersNotAllowed: "Numbers not allowed at the start",
    [thisIsAKey]: "Value for variable key",
    'Can Use Spaces': "Can Use Space As The key",
    'кирилиця': "Тут може бути якесь значення", // !!! Don't do this
    '⚽️': "Football ball emogi",
    'kebab-case': "Kebab Case",
    1: "123123", // !!! Don't do this
    '^#%^@(#))': "😱" /// Don't do this
}

console.log(keysTesting);