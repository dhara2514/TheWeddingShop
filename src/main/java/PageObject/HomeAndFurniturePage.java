package PageObject;

import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;

public class HomeAndFurniturePage extends Utils
{

    private By _vases = By.id("link-homeware-furniture-home-accessories-vases-urns");
    private By _homeAndFurnitureHeading = By.cssSelector("h3.child-cate-title");


    public void verifyHomeAndFurnitureUrl()
    {
        // using explicit wait to wait for the home and furniture heading to be visible
        Utils.waitForElementDisplay(_homeAndFurnitureHeading,5);

        // verifying user is on home and furniture page
        Utils.assertURL("https://www.weddingshop.com/category/homeware-furniture");
    }

    public void clickOnProductCategoryFromHomeAndFurniturePage(String productName)
    {

        /* if-else blocks to get product category form scenario outline/examples
        to execute logic
         */
        if (productName.equalsIgnoreCase("vases")){
            Utils.waitForElementDisplay(_vases,5);
            Utils.clickElementBy(_vases);
        } else {
            System.out.println("Please enter a valid product category");
        }
    }
    }


