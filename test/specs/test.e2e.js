const HomePage = require('../pageobjects/home.page');
import { createUserCredentials } from '../../helpers';


describe('Full process of smartphone purchase in online store', () => {
    let user = null
    before(() => {
        user = createUserCredentials()
    });

    it('should create new user account', async () => {
        await HomePage.signUp(user.email, user.password);
        await HomePage.isAlert();
        const alertText = await browser.getAlertText();
        expect(alertText).toEqual('Sign up successful.')
    });

    it('should login the user account', async () => {
        await HomePage.logIn(user.email, user.password);
        await expect(HomePage.getCurrentUser).toHaveTextContaining(`Welcome ${user.email}`);
    });
    //it('should add item to a cart', async () => {});
    //it('should place an order and purchase', async () => {});
});
