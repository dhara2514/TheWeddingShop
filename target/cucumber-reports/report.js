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
      "name": "@sanity"
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
        "traditional kettle"
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
  "duration": 17685709395,
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
  "duration": 285796919,
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
      "name": "@sanity"
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
  "location": "RegistrationStepDefs.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 3362948436,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 48594200,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "duration": 849857219,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "duration": 228489336,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "duration": 5832538011,
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
  "duration": 2828773911,
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
  "duration": 122747,
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
  "duration": 3943555750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "traditional kettle",
      "offset": 28
    }
  ],
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_list(String)"
});
formatter.result({
  "duration": 199639723,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "duration": 3654336289,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "duration": 2498975741,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "duration": 6471587187,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "duration": 2041289326,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "duration": 1149471983,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "duration": 536419684,
  "status": "passed"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "duration": 2594138203,
  "status": "passed"
});
formatter.after({
  "duration": 1352420945,
  "status": "passed"
});
formatter.before({
  "duration": 9673295132,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"No target with given id\"}\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.0.36\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: 4d6623e6e6ba5ac3fd9fc7c3ddbb4b1f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.fullscreen(RemoteWebDriver.java:841)\r\n\tat com.Weddingshop.Test.BrowserSelector.setUpBrowser(BrowserSelector.java:23)\r\n\tat com.Weddingshop.Test.Hooks.openBrowser(Hooks.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
      "name": "@sanity"
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
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_enters_valid_email_address_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_navigates_to_dashboard_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_Your_List_under_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_verifies_products_added_to_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_place_an_order_under_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_selects_quantity_for_every_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_add_to_order_for_every_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.user_clicks_on_view_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PersonalisedGiftListStepDefs.userVerifiesProductsAddedToTheBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6083912036,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.0.36\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: 4d6623e6e6ba5ac3fd9fc7c3ddbb4b1f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.Weddingshop.Test.Utils.screenShotCucumber(Utils.java:335)\r\n\tat com.Weddingshop.Test.Hooks.closeBrowser(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:330)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:78)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:328)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:65)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:292)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:305)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:412)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
});