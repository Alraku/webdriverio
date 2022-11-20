const HomePage = require('../pageobjects/home.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');
import { createUser, uniqueRandom } from '../../helpers';


describe('Full process of smartphone purchase in online store', () => {
    let user = null
    let phoneInfo = { name: null, price: null, itemId: uniqueRandom(7) }

    before(() => {
        user = createUser()
        console.log(user)
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

    it('should place an order and purchase', async () => {
        await HomePage.goToCart()
        await CartPage.placeOrder()
        await CartPage.fillInData(user)

        await CartPage.purchase()
        const response = await CartPage.getResponse()
        await expect(response).toEqual(true)
        // I could not fetch text items in p tag in order to verify order properties.
        // additional assertions should be done:
        
        //await expect(response.amount).toEqual(phoneInfo.price)
        //await expect(response.card).toEqual(user.creditCard.number)
        //await expect(response.name).toEqual(`${user.firstName} ${user.lastName}`)
    });
});