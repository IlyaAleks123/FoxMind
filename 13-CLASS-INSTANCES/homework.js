class Product{
    id;
    name;
    description;
    price = [USD, EUR, PL];
    weight;
    size;

    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.price = params.price;
        this.weight = params.weight;
        this.size = params.size;
    }
};

class Cart{
    product = [
        apples,
        cheese,
        bread
    ]

    constructor(params){
        this.product = params.product;
    }

    addToCart(product){
        this.addToCart = true;
    }

    deleteToCart(product){
        this.product = true;
    }
}