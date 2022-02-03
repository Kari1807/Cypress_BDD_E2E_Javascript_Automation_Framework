/// <reference types ="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../integration/pageObjects/LoginPage";
import LandingPage from "../../integration/pageObjects/LandingPage";
import NavigationPage from "../../integration/pageObjects/NavigationPage";

const loginPage = new LoginPage();
const landingPage = new LandingPage();
const navigationPage = new NavigationPage();

Given('the user is on the Back Office Portal SignIn page',()=>{
    navigationPage.navigateToBackOfficePortalSignInPage();
})

When('the user enters username and password',()=>{
    loginPage.login();
})

Then('the user should be able to validate the header name on the landing Page',()=>{
    landingPage.headerName().should('have.text', 'Applications');   
})

And('the user should see a new button on the package',()=>{
   landingPage.newButton().should('exist');
})

And('the user should be able to successfully logout from the application',()=>{
    navigationPage.displayApplicationMenu();
    navigationPage.logOutfromApplication();
    navigationPage.signInPage().should('have.text', 'Sign in');     
})

