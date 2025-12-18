/** ### PRIVATE PROPERTIES ### */

class User{

    #email;
    #firstName;
    #lastName;
    #phone;

    constructor(parfms){
        this.#email = params.email;
        this.#firstName = params.firstName;
        this.#lastName = params.lastName;
        this.#phone = params.phone;
    }
}

const user = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
    phone: '+359545656166',
});

/** Can't access to private field directly */
// Code line bellow will throw an error. Uncomment to see */
Console.log(user.#email);