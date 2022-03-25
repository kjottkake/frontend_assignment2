const item = [{
    id: 1,name: "milk",price: 29, quantity: 1, unit: "ltr"
}, {
    id: 2,name: "eggs", price: 100, quantity: 12, unit: "amount"
}, {
    id: 3,name: "butter", price: 45,  quantity: 200, unit: "gram"
}, {
    id: 4,name: "bread", price: 45,  quantity: 1, unit: "amount"
},{
    id: 5,name: "sausage", price: 45,  quantity: 400, unit: "gram"
},{
    id: 6,name: "ground-beef", price: 45,  quantity: 400, unit: "gram"
},{
    id: 7,name: "ground-pork", price: 45,  quantity: 400, unit: "gram"
}]

const tomato = new Object();
const potato = new Object();
const egg = new Object();
const butter = new Object();
const bread = new Object();

tomato.id = 1;
tomato.name = "tomato";
tomato.isFruit = true;
tomato.inStock = true;
tomato.quantity = 100;

potato.id = 2;
potato.name = "potato";
potato.isFruit = false;
potato.inStock = true;
potato.quantity = 100;

egg.id = 3;
egg.name = "eggs";
egg.isFruit = false;
egg.inStock = true;
egg.quantity = 100;

var inventory = () =>{
    console.log("There are currently eggs, tomatoes, and potatoes in stock.")
    console.log("Number of " + egg.name + " " + egg.quantity);
    console.log("Number of " + potato.name + " " + potato.quantity);
    console.log("Number of " + tomato.name + " " + tomato.quantity);

}

//checks quantity of item (object) and outputs it.
var checkQuantity = (n) => {
    console.log("There are " + n.quantity + " " + n.name + " in stock.")
}

//an item is sold, and the quantity is subtracted.
var itemSold = (n) => {
    n.quantity = n.quantity - 1;
    console.log("There are " + n.quantity + " " + n.name + " in stock.")
}