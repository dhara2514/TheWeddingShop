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
  "duration": 58195214408,
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
  "duration": 3961903366,
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
  "duration": 774393180,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 342732181,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 2306607272,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 266522492,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 6290016531,
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
  "duration": 4713568126,
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
  "duration": 596485,
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
  "duration": 2776952770,
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
  "duration": 2273193026,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 5893397489,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 1427102178,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 7309411943,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 3380545967,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "duration": 1318450354,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "duration": 1295549926,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "duration": 1597526127,
  "status": "passed"
});
formatter.after({
  "duration": 1140654705,
  "status": "passed"
});
formatter.before({
  "duration": 13795362113,
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
  "duration": 58074983,
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
  "duration": 525329678,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 88186599,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 1383966006,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 219558224,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 7420638547,
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
  "duration": 5103058906,
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
  "duration": 254933,
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
  "duration": 5160015222,
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
  "duration": 382924927,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 6006569956,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 4167301125,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 6647455578,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 2632663734,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "duration": 1225121175,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "duration": 963967459,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "duration": 1201907521,
  "status": "passed"
});
formatter.after({
  "duration": 1166964088,
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
  "duration": 12380488494,
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
  "duration": 42212915,
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
  "duration": 440211302,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.user_clicks_on_Not_registered_yet()"
});
formatter.result({
  "duration": 5579680837,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.user_enters_all_the_details()"
});
formatter.result({
  "duration": 11259496859,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 192511546,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationStepDefs.user_should_be_able_to_see_start_building_your_list_message()"
});
formatter.result({
  "duration": 5094984805,
  "status": "passed"
});
formatter.after({
  "duration": 983988502,
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
    }
  ]
});
formatter.before({
  "duration": 10782360546,
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
  "duration": 199937847,
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
  "duration": 247972751,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_enters_candles_in_search_form()"
});
formatter.result({
  "duration": 704974308,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_clicks_on_candles_and_diffuser()"
});
formatter.result({
  "duration": 2073348367,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_navigates_to_candles_and_diffuser_page()"
});
formatter.result({
  "duration": 114950838,
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
  "duration": 3611191094,
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
  "duration": 11430487734,
  "status": "passed"
});
formatter.after({
  "duration": 1294623794,
  "status": "passed"
});
});