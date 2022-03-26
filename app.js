//selects items using query selector
let item1 = document.querySelector("#item1")
let item2 = document.querySelector("#item2")
let item3 = document.querySelector("#item3")

//selects prices using query selector
let price1 = document.querySelector("#price1")
let price2 = document.querySelector("#price2")
let price3 = document.querySelector("#price3")

//selects quantity using query selector
let quantity1 = document.querySelector("#quantity1")
let quantity2 = document.querySelector("#quantity2")
let quantity3 = document.querySelector("#quantity3")

//selects item in cart using query selector
let itemsInCart = document.querySelector("#cartItems");
//selects price in cart
let price = document.querySelector("#totalPrice");

//declaring objects
const tomato = new Object();
const potato = new Object();
const egg = new Object();

//defining tomato object values
tomato.id = 1;
tomato.name = "tomato";
tomato.isFruit = true;
tomato.inStock = true;
tomato.quantity = 100;
tomato.price = 5;

//defining potato object values
potato.id = 2;
potato.name = "potato";
potato.isFruit = false;
potato.inStock = true;
potato.quantity = 100;
potato.price = 2;

//defining egg object values
egg.id = 3;
egg.name = "eggs";
egg.isFruit = false;
egg.inStock = true;
egg.quantity = 100;
egg.price = 5;

//defining and setting cart values
let cart = {
    countItems : 0,
    totalPrice : 0
}

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
    updateCart();
    console.log("There are " + n.quantity + " " + n.name + " in stock.")
    quantity1.innerHTML = potato.quantity + " left";
    quantity2.innerHTML = tomato.quantity + " left";
    quantity3.innerHTML = egg.quantity + " left";
}

var updateCart = () =>{
    console.log("Number of items in cart: " + cart.countItems)
    console.log("Price of all items in cart: " + cart.totalPrice)
    itemsInCart.innerHTML = "Number of items in cart: " + cart.countItems;
    price.innerHTML = "Total: " + cart.totalPrice + ",- kr";
}

//display of item in html
item1.innerHTML = potato.name;
item2.innerHTML = tomato.name;
item3.innerHTML = egg.name;
//sets price of item in html
price1.innerHTML = potato.price + " kr";
price2.innerHTML = tomato.price + " kr";
price3.innerHTML = egg.price + " kr";

//displays number of items left in html
quantity1.innerHTML = potato.quantity + " left";
quantity2.innerHTML = tomato.quantity + " left";
quantity3.innerHTML = egg.quantity + " left";