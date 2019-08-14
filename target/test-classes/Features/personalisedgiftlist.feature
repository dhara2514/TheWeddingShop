@sanity
  Feature: Create personalised gift list and add to basket

    Background:
      Given user is on home page

      Scenario Outline: As a user I should be able to create a personalised gift list and add product to basket

        When user clicks on login button
        And user navigates to login page
        And user enters valid email address and password
        And user clicks on 'login'
        And user navigates to dashboard page
        And user clicks on product category "<Product category>"
        And user navigates to product category page "<Product category page>"
        And user selects product quantity "<Quantity>"
        And user clicks on add to list "<Add to List>"
        And user clicks on 'Your List' under account link
        And user verifies products added to list
        And user clicks on 'place an order' under account link
        And user selects quantity for every product
        And user clicks on 'add to order' for every product
        And user clicks on 'view basket'
        Then user verifies products added to the 'basket'


        Examples:
        |Product category | Product category page|Quantity |   Add to List   |
        |stove top kettles|stove top kettles page|2 kettles|traditional kettle|
        |vases            |    vases page        |2 vases  |   neptune vase   |




