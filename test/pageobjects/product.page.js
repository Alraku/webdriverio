const Page = require('./page');
const { presenceOf } = require('wdio-wait-for');
const { ProductPageLocators } = require('./locators')


class ProductPage extends Page {

    async addToCart() {
        await ProductPageLocators.btnAddtoCart.click();
        await browser.pause(3000) //wait for add to cart
    }

    open() {
        return super.open('');
    }
    
    get itemPriceValue() {
        return ProductPageLocators.itemPrice.getText()
    }

    get itemNameValue() {
        return ProductPageLocators.itemName.getText()
    }

    get cartItemName() {
        return ProductPageLocators.cartItemName
    }

    get cartTotalValue() {
        return ProductPageLocators.cartTotal
    }
}

module.exports = new ProductPage();
