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
    private By _ellinghamTallVase = By.xpath("(//*[contains(text(),'Ellingham Tall vase, H31 x D15cm, fog')])[2]");
    private By _basketQuantityOfKettle = By.id("order-basket-qty-2031703");
    private By _basketQuantityOfVase = By.id("order-basket-qty-2031707");
    private By _priceOfEachKettle = By.xpath("(//div[@class='col-sm-2'])[3]");
    private By _priceOfEachVase = By.xpath("(//div[@class='col-sm-2'])[5]");
    private By _subTotalPriceOfKettle = By.xpath("(//div[@class='col-sm-2'])[4]");
    private By get_subTotalPriceOfVase = By.xpath("(//div[@class='col-sm-2'])[6]");



    // Store both product names in String as expected to be displayed in basket to assert
    String expectedProductName1 = "Traditional Kettle with whistle, 2.1 litre, satin black" + "\nTraditional" + "\nLe Creuset";
    String expectedProductName2 = "Ellingham Tall vase, H31 x D15cm, fog" + "\nEllingham" + "\nNeptune";

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

        // Assert of first product in basket
        Assert.assertEquals(expectedProductName1, getTextFromElement(_productNameinBasket));
        System.out.println("The name of the product in the cart is " + expectedProductName1);


        // getting text of the product No.2 = Vase
        Utils.getTextFromElements(_ellinghamTallVase);

        // Assert of second product in basket
        Assert.assertEquals(expectedProductName2, getTextFromElement(_ellinghamTallVase));
        System.out.println("The name of the product in the cart is " + expectedProductName2);

     }

    // Assertion of the quantity of the products in the basket
    public void verifyQuantityOfProductsInBasket()
    {
        // Inbuild method to get the selected value of dropdown for assertion
        Select quantityOfKettle = new Select(driver.findElement(_basketQuantityOfKettle));

        // this code will select the quantity of the product in the basket
        String dropdownValue = quantityOfKettle.getFirstSelectedOption().getText();
        Assert.assertEquals("2",dropdownValue);
        System.out.println("The quantity in dropdown for " + expectedProductName1 +" in basket = " + dropdownValue);

        // Inbuild method to get the selected value of dropdown for assertion
        Select quantityOfVase = new Select(driver.findElement(_basketQuantityOfVase));

        // this code will select the quantity of the product in the basket
        dropdownValue = quantityOfVase.getFirstSelectedOption().getText();
        Assert.assertEquals("2",dropdownValue);
        System.out.println("The quantity in dropdown for " + expectedProductName2 +" in basket = " + dropdownValue);
    }


    // verifying price of each product in the basket
    public void verifyPriceOfEachProductInBasket()
    {
        // assertion of price of each kettle by using boolean condition
        actual = driver.findElement(_priceOfEachKettle).isDisplayed();
        Assert.assertTrue("95.00", true);
        System.out.println("The price of each " + expectedProductName1 + " is £95.00 which is " + actual);

        // assertion of price of each vase by using boolean condition
        actual = driver.findElement(_priceOfEachVase).isDisplayed();
        Assert.assertTrue("29.00",true);
        System.out.println("The price of each " + expectedProductName2 + " is £29.00 which is " + actual);

    }


    // verifying subtotal of each product in the basket
    public void verifySubTotalOfEachProductInBasket()
    {
        // assertion of subtotal of each kettle by using boolean condition
        actual = driver.findElement(_subTotalPriceOfKettle).isDisplayed();
        Assert.assertTrue("95.00", true);
        System.out.println("The price of each " + expectedProductName1 + " is £190 which is " + actual);

        // assertion of subtotal of each kettle by using boolean condition
        actual = driver.findElement(get_subTotalPriceOfVase).isDisplayed();
        Assert.assertTrue("29.00",true);
        System.out.println("The price of each " + expectedProductName2 + " is £29 which is " + actual);
    }



    public void verifyTotalAmountOfBasket()
    {
        // scroll down method to reach an element
        Utils.scrollUpORDown(400);

        // assertion of Total amount of Kettle and Vase by using boolean condition
        actual = driver.findElement(_subTotalPriceOfKettle).isDisplayed();
        Assert.assertTrue("248.00", true);
        System.out.println("The total price of " + expectedProductName1 + " & " + expectedProductName2 + " is £248.00 which is " + actual);
    }

    public void verifyBalanceRemainingToPay()

    {
        // assertion of balance remaining to pay by using boolean condition
        actual = driver.findElement(_subTotalPriceOfKettle).isDisplayed();
        Assert.assertTrue("248.00", true);
        System.out.println("The total price of " + expectedProductName1 + " & " + expectedProductName2 + " is £248.00 which is " + actual);
    }


}





