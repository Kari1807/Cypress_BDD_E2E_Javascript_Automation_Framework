class LandingPage{

    headerName(){
        return cy.get('h3[data-testid="headline"]');
    }

    newButton(){
        return cy.get('#widget_application_list_header_new');
    }

    statusButton(){
        return cy.get('#toggle_filter_menu[data-testid="workflowInfo.status"]');
    }

    statusListSearchBox(){
        return cy.get('[data-testid="design_select_option_"]');  
    }

    searchedResultIndex(){
        return  cy.get('[role="listbox"] > div').find('div[id$="option-0"]');
    }

    clickStatusButton(){
        this.statusButton().click();
    }

    applyButton(){
        return cy.get('#filter_container_apply');
    }

    clickApplyButton(){
        this.applyButton().click();
    }

    searchedResultCount(){
        return cy.get('[data-testid="filter_strap_id"] > div > div > span');
    }

    selectFirstRowFromSearchedResult(){
        return cy.get('tbody > tr').first().then(element =>{
            cy.wrap(element).click();   
        })      
    }   
}
export default LandingPage;