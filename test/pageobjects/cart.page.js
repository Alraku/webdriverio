const Page = require('./page');
const { CartPageLocators } = require('./locators')


class CartPage extends Page {
 
    get cartItemName() {
        return CartPageLocators.cartItemName
    }

    get cartTotalValue() {
        return CartPageLocators.cartTotal
    }
}

module.exports = new CartPage();
