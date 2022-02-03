class ApplicationDetailsPage{

    applicationStatus(){
        return cy.get('[data-testid="workflow_status_sticker"]');
    }
    
}
export default ApplicationDetailsPage;