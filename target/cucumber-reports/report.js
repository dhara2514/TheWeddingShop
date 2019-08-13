$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Features/personalisedgiftlist.feature");
formatter.feature({
  "line": 2,
  "name": "Personalised gift list",
  "description": "",
  "id": "personalised-gift-list",
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
  "name": "As a user I should be able to add product to cart from my personalised gift list",
  "description": "",
  "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list",
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
  "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list;",
  "rows": [
    {
      "cells": [
        "Product category",
        "Product category page",
        "Quantity",
        "Add to List"
      ],
      "line": 28,
      "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list;;1"
    },
    {
      "cells": [
        "stove top kettles",
        "stove top kettles page",
        "2 kettles",
        "traditional kettle"
      ],
      "line": 29,
      "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list;;2"
    },
    {
      "cells": [
        "vases",
        "vases page",
        "2 vases",
        "neptune vase"
      ],
      "line": 30,
      "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34874472270,
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
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 17441961273,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "As a user I should be able to add product to cart from my personalised gift list",
  "description": "",
  "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list;;2",
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
  "name": "user clicks on add to list \"traditional kettle\"",
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
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 586076321,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 390496274,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 611704958,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 291052453,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5008111144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stove top kettles",
      "offset": 33
    }
  ],
  "location": "personalisedGiftListStepDefs.user_clicks_on_product_category(String)"
});
formatter.result({
  "duration": 2368525413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stove top kettles page",
      "offset": 41
    }
  ],
  "location": "personalisedGiftListStepDefs.user_navigates_to_product_category_page(String)"
});
formatter.result({
  "duration": 146557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 kettles",
      "offset": 31
    }
  ],
  "location": "personalisedGiftListStepDefs.user_selects_product_quantity(String)"
});
formatter.result({
  "duration": 1578436460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "traditional kettle",
      "offset": 28
    }
  ],
  "location": "personalisedGiftListStepDefs.user_clicks_on_add_to_list(String)"
});
formatter.result({
  "duration": 244843402,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 3464031071,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 1715513476,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 6161501584,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 1754605675,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "duration": 519514694,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "duration": 733092958,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "duration": 1177427062,
  "status": "passed"
});
formatter.after({
  "duration": 173652,
  "status": "passed"
});
formatter.before({
  "duration": 36049094219,
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
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 5794143,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "As a user I should be able to add product to cart from my personalised gift list",
  "description": "",
  "id": "personalised-gift-list;as-a-user-i-should-be-able-to-add-product-to-cart-from-my-personalised-gift-list;;3",
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
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 355678868,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 17493271,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 1848713909,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 260045535,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 7915171674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vases",
      "offset": 33
    }
  ],
  "location": "personalisedGiftListStepDefs.user_clicks_on_product_category(String)"
});
formatter.result({
  "duration": 2463851262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vases page",
      "offset": 41
    }
  ],
  "location": "personalisedGiftListStepDefs.user_navigates_to_product_category_page(String)"
});
formatter.result({
  "duration": 99757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 vases",
      "offset": 31
    }
  ],
  "location": "personalisedGiftListStepDefs.user_selects_product_quantity(String)"
});
formatter.result({
  "duration": 1958891305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neptune vase",
      "offset": 28
    }
  ],
  "location": "personalisedGiftListStepDefs.user_clicks_on_add_to_list(String)"
});
formatter.result({
  "duration": 245165663,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 3547048985,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 2036164748,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 6432139063,
  "status": "passed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 1534836701,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.0.36\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: c616b16b88afa4cafde9f48613f903a6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getTagName(RemoteWebElement.java:128)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.Weddingshop.Test.Utils.selectByVisibleText(Utils.java:152)\r\n\tat PageObject.PlaceAnOrderPage.clickOnQuantityOfProduct(PlaceAnOrderPage.java:31)\r\n\tat com.Weddingshop.Test.personalisedGiftListStepDefs.user_selects_quantity_for_every_product(personalisedGiftListStepDefs.java:111)\r\n\tat ✽.And user selects quantity for every product(src/test/Resources/Features/personalisedgiftlist.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "personalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("!!!!!!....Scenario Failed....!!!!Please see attached screenshot for the error/issue");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1211120453,
  "status": "passed"
});
formatter.uri("src/test/Resources/Features/register.feature");
formatter.feature({
  "line": 2,
  "name": "Register to the website",
  "description": "",
  "id": "register-to-the-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 28212734635,
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
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 5817543,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "As a user I should be able to register successfully",
  "description": "",
  "id": "register-to-the-website;as-a-user-i-should-be-able-to-register-successfully",
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
  "location": "MyStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 343434564,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_clicks_on_Not_registered_yet()"
});
formatter.result({
  "duration": 5450847897,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_enters_all_the_details()"
});
formatter.result({
  "duration": 11060943599,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.userClicksOnSubmitButton()"
});
formatter.result({
  "duration": 7485093854,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_be_able_to_see_start_building_your_list_message()"
});
formatter.result({
  "duration": 76125617,
  "status": "passed"
});
formatter.after({
  "duration": 29147,
  "status": "passed"
});
formatter.uri("src/test/Resources/Features/searchproduct.feature");
formatter.feature({
  "line": 2,
  "name": "Use the website to find products So that user can build a personalised gift list As a customer with an upcoming wedding",
  "description": "       user want to be able to find products to my taste",
  "id": "use-the-website-to-find-products-so-that-user-can-build-a-personalised-gift-list-as-a-customer-with-an-upcoming-wedding",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 57950720224,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductStepdefs.user_am_on_the_homepage()"
});
formatter.result({
  "duration": 155685683,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Search for products by description and budget",
  "description": "",
  "id": "use-the-website-to-find-products-so-that-user-can-build-a-personalised-gift-list-as-a-customer-with-an-upcoming-wedding;search-for-products-by-description-and-budget",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user clicks on search icon",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters \u0027candles\u0027 in search form",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027candles and diffuser\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user navigates to candles and diffuser page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user selects £20-£39 price range",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should see products priced between £20-£39",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductStepdefs.user_clicks_on_search_icon()"
});
formatter.result({
  "duration": 149588161,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_enters_candles_in_search_form()"
});
formatter.result({
  "duration": 1071884078,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_clicks_on_candles_and_diffuser()"
});
formatter.result({
  "duration": 1366268759,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductStepdefs.user_navigates_to_candles_and_diffuser_page()"
});
formatter.result({
  "duration": 72208803,
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
  "duration": 3352831881,
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
  "duration": 8605516300,
  "status": "passed"
});
formatter.after({
  "duration": 56652,
  "status": "passed"
});
});