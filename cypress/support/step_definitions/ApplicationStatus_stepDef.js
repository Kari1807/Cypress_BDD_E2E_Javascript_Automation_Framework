/// <reference types ="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../../integration/pageObjects/LandingPage";
import ApplicationDetailsPage from "../../integration/pageObjects/ApplicationDetailsPage";

const landingPage = new LandingPage();
const applicationDetailsPage = new ApplicationDetailsPage();

When('the user filters the application entries by status',()=>{
    landingPage.clickStatusButton();
    
    // Data fixture to pass on Appllication Status to filter the records
    cy.fixture('ApplicationStatus').then((app)=>{
        cy.selectStatusType(app.status);
        cy.wrap(app.status).as('Status');
    })
    
    landingPage.clickApplyButton();
    // Explicit wait condition to make sure results are loaded before clicking on first row
    landingPage.searchedResultCount().should('be.visible')
        .should('contain.text', 'results');
})

Then('the user should be able to verify the status of the application in the first row',()=>{
    landingPage.selectFirstRowFromSearchedResult();
    
    // Validating the status against the selected filter value defined in Data fixture - ApplicationStatus
    cy.get('@Status').then((appStatus)=>{
        applicationDetailsPage.applicationStatus().should('have.text', appStatus);
    })
})

