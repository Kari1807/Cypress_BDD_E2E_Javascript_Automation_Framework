## Cypress BDD(Gherkin) E2E Test Automation Framework

## Overview
* This E2E BDD Test Automation Framework in JavaScript is using (Cypress, cypress-cucumber-preprocessor, multiple-cucumber-html-reporter).
* **Languages:** JavaScript/Node.JS
* **Build/Dependency Management:** npm
* **Testing Frameworks:** Cypress
* **BDD Library:** cypress-cucumber-preprocessor
* **Assertion Lib:** Cypress (inbuild Chai)
* **Reporting:** multiple-cucumber-html-reporter

## Pre-requisites
* Install latest [Node.JS](https://nodejs.org/en/download/)
* Install latest [Visual Studio Code](https://code.visualstudio.com/download)
* Check access for Application Under Test [nextgenbo](https://nextgenbo.demo.devtls.net/auth/login)

## Setup Project
* Clone the source code from git as per below command.<br />
```git clone https://github.com/Kari1807/Cypress_BDD_E2E_Javascript_Automation_Framework.git```
* Import the Project into Visual Studio Code 
* Open Terminal and Navigate to Project Directory
* Run `npm install` to download all the dependencies / libraries.
* Run `npm run cypress:open:local` to run the test using Cypress Runner in headed mode 
* Run `npm run cypress:run:local` to run all the test using Cypress CLI headless mode
* Run `npm run cypress:run:generate-report` to run all the test in CLI mode and generate cucumber html report
* Run `npm run cypress:run:tags` to execute the tests based on smart cucumber tagging
* Run `npm run cypress:run:feature` to execute the test for a particular feature
* Run `npm run generate-report` to generate cucumber html report independently after test execution

## Results
* CLI Results
![Results1](./Cypress_CLI_Report.PNG)

* cypress/cucumber-json and reports folders will be created automatically after first run.
* HTML Report Path `./reports/cucumber-html/index.html` <br />
![Results2](./Cucumber_Report.PNG)