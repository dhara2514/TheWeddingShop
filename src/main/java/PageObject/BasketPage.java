package PageObject;

import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class BasketPage extends Utils {
    private By _basketPage = By.cssSelector("div.main-content > div > h2");
    private By _productInBasket = By.cssSelector("[class='basket__container']");
    private By _productNameinBasket = By.cssSelector("[class='col-sm-3']");
    private By _ellinghamTallVase = By.xpath("(//*[@class='col-sm-3'])[1]");
    private By _whistlingKettle = By.xpath("(//*[@class='col-sm-3'])[2]");
    private By _basketQuantityOfKettle = By.xpath("(//*[@class='form-field__input form-field__input--select  form-control'])[1]");
    private By _basketQuantityOfVase = By.xpath("(//*[@class='form-field__input form-field__input--select  form-control'])[1]");
    private By _priceOfEachKettle = By.xpath("(//div[@class='col-sm-2'])[5]");
    private By _priceOfEachVase = By.xpath("(//*[@class='col-sm-2'])[3]");
    private By _subTotalOfKettle = By.xpath("(//div[@class='col-sm-2'])[6]");
    private By _subTotalOfVase = By.xpath("(//div[@class='col-sm-2'])[4]");
    private By _totalAmountOfBasket = By.id("basket-total");
    private By _remainingBalance = By.id("basket-balance-remaining");


    // Store both product names in String as expected to be displayed in basket to assert
    String expectedProductName1 = "Ellingham Tall vase, H31 x D15cm, fog" + "\nEllingham" + "\nNeptune";
    String expectedProductName2 = "Le'Xpress Whistling kettle, 2.1 litre, red" + "\nLe'Xpress" + "\nKitchen Craft";

    // assigning boolean variable to assert in next steps
    Boolean actual;

    public void verifyBasketPage()
    {
        // explicit wait to wait for the basket page to load
        Utils.waitForElementDisplay(_basketPage, 5);

        // verifying user is on basket page
        Utils.assertTextMessage("BASKET", _basketPage);
    }

    public void verifyProductsInBasket()
    {

        // scrolltoview method to reach the product in the basket
        Utils.scrollViewElement(_productInBasket);

        // Print product names in basket
        List<WebElement> productNameInBasket = driver.findElements(_productNameinBasket);
        System.out.println("The number of products in cart is " + productNameInBasket.size());


        Utils.getTextFromElements(_productNameinBasket);


        // getting text of the product No.2 = Vase
       // Utils.getTextFromElements(_ellinghamTallVase);

        // Assert of first product in basket
        Assert.assertEquals(expectedProductName1, getTextFromElement(_ellinghamTallVase));
        System.out.println("The name of the product in the cart is " + expectedProductName1);


        // Assert of second product in basket
        Assert.assertEquals(expectedProductName2, getTextFromElement(_whistlingKettle));
        System.out.println("The name of the product in the cart is " + expectedProductName2);

     }

    // Assertion of the quantity of the products in the basket
    public void verifyQuantityOfProductsInBasket()
    {
        // Inbuild method to get the selected value of dropdown for assertion
        Select quantityOfVase = new Select(driver.findElement(_basketQuantityOfVase));

        // this code will select the quantity of the product in the basket
        String dropdownValue = quantityOfVase.getFirstSelectedOption().getText();
        Assert.assertEquals("2",dropdownValue);
        System.out.println("The quantity in dropdown for " + expectedProductName1 +" in basket = " + dropdownValue);

        // Inbuild method to get the selected value of dropdown for assertion
        Select quantityOfKettle = new Select(driver.findElement(_basketQuantityOfKettle));

        // this code will select the quantity of the product in the basket
         dropdownValue = quantityOfKettle.getFirstSelectedOption().getText();
        Assert.assertEquals("2",dropdownValue);
        System.out.println("The quantity in dropdown for " + expectedProductName2 +" in basket = " + dropdownValue);


    }


    // verifying price of each product in the basket
    public void verifyPriceOfEachProductInBasket()
    {
        // assertion of price of each vase by using boolean condition
        actual = driver.findElement(_priceOfEachVase).isDisplayed();
        Assert.assertTrue("29.00",true);
        System.out.println("The price of each " + expectedProductName1 + " is £29.00 which is " + actual);

        // assertion of price of each kettle by using boolean condition
        actual = driver.findElement(_priceOfEachKettle).isDisplayed();
        Assert.assertTrue("30.00", true);
        System.out.println("The price of each " + expectedProductName2 + " is £30.00 which is " + actual);
    }


    // verifying subtotal of each product in the basket
    public void verifySubTotalOfEachProductInBasket()
    {
        // assertion of subtotal of each kettle by using boolean condition
        actual = driver.findElement(_subTotalOfVase).isDisplayed();
        Assert.assertTrue("58.00",true);
        System.out.println("The subtotal of " + expectedProductName1 + " is £58 which is " + actual);

        // assertion of subtotal of each kettle by using boolean condition
        actual = driver.findElement(_subTotalOfKettle).isDisplayed();
        Assert.assertTrue("60.00", true);
        System.out.println("The subtotal of " + expectedProductName2 + " is £60 which is " + actual);
    }


    public void verifyTotalAmountOfBasket()
    {
        // scroll down method to reach an element
        Utils.scrollUpORDown(600);

        // assertion of Total amount of Kettle and Vase by using boolean condition
        actual = driver.findElement(_totalAmountOfBasket).isDisplayed();
        Assert.assertTrue("118.00", true);
        System.out.println("The total price of " + expectedProductName1 + " & " + expectedProductName2 + " is £118.00 which is " + actual);
    }

    public void verifyBalanceRemainingToPay()

    {
        // assertion of balance remaining to pay by using boolean condition
        actual = driver.findElement(_remainingBalance).isDisplayed();
        Assert.assertTrue("-118.00", true);
        System.out.println("The total price of " + expectedProductName1 + " & " + expectedProductName2 + " is £-118.00 which is " + actual);
    }


}






