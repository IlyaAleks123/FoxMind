/** ### POLIMORPHISM ### */

class User{

    email;
    firstName;
    lastName;
    phone;

    constructor(params){
        this.email = params.email;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.phone = params.phone;
    }

    greeting(){
        console.log(`Hi! My name is ${this.firstName}`)
    }
}

class Moderator extends User{
    isModerator = true;

    /** Override method from parent class */
    greeting(){
        console.log(`Hi! My name is ${this.firstName}. I am a moderator!`)
    }
}

const user = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
});
const mod = new Moderator({
    email: 'ashlee.chace@gmail.com',
    firstName: "Ashlee",
    lastName: 'Chace',
});

const userOrModerator = mod;

/** For 'Moderator' and 'ContentManager' 'greeting' works differently */
userOrModerator.greeting();