const ShoppingCart = require('./ShoppingCart');

const cart = new ShoppingCart()

cart.addItem("Milk", 1, 1.50) //1.50
cart.addItem("Bread", 3, 5) //15 ==> 16.50

const addedItems = cart.getItems()
//console.log("added", addedItems)

//cart.clear()
//const lackThereof = cart.getItems()
//console.log("removed", lackThereof)
console.log(cart.total())