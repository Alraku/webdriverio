const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
import { generatePassword, createUserCredentials } from '../../helpers';


describe('Register user to online store', () => {
    it('should register new user account', async () => {
        let user = createUserCredentials()
        await LoginPage.open();
        await LoginPage.signUp(user.email, user.password);
        await LoginPage.isAlert()
        const alertText = await browser.getAlertText();
        expect(alertText).toEqual('Sign up successful.')
    });
});


// await expect(SecurePage.flashAlert).toBeExisting();
// await expect(SecurePage.flashAlert).toHaveTextContaining(
//     'You logged into a secure area!');