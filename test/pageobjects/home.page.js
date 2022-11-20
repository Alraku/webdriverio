const Page = require('./page');
const { presenceOf } = require('wdio-wait-for');
const { HomePageLocators,
        LoginDialogLocators,
        SignUpDialogLocators } = require('./locators')

class LoginPage extends Page {
 
    async signUp(username, password) {
        await SignUpDialogLocators.btnSignUp.click();
        await SignUpDialogLocators.signInInputUsername.setValue(username);
        await SignUpDialogLocators.signInInputPassword.setValue(password);
        await SignUpDialogLocators.signUpBtnSubmit.click();
        await browser.pause(1000);
    }

    async logIn(username, password) {
        await LoginDialogLocators.btnLogIn.click();
        await LoginDialogLocators.logInInputUsername.setValue(username);
        await LoginDialogLocators.logInInputPassword.setValue(password);
        await LoginDialogLocators.logInBtnSubmit.click();

        browser.waitUntil(presenceOf(HomePageLocators.navLinkUser), 
            {timeout: 5000, timeoutMsg: 'Failed after waiting for the element to be present'});
    }

    async filterPhones() {
        await HomePageLocators.filterPhones.click();
    }

    async selectItem(itemId) {
        await HomePageLocators.itemLabel(itemId + 1).click()
        await browser.pause(3000) //wait for page to load
    }

    async goToCart() {
        await HomePageLocators.navLinkCart.click()
        await browser.pause(3000) //wait for page to load
    }

    get getCurrentUser() {
        return HomePageLocators.navLinkUser
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
