package PageObject;

import com.Weddingshop.Test.Utils;
import org.openqa.selenium.By;

import javax.rmi.CORBA.Util;

public class StoveTopKettlePage extends Utils
{
    private By _stoveTopKettleHeading = By.cssSelector(" div > div.category__products__screen > header > h2");
    private By _quantityOfKettle = By.xpath("(//*[@class='form-field__input form-field__input--select  form-control'])[3]");
    private By _addWhistlingKettleToList = By.xpath("(//*[@class='button product__button product__button--inline button--light-orange'])[1]");
    private By _scrollUpButton = By.cssSelector("[class='scroll-to-top']");
    private By _yourListButton = By.id("btn-your-list");
    public void verifyStoveKettlePage(String productPage)
    {
        /* if-else blocks to get product category form scenario outline/examples
        to execute logic
         */
        if (productPage.equalsIgnoreCase("stove top kettles")) {
            Utils.waitForElementDisplay(_stoveTopKettleHeading, 5);
            Utils.assertTextMessage("Stove Top Kettles", _stoveTopKettleHeading);
        }

        Utils.scrollViewElement(_quantityOfKettle);
    }



    public void selectStoveTopKettlesQuantity(String productQuantity)

    {     //Utils.clickElementBy(_scrollUpButton);
          //Utils.scrollUpORDown(300);


         /* if-else blocks to get product 'quantity' from scenario outline/examples
        to execute logic
         */
        if (productQuantity.equalsIgnoreCase("2 kettles")) {
//            implicitWait(3);

            Utils.waitForElementDisplay(_quantityOfKettle, 5);

            // scroll down method to select quantity of kettle
            Utils.selectByVisibleText(_quantityOfKettle, "2");
        }
    }

    public void addStoveTopKettlesToList(String productName) {
        /* if-else blocks to get 'add to list' from scenario outline/examples
        to execute logic
         */
        if (productName.equalsIgnoreCase("Le'Xpress Whistling")) {
            Utils.waitForElementDisplay(_addWhistlingKettleToList, 5);

            // user clicks on add to list button
            Utils.clickElementBy(_addWhistlingKettleToList);

        }

        Utils.waitForElementDisplay(_scrollUpButton,5);
        Utils.clickElementBy(_scrollUpButton);
        Utils.waitForElementDisplay(_yourListButton,3);
        Utils.clickElementBy(_yourListButton);

    }



}
