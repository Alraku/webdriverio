class CartPageLocators {

    get cartItemName() {
        return $('//*[@id="tbodyid"]/tr/td[2]')
    }

    get cartTotal() {
        return $('#totalp')
    }
}

class ProductPageLocators {

    get btnAddtoCart() {
        return $('a=Add to cart')
    }

    get itemPrice() {
        return $('[class="price-container"]')
    }

    get itemName() {
        return $('[class="name"]')
    }
}

class HomePageLocators {

    get navLinkUser() {
        return $('#nameofuser')
    }

    get navLinkCart() {
        return $('#cartur')
    }

    get filterPhones() {
        return $(`[onclick="byCat('phone')"]`)
    }

    itemLabel(number) {
        return $(`[href="prod.html?idp_=${number}"]`)
    }
}

class LoginDialogLocators {

    get logInInputUsername() {
        return $('#loginusername');
    }

    get logInInputPassword() {
        return $('#loginpassword');
    }

    get btnLogIn() {
        return $('#login2')
    }

    get logInBtnSubmit() {
        return $('button=Log in');
    }
}

class SignUpDialogLocators {

    get signInInputUsername() {
        return $('#sign-username');
    }

    get signInInputPassword() {
        return $('#sign-password');
    }

    get btnSignUp() {
        return $('#signin2')
    }

    get signUpBtnSubmit() {
        return $('button=Sign up');
    }
}

module.exports = {
    SignUpDialogLocators : new SignUpDialogLocators,
    LoginDialogLocators : new LoginDialogLocators,
    HomePageLocators : new HomePageLocators,
    ProductPageLocators : new ProductPageLocators,
    CartPageLocators : new CartPageLocators
  }