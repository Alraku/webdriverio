const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#sign-username');
    }

    get inputPassword() {
        return $('#sign-password');
    }

    get btnSignUp() {
        return $('#signin2')
    }

    get btnSubmit() {
        return $('button=Sign up');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async signUp(username, password) {
        await this.btnSignUp.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        browser.maximizeWindow()
        return super.open('');
    }


}

module.exports = new LoginPage();
