class NavigationPage{

    navigateToBackOfficePortalSignInPage(){
        cy.visit('');
    }

    signInPage(){
        return cy.get('h4[data-testid="headline"]');
    }

    applicationMenu(){
        return cy.get('[data-testid="button_masthead_toggle_menu"]');
    }

    displayApplicationMenu(){
        this.applicationMenu().click(); 
    }

    logOutButton(){
        return cy.get('[data-testid="list_item_logout"]');
    }

    logOutfromApplication(){
        this.logOutButton().click();
    }
}
export default NavigationPage;