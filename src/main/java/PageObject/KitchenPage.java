package PageObject;

import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;

public class KitchenPage extends Utils
{
    private By _stoveTopKettle = By.cssSelector("#link-kitchen-cookware-stove-top-kettles");
    private By _kitchenHeading = By.cssSelector("h3.child-cate-title");


    public void verifyKitchenUrl()
    {
       Utils.waitForElementDisplay(_kitchenHeading,5);
       Utils.assertURL("https://www.weddingshop.com/category/kitchen");
    }
    public void clickOnProductCategoryFromKitchenPage(String productName) {

        /* if-else blocks to get product category from scenario outline/examples
        to execute logic
         */
        if (productName.equalsIgnoreCase("stove top kettles")){
            Utils.scrollUpORDown(200);
            Utils.waitForElementDisplay(_stoveTopKettle,5);
            Utils.clickElementBy(_stoveTopKettle);
        } else {
            System.out.println("Please enter a valid product category");
        }
    }
}
