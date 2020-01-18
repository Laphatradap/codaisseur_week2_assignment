class ShoppingCart {
    constructor() {
      this.cart = []
    }
    
    addItem(itemName, quantity, price) {
      this.cart.push(
        {
          name: itemName,
          quantity: quantity,
          pricePerUnit: price
        }
      )
    }

    getItems() {
      return this.cart
    }   

    clear() {
      this.cart = []
    }

    total() {
      const total = this.cart.reduce((acc, current) => {
        const subTotal = current.pricePerUnit *current.quantity
        return acc + subTotal
      }, 0)
      return total
    }
  }


module.exports = ShoppingCart;

