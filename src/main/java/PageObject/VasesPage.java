package PageObject;

import com.Weddingshop.Test.Utils;
import org.openqa.selenium.By;

public class VasesPage extends Utils {

    private By _vasesHeading = By.cssSelector("header > h2");
    private By _quantityOfVases = By.id("quantity-368475");
    private By _addVaseToList = By.id("btn-add-to-list-368475");
    private By _yourListBtn = By.id("btn-your-list");
    private By _priceRangeLocator = By.cssSelector("#product-filter-items-prices > li:nth-child(1) > label");



    public void verifyVasesPage(String productPage)
    {
        /* if-else blocks to get 'product page' from scenario outline/examples
        to execute logic & also verifying that user is vase page
         */
        if (productPage.equalsIgnoreCase("vases page")) {
            Utils.waitForElementDisplay(_vasesHeading, 5);

            //verifying  vase heading
            Utils.assertTextMessage("Vases", _vasesHeading);
        }
    }

    public void selectVaseQuantity(String productQuantity)
    {
         /* if-else blocks to get product 'quantity' from scenario outline/examples
        to execute logic
         */
        if (productQuantity.equalsIgnoreCase("2 vases")) {
            implicitWait(3);
            Utils.scrollUpORDown(200);
            Utils.waitForElementDisplay(_addVaseToList, 5);

            // dropdown method to select value from dropdown
            Utils.selectByVisibleText(_quantityOfVases, "2");
        }
    }

    public void addVaseToList(String productName)
    {
         /* if-else blocks to get 'add to list' from scenario outline/examples
        to execute logic
         */
        if (productName.equalsIgnoreCase("neptune vase"))
        {
            // user clicks on add to list
            Utils.clickElementBy(_addVaseToList);
        }
    }

    public void clickOnYourListOption()

    {
        // explicit waiti to wait for price range locator to be visible
        Utils.waitForElementDisplay(_priceRangeLocator,5);

        // user clicks on price range
        Utils.clickElementBy(_priceRangeLocator);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // scroll to view method to reach your list button
        Utils.scrollViewElement(_yourListBtn);

        // explicit wait to wait for your list button to be visible
        Utils.waitForElementDisplay(_yourListBtn,5);

        // user clicks on your list button
        Utils.clickElementBy(_yourListBtn);
    }

}
