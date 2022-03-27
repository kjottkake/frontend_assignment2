//selects items of html document using query selector
let item1 = document.querySelector("#item1")
let item2 = document.querySelector("#item2")
let item3 = document.querySelector("#item3")

//selects prices of html document using query selector
let price1 = document.querySelector("#price1")
let price2 = document.querySelector("#price2")
let price3 = document.querySelector("#price3")

//selects quantity of html document using query selector
let quantity1 = document.querySelector("#quantity1")
let quantity2 = document.querySelector("#quantity2")
let quantity3 = document.querySelector("#quantity3")

//selects item in cart using query selector
let itemsInCart = document.querySelector("#cartItems");
//selects price in cart
let price = document.querySelector("#totalPrice");


//Creating the template for the objects that are Items in the store.
function Item(id, name, isFruit, inStock, quantity, price){
    this.id = id;
    this.name = name;
    this.isFruit = isFruit;
    this.inStock = inStock;
    this.quantity = quantity;
    this.price = price;
    //function to display number of eggs in stock.
    this.displayInventory = function() {
       console.log("Number of " + this.name + " " + this.quantity);
    }
}

//function which generates a random number somwhere between min and max values. this will be used to generate prices (totally what rema1000 uses as well ;)
let priceOfDay = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
} 


//creating objects from template
let tomato = new Item(1, "tomato", true, true, 100, priceOfDay(5, 7));
let potato = new Item(2, "potato", false, true, 100, priceOfDay(1, 5));
let egg = new Item(3, "eggs", false, true, 12, priceOfDay(1, 100));

//defining and setting cart values
let cart = {
    countItems : 0,
    totalPrice : 0
}

//test function which logs an inventory count of all items.
var inventory = () =>{
    console.log("There are currently eggs, tomatoes, and potatoes in stock.")
    console.log("Number of " + egg.name + " " + egg.quantity);
    console.log("Number of " + potato.name + " " + potato.quantity);
    console.log("Number of " + tomato.name + " " + tomato.quantity);
}

//checks quantity of item (object) and outputs it.
let checkQuantity = (n) => {
    if (n.quantity == 0){
        n.inStock = false;
        console.log(n.name + " are sold out");
        //window object method alerts user that the item is now sold out. 
        alert(n.name+ " are sold out!");
    }
}

//an item is sold, and the quantity is subtracted.
let itemSold = (n) => {
    //quantity of item is subtracted by 1.
    n.quantity = n.quantity - 1;
    //adds price of item into cart.
    cart.countItems = cart.countItems + 1;
    cart.totalPrice = cart.totalPrice + n.price;
    //calls on updateCart function and updates the html of the instock items
    updateCart();
    console.log("There are " + n.quantity + " " + n.name + " in stock.")
    quantity1.innerHTML = potato.quantity + " in stock";
    quantity2.innerHTML = tomato.quantity + " in stock";
    quantity3.innerHTML = egg.quantity + " in stock";
    //calls on the checkQuantity function which checks to see if the item is sold out.
    checkQuantity(n)
}

//updates cart function, displays total price and number of items in cart
let updateCart = () =>{
    console.log("Items in cart: " + cart.countItems)
    console.log("Price of all items in cart: " + cart.totalPrice)
    itemsInCart.innerHTML = cart.countItems + " Items in cart";
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
quantity1.innerHTML = potato.quantity + " in stock";
quantity2.innerHTML = tomato.quantity + " in stock";
quantity3.innerHTML = egg.quantity + " in stock";

//this is the implementing the buildin method of document.lastModified, to see when the document was modified last. 
let lastMod = document.lastModified;
document.getElementById("mod").innerHTML = lastMod;