const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');
import { createUserCredentials, uniqueRandom } from '../../helpers';


describe('Full process of smartphone purchase in online store', () => {
    let user = null
    let phoneInfo = { name: null, price: null, itemId: uniqueRandom(7) }

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

    it('should add item to a cart', async () => {
        await HomePage.filterPhones();
        await HomePage.selectItem(phoneInfo.itemId);

        phoneInfo.name = await ProductPage.itemNameValue
        phoneInfo.price = await ProductPage.itemPriceValue

        await ProductPage.addToCart()
        await ProductPage.isAlert()

        const alertText = await browser.getAlertText();
        expect(alertText).toEqual('Product added.')

        await HomePage.goToCart()
        const cartItem = await CartPage.cartItemName
        const cartTotal = await CartPage.cartTotalValue

        await expect(cartItem).toHaveTextContaining(phoneInfo.name);
        await expect(cartTotal).toHaveTextContaining(phoneInfo.price.replace(/[^0-9]/g, ''));
    });
    //it('should place an order and purchase', async () => {});
});
//*[@id="tbodyid"]/tr/td[2]