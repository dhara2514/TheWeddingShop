$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/personalisedgiftlist.feature");
formatter.feature({
  "line": 2,
  "name": "Create personalised gift list and add to basket",
  "description": "",
  "id": "create-personalised-gift-list-and-add-to-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "As a user I should be able to create a personalised gift list and add product to basket",
  "description": "",
  "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user navigates to login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters valid email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027login\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user navigates to dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on product category \"\u003cProduct category\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user navigates to product category page \"\u003cProduct category page\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects product quantity \"\u003cQuantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on add to list \"\u003cAdd to List\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Your List\u0027 under account link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user verifies products added to list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on \u0027place an order\u0027 under account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user selects quantity for every product",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on \u0027add to order\u0027 for every product",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on \u0027view basket\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verifies products added to the \u0027basket\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket;",
  "rows": [
    {
      "cells": [
        "Product category",
        "Product category page",
        "Quantity",
        "Add to List"
      ],
      "line": 28,
      "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket;;1"
    },
    {
      "cells": [
        "stove top kettles",
        "stove top kettles page",
        "2 kettles",
        "Le\u0027Xpress Whistling"
      ],
      "line": 29,
      "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket;;2"
    },
    {
      "cells": [
        "vases",
        "vases page",
        "2 vases",
        "neptune vase"
      ],
      "line": 30,
      "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9939166900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 281242800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "As a user I should be able to create a personalised gift list and add product to basket",
  "description": "",
  "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user navigates to login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters valid email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027login\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user navigates to dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on product category \"stove top kettles\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user navigates to product category page \"stove top kettles page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects product quantity \"2 kettles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on add to list \"Le\u0027Xpress Whistling\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Your List\u0027 under account link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user verifies products added to list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on \u0027place an order\u0027 under account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user selects quantity for every product",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on \u0027add to order\u0027 for every product",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on \u0027view basket\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verifies products added to the \u0027basket\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 313305600,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 164955600,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 800500000,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 255143700,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 3516782300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stove top kettles",
      "offset": 33
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_product_category(String)"
});
formatter.result({
  "duration": 2253959200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stove top kettles page",
      "offset": 41
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_product_category_page(String)"
});
formatter.result({
  "duration": 126100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 kettles",
      "offset": 31
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_selects_product_quantity(String)"
});
formatter.result({
  "duration": 1152917900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Le\u0027Xpress Whistling",
      "offset": 28
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_list(String)"
});
formatter.result({
  "duration": 3392835900,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 4084997400,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 383347800,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 6055377200,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 3493194100,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "duration": 851511800,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "duration": 540953900,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "duration": 969854700,
  "status": "passed"
});
formatter.after({
  "duration": 738774000,
  "status": "passed"
});
formatter.before({
  "duration": 6254688500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 8549900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "As a user I should be able to create a personalised gift list and add product to basket",
  "description": "",
  "id": "create-personalised-gift-list-and-add-to-basket;as-a-user-i-should-be-able-to-create-a-personalised-gift-list-and-add-product-to-basket;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user navigates to login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters valid email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on \u0027login\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user navigates to dashboard page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on product category \"vases\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user navigates to product category page \"vases page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects product quantity \"2 vases\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user clicks on add to list \"neptune vase\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Your List\u0027 under account link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user verifies products added to list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user clicks on \u0027place an order\u0027 under account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user selects quantity for every product",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks on \u0027add to order\u0027 for every product",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user clicks on \u0027view basket\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user verifies products added to the \u0027basket\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 275325000,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 48742600,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 712835200,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 199802000,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 4997826000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vases",
      "offset": 33
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_product_category(String)"
});
formatter.result({
  "duration": 3276236400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vases page",
      "offset": 41
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_product_category_page(String)"
});
formatter.result({
  "duration": 97300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 vases",
      "offset": 31
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_selects_product_quantity(String)"
});
formatter.result({
  "duration": 3513088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neptune vase",
      "offset": 28
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_list(String)"
});
formatter.result({
  "duration": 246023100,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 3629389500,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 1823060400,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 6167143900,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 3325294600,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "duration": 576582600,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "duration": 738780800,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "duration": 960938000,
  "status": "passed"
});
formatter.after({
  "duration": 744295200,
  "status": "passed"
});
formatter.uri("src/test/Resources/Features/register.feature");
formatter.feature({
  "line": 2,
  "name": "Registration functionality",
  "description": "",
  "id": "registration-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 6053931100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "RegistrationStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 7631100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "As a user I should be able to register successfully",
  "description": "",
  "id": "registration-functionality;as-a-user-i-should-be-able-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on \u0027Not registered yet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters all the details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to see \u0027start building your list\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 227119800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.user_clicks_on_Not_registered_yet()"
});
formatter.result({
  "duration": 5271434700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.user_enters_all_the_details()"
});
formatter.result({
  "duration": 7247327400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 181456200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.user_should_be_able_to_see_start_building_your_list_message()"
});
formatter.result({
  "duration": 4386674700,
  "status": "passed"
});
formatter.after({
  "duration": 724039800,
  "status": "passed"
});
formatter.uri("src/test/Resources/Features/searchproduct.feature");
formatter.feature({
  "line": 3,
  "name": "Use the website to find products So that I can build a personalised gift list",
  "description": "       As a customer with an upcoming wedding\r\n       I want to be able to find products to my taste",
  "id": "use-the-website-to-find-products-so-that-i-can-build-a-personalised-gift-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 6156685200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductStepdefs.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 12467900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search for products by description and budget",
  "description": "",
  "id": "use-the-website-to-find-products-so-that-i-can-build-a-personalised-gift-list;search-for-products-by-description-and-budget",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user clicks on search icon",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters \u0027candles\u0027 in search form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on \u0027candles and diffuser\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigates to candles and diffuser page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user selects £20-£39 price range",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should see products priced between £20-£39",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductStepdefs.user_clicks_on_search_icon()"
});
formatter.result({
  "duration": 154483600,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_enters_candles_in_search_form()"
});
formatter.result({
  "duration": 315354900,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_clicks_on_candles_and_diffuser()"
});
formatter.result({
  "duration": 1798747700,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_navigates_to_candles_and_diffuser_page()"
});
formatter.result({
  "duration": 79020200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 14
    },
    {
      "val": "39",
      "offset": 18
    }
  ],
  "location": "SearchProductStepdefs.user_selects_£_£_price_range(int,int)"
});
formatter.result({
  "duration": 3154377300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 41
    },
    {
      "val": "39",
      "offset": 45
    }
  ],
  "location": "SearchProductStepdefs.user_should_see_products_priced_between_£_£(int,int)"
});
formatter.result({
  "duration": 8524562400,
  "status": "passed"
});
formatter.after({
  "duration": 813031200,
  "status": "passed"
});
});