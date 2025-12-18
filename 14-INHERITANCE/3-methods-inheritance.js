class User{

    email;
    firstName;
    lastName;
    phone;
    cart = [];
    isAuthorized = false;

    constructor(params){
        this.email = params.email;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.phone = params.phone;
    }

    authorize(){
        this.isAuthorized = true;
    }

        logout(){
        this.isAuthorized = false;
    }

    addToCart(product){
        if(this.isAuthorized){
            this.cart.push(product);
        }
        else{
            throw new Error('Use is not authorized');
        }
    }
}

class UserModerator extends User {

    moderatedItems;

    constructor(params){
        super(params); // use 'super' to call parent class constructor
        this.moderatedItems = params.moderatedItems;
    }
    /** this method will be available only for 'UserModerator' */
    moderate(coment){
         coment.isModerated = true;
    }

}

const user = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
    phone: '+380676198062',
    moderatedItems: 123
});

const moderator = new UserModerator({
    email: 'ashlee.chace@gmail.com',
    firstName: "Ashlee",
    lastName: 'Chace',
    phone: '+1089416456864',
    moderatedItems: 123
});

const coment = {
    text: 'Your laptop doesn\'t work!',
}

//user.moderate(coment);
moderator.moderate(coment);
console.log(coment);


