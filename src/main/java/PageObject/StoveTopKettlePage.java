package PageObject;

import com.Weddingshop.Test.Utils;
import org.openqa.selenium.By;

import javax.rmi.CORBA.Util;

public class StoveTopKettlePage extends Utils
{
    private By _homeAndFurniture = By.cssSelector("#main-dropdown-menu-3");
    private By _stoveTopKettleHeading = By.cssSelector(" div > div.category__products__screen > header > h2");
    private By _quantityOfKettle = By.id("quantity-85544");
    private By _addTraditionalKettleToList = By.id("btn-add-to-list-85544");


    public void verifyStoveKettlePage(String productPage)
    {
        /* if-else blocks to get product category form scenario outline/examples
        to execute logic
         */
        if (productPage.equalsIgnoreCase("stove top kettles")) {
            Utils.waitForElementDisplay(_stoveTopKettleHeading, 5);
            Utils.assertTextMessage("Stove Top Kettles", _stoveTopKettleHeading);
        }
    }

    public void clickOnHomeAndFurnitureCategory()
    {
        Utils.clickElementBy(_homeAndFurniture);
    }

    public void selectStoveTopKettlesQuantity(String productQuantity)

    {
         /* if-else blocks to get product 'quantity' from scenario outline/examples
        to execute logic
         */
        if (productQuantity.equalsIgnoreCase("2 kettles")) {
            implicitWait(3);
            Utils.scrollUpORDown(200);
            Utils.waitForElementDisplay(_addTraditionalKettleToList, 5);

            // scroll down method to select quantity of kettle
            Utils.selectByVisibleText(_quantityOfKettle, "2");
        }
    }

    public void addStoveTopKettlesToList(String productName)
    {
        /* if-else blocks to get 'add to list' from scenario outline/examples
        to execute logic
         */
        if (productName.equalsIgnoreCase("traditional kettle"))
        {
            // user clicks on add to list button
            Utils.clickElementBy(_addTraditionalKettleToList);
        }
    }
}
