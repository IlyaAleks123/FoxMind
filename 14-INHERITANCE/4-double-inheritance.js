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

class UserAdmin extends UserModerator {

    constructor(params){
        super(params);
        this.isAdmin = true;
    }

    deleteUser(user){
        user.isDeleted = true;
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

const admin = new UserAdmin({
    email: 'johm.brook@gmail.com',
    firstName: "John",
    lastName: 'Brook',
    phone: '+780934929344',
    moderatedItems: 123
});

const comment = {
    text: 'Your laptop doesn\'t work!',
}

/** 'authorize' is available in all instances */
// user.authorize();
// moderator.authorize();
// admin.authorize();
// console.log(user);
// console.log(moderator);
// console.log(admin);

/** 'moderate' is available for 'moderator' and 'admin' */
// user.moderate(comment); // Cause of error. Uncomment to see.
// moderator.moderate(comment);
// admin.moderate(comment);
// console.log(comment);

/** 'deleteUser' is available only for 'admin'*/
// user.deleteUser(admin); // Cause of error. Uncomment to see.
// moderator.deleteUser(user);  // Cause of error. Uncomment to see.
admin.deleteUser(user);
console.log(user);