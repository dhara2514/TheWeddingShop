@smoke

Feature: Use the website to find products So that I can build a personalised gift list
         As a customer with an upcoming wedding
         I want to be able to find products to my taste

  Background:
    Given user is on the homepage

  Scenario: Search for products by description and budget


    When user clicks on search icon
    And user enters 'candles' in search form
    And user clicks on 'candles and diffuser'
    And user navigates to candles and diffuser page
    And user selects £20-£39 price range
    Then user should see products priced between £20-£39
