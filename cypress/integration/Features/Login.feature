Feature: Login
	In order to use the application effectively
	As a registered user of the application
	I want to be able to log in to the application

@login
Scenario: Log In
	Given the user is on the Back Office Portal SignIn page
	When the user enters username and password
	Then the user should be able to validate the header name on the landing Page
	And the user should see a new button on the package
	And the user should be able to successfully logout from the application