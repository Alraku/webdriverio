const Page = require('./page');
const { CartPageLocators, OrderDialogLocators } = require('./locators')


class CartPage extends Page {
 
    get cartItemName() {
        return CartPageLocators.cartItemName
    }

    get cartTotalValue() {
        return CartPageLocators.cartTotal
    }

    async placeOrder() {
        await CartPageLocators.btnPlaceOrder.click();
        const orderDialog = await OrderDialogLocators.orderDialog
        await orderDialog.waitForExist({ timeout: 5000 })
    }

    async fillInData(user) {
        await OrderDialogLocators.inputName.setValue(`${user.firstName} ${user.lastName}`)
        await OrderDialogLocators.inputCountry.setValue(user.location.country)
        await OrderDialogLocators.inputCity.setValue(user.location.city)
        await OrderDialogLocators.inputCreditCard.setValue(user.creditCard.number)
        await OrderDialogLocators.inputMonth.setValue(user.creditCard.month)
        await OrderDialogLocators.inputYear.setValue(user.creditCard.year)
    }

    async purchase() {
        await OrderDialogLocators.btnPurchase.click()
    }

    async getResponse() {
        const responseDialog = await OrderDialogLocators.responseDialog
        return await responseDialog.waitForExist({ timeout: 5000 })
    }
}

module.exports = new CartPage();
