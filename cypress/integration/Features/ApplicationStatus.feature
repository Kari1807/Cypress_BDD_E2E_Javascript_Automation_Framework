Feature: Application status
	In order to use the application effectively
	As a registered user of the application
	I want to be able to filter the application by its status
	and verify the application status

@applicationstatus
Scenario: Filter the applications by status and verify individual Application status
	Given the user is on the Back Office Portal SignIn page
	And the user enters username and password
	When the user filters the application entries by status
	Then the user should be able to verify the status of the application in the first row
	And the user should be able to successfully logout from the application
	