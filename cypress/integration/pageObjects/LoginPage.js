class LoginPage{

    emailAddressInput(){
        return cy.get('#inputId-1');
    }

    passwordInput(){
        return cy.get('#password');
    }

    signInButton(){
        return cy.get('#auth_login_form_button');
    }

    login(){
        // Input Username and Password from Fixture file - LoginUser
        cy.fixture('LoginUser').then((user)=>{
            this.emailAddressInput().clear()
                .type(user.email);
            this.passwordInput().clear()
                .type(user.password);
        })
        this.signInButton().click({force:true});
    }
}
export default LoginPage;