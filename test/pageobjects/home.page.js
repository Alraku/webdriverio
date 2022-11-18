const Page = require('./page');
const { HomePageLocators,
        LoginDialogLocators,
        SignUpDialogLocators } = require('./locators')

class LoginPage extends Page {
 
    async signUp(username, password) {
        await SignUpDialogLocators.btnSignUp.click();
        await SignUpDialogLocators.signInInputUsername.setValue(username);
        await SignUpDialogLocators.signInInputPassword.setValue(password);
        await SignUpDialogLocators.signUpBtnSubmit.click();
        await browser.pause(3000);
    }

    async logIn(username, password) {
        await LoginDialogLocators.btnLogIn.click();
        await LoginDialogLocators.logInInputUsername.setValue(username);
        await LoginDialogLocators.logInInputPassword.setValue(password);
        await LoginDialogLocators.logInBtnSubmit.click();
        await browser.pause(5000);
    }

    get getCurrentUser() {
        return HomePageLocators.navLinkUser
    }

    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
