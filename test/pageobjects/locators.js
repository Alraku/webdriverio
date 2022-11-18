class HomePageLocators {

    get navLinkUser() {
        return $('#nameofuser')
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
    HomePageLocators : new HomePageLocators
  }