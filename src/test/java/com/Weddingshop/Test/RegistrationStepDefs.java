package com.Weddingshop.Test;

import PageObject.AccountLoginPage;
import PageObject.HomePage;
import PageObject.RegisterPage;
import PageObject.ThankYouPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrationStepDefs


{
    HomePage homePage = new HomePage();
    AccountLoginPage accountLoginPage = new AccountLoginPage();
    RegisterPage registerPage = new RegisterPage();
    ThankYouPage thankYouPage = new ThankYouPage();


    @Given("^user is on home page$")
    public void user_is_on_home_page()
    {
        homePage.verifyHomePageUrl();
    }

    @When("^user clicks on login button$")
    public void user_clicks_on_login_button()
    {
        homePage.clickLoginButton();

    }

    @And("^user clicks on 'Not registered yet'$")
    public void user_clicks_on_Not_registered_yet()
    {
       accountLoginPage.verifyAccountLoginPageUrl();
       accountLoginPage.clickOnNotRegisteredYetButton();

    }

    @And("^user enters all the details$")
    public void user_enters_all_the_details()
    {
        registerPage.verifyRegisterPageUrl();
        registerPage.enterTitleInYourDeatils();
        registerPage.enterYourFirstName();
        registerPage.enterYourLastName();
        registerPage.clickWhereDidYouHearAboutUs();
        registerPage.enterPartnersTitle();
        registerPage.enterPartnersFirstName();
        registerPage.enterPartnersLastName();
        registerPage.enterYourPostcode();
        registerPage.enterContactNumber();
        registerPage.clickToselectWeddingDate();
        registerPage.enterGuestsNumber();
        registerPage.enterEmailAddress();
        registerPage.enterPassword();
        registerPage.enterConfirmPassword();

    }

    @And("^user clicks on submit button$")
    public void userClicksOnSubmitButton()
    {
        registerPage.clickSubmitButton();
    }

    @Then("^user should be able to see 'start building your list' message$")
    public void user_should_be_able_to_see_start_building_your_list_message()
    {

        thankYouPage.assertRegisterationMessage();

    }


}
