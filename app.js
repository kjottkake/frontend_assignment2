let item1 = document.querySelector("#item1")
let item2 = document.querySelector("#item2")
let item3 = document.querySelector("#item3")

let price1 = document.querySelector("#price1")
let price2 = document.querySelector("#price2")
let price3 = document.querySelector("#price3")

let quantity1 = document.querySelector("#quantity1")
let quantity2 = document.querySelector("#quantity2")
let quantity3 = document.querySelector("#quantity3")

let itemsInCart = document.querySelector("#cartItems");

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

tomato.id = 1;
tomato.name = "tomato";
tomato.isFruit = true;
tomato.inStock = true;
tomato.quantity = 100;
tomato.price = 5;

potato.id = 2;
potato.name = "potato";
potato.isFruit = false;
potato.inStock = true;
potato.quantity = 100;
potato.price = 2;

egg.id = 3;
egg.name = "eggs";
egg.isFruit = false;
egg.inStock = true;
egg.quantity = 100;
egg.price = 5;

let cart = {
    countItems : 0,
    totalPrice : 0
}

// let updateCart = () => {
//     itemsInCart.innerHTML = cart.countItems + " items in cart";
// }

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
    //quantity of item is subtracted by 1.
    n.quantity = n.quantity - 1;
    //adds price of item into cart.
    cart.countItems = cart.countItems + 1;
    cart.totalPrice = cart.totalPrice + n.price;
    checkCart();
    console.log("There are " + n.quantity + " " + n.name + " in stock.")
    quantity1.innerHTML = potato.quantity + " left";
    quantity2.innerHTML = tomato.quantity + " left";
    quantity3.innerHTML = egg.quantity + " left";
}

var checkCart = () =>{
    console.log("Number of items in cart: " + cart.countItems)
    console.log("Price of all items in cart: " + cart.totalPrice)
    itemsInCart.innerHTML = "Number of items in cart: " + cart.countItems;
}

item1.innerHTML = potato.name;
item2.innerHTML = tomato.name;
item3.innerHTML = egg.name;

price1.innerHTML = potato.price + " kr";
price2.innerHTML = tomato.price + " kr";
price3.innerHTML = egg.price + " kr";

quantity1.innerHTML = potato.quantity + " left";
quantity2.innerHTML = tomato.quantity + " left";
quantity3.innerHTML = egg.quantity + " left";