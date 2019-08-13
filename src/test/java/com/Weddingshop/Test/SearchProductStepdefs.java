package com.Weddingshop.Test;

import PageObject.CandlesAndDiffusersPage;
import PageObject.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.text.ParseException;

public class SearchProductStepdefs
{
    HomePage homePage = new HomePage();
    CandlesAndDiffusersPage candlesAndDiffusersPage = new CandlesAndDiffusersPage();


    @Given("^user is on the homepage$")
    public void user_is_on_the_homepage()
    {
        homePage.verifyHomePageUrl();
    }

    @When("^user clicks on search icon$")
    public void user_clicks_on_search_icon()
    {
        homePage.clickSearchButton();
    }

    @When("^user enters 'candles' in search form$")
    public void user_enters_candles_in_search_form()
    {
     homePage.enterProductNameInSearchField();
    }

    @When("^user clicks on 'candles and diffuser'$")
    public void user_clicks_on_candles_and_diffuser()
    {
      homePage.clickOnCandlesAndDiffuser();
    }

    @When("^user navigates to candles and diffuser page$")
    public void user_navigates_to_candles_and_diffuser_page()
    {
        candlesAndDiffusersPage.verifyCandlesAndDiffuserUrl();
    }

    @When("^user selects £(\\d+)-£(\\d+) price range$")
    public void user_selects_£_£_price_range(int arg1, int arg2)
    {
        candlesAndDiffusersPage.selectPriceRange20to39();
    }

    @Then("^user should see products priced between £(\\d+)-£(\\d+)$")
    public void user_should_see_products_priced_between_£_£(int arg1, int arg2) throws ParseException {
        candlesAndDiffusersPage.assertProductPrice();
    }
}
