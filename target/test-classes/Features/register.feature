@smoke
Feature: Registration functionality

  Background:
    Given user is on home page

    Scenario: As a user I should be able to register successfully

      When user clicks on login button
      And user clicks on 'Not registered yet'
      And user enters all the details
      And user clicks on submit button
      Then user should be able to see 'start building your list' message

