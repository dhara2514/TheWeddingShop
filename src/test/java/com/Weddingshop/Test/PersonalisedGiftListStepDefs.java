package com.Weddingshop.Test;

import PageObject.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PersonalisedGiftListStepDefs
{

    HomePage homePage = new HomePage();
    AccountLoginPage accountLoginPage = new AccountLoginPage();
    DashboardPage dashboardPage = new DashboardPage();
    HomeAndFurniturePage homeAndFurniturePage = new HomeAndFurniturePage();
    StoveTopKettlePage stoveTopKettlePage = new StoveTopKettlePage();
    KitchenPage kitchenPage = new KitchenPage();
    VasesPage vasesPage = new VasesPage();
    YourListPage yourListPage = new YourListPage();
    PlaceAnOrderPage placeAnOrderPage = new PlaceAnOrderPage();
    BasketPage basketPage = new BasketPage();

    @When("^user navigates to login page$")
    public void user_navigates_to_login_page()
    {
        accountLoginPage.verifyAccountLoginPageUrl();
    }

    @When("^user enters valid email address and password$")
    public void user_enters_valid_email_address_and_password()
    {
        accountLoginPage.inputEmailAddress();
        accountLoginPage.inputPassword();
    }

    @When("^user clicks on 'login'$")
    public void user_clicks_on_login()
    {
        accountLoginPage.clickOnLogin();
    }

    @When("^user navigates to dashboard page$")
    public void user_navigates_to_dashboard_page()
    {
        dashboardPage.verifyDashboardPage();
    }

    @When("^user clicks on product category \"([^\"]*)\"$")
    public void user_clicks_on_product_category(String productName)
    {
        if (productName.equalsIgnoreCase("stove top kettles")) {
            dashboardPage.clickOnKitchenCategoryFromDashboard();
            kitchenPage.verifyKitchenUrl();
            kitchenPage.clickOnProductCategoryFromKitchenPage(productName);
            } else if (productName.equalsIgnoreCase("vases")) {
            stoveTopKettlePage.clickOnHomeAndFurnitureCategory();
            homeAndFurniturePage.verifyHomeAndFurnitureUrl();
            homeAndFurniturePage.clickOnProductCategoryFromHomeAndFurniturePage(productName);
        }
    }

    @When("^user navigates to product category page \"([^\"]*)\"$")
    public void user_navigates_to_product_category_page(String productPage) {
        if (productPage.equalsIgnoreCase("stove top kettles")){
            stoveTopKettlePage.verifyStoveKettlePage(productPage);
        } else if (productPage.equalsIgnoreCase("vases")){
            vasesPage.verifyVasesPage(productPage);
        }
    }

    @When("^user selects product quantity \"([^\"]*)\"$")
    public void user_selects_product_quantity(String productQuantity) {
        if (productQuantity.equalsIgnoreCase("2 kettles")) {
            stoveTopKettlePage.selectStoveTopKettlesQuantity(productQuantity);
        }else if (productQuantity.equalsIgnoreCase("2 vases")) {
            vasesPage.selectVaseQuantity(productQuantity);
        }
    }

    @When("^user clicks on add to list \"([^\"]*)\"$")
    public void user_clicks_on_add_to_list(String productName) {
        if (productName.equalsIgnoreCase("traditional kettle")){
            stoveTopKettlePage.addStoveTopKettlesToList(productName);
        }else if (productName.equalsIgnoreCase("neptune vase")) {
            vasesPage.addVaseToList(productName);
        }
    }


    @When("^user clicks on 'Your List' under account link$")
    public void user_clicks_on_Your_List_under_account_link() {
        vasesPage.clickOnYourListOption();
    }

    @When("^user verifies products added to list$")
    public void user_verifies_products_added_to_list()  {
        yourListPage.verifyYourListPageUrl();
        yourListPage.verifyProductsInList();

    }

    @When("^user clicks on 'place an order' under account link$")
    public void user_clicks_on_place_an_order_under_account_link()
    {
        yourListPage.clickOnScrollToTopAndSearchIcon();
        yourListPage.clickOnPlaceAnOrderFromAccountLink();
    }

    @When("^user selects quantity for every product$")
    public void user_selects_quantity_for_every_product()
    {
        placeAnOrderPage.verifyPlaceAnOrderPage();
        placeAnOrderPage.clickOnQuantityOfProduct();

    }

    @When("^user clicks on 'add to order' for every product$")
    public void user_clicks_on_add_to_order_for_every_product()

    {
        placeAnOrderPage.clickOnAddToOrder();
    }

    @When("^user clicks on 'view basket'$")
    public void user_clicks_on_view_basket()
    {
        placeAnOrderPage.clickOnViewBasketButton();
    }

    @Then("^user verifies products added to the 'basket'$")
    public void userVerifiesProductsAddedToTheBasket()
    {
        basketPage.verifyBasketPage();
        basketPage.verifyProductsInBasket();
        basketPage.verifyQuantityOfProductsInBasket();
        basketPage.verifyPriceOfEachProductInBasket();
        basketPage.verifySubTotalOfEachProductInBasket();
        basketPage.verifyTotalAmountOfBasket();
        basketPage.verifyBalanceRemainingToPay();
    }

}




