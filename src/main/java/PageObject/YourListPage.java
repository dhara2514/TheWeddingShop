package PageObject;

import com.Weddingshop.Test.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;

public class YourListPage extends Utils {
     private By _productsInList = By.cssSelector("[class='product-grid__items__item']");
     private By _giftVoucher = By.id("product-title-1");
     private By _accountLink = By.xpath("(//*[contains(text(),'Account')])[1]");
     private By _placeAnOrderLink = By.id("link-manage-place-an-order");
     private By _scrollToTop = By.cssSelector("[class='scroll-to-top']");


    public void verifyYourListPageUrl()
    {
        Utils.implicitWait(5);

        // verifying user is your list page
        Utils.assertURL("https://www.weddingshop.com/manage/your-list");
    }

    public void verifyProductsInList()
    {
        Utils.scrollViewElement(_giftVoucher);

        // list method to get the size of products in list
        List<WebElement>productsInLists = driver.findElements(_productsInList);
        System.out.println("The number of products in list is " + productsInLists.size());

        // List method to get the details of the products in list
        java.util.List<WebElement> productsInList = driver.findElements(_productsInList);

        for (int i = 0; i<productsInList.size(); i=i+1)
        {
            System.out.println(productsInList.get(i).getText());
        }

        Utils.waitForElementDisplay(_productsInList,5);
    }

    public void clickOnScrollToTopAndSearchIcon()
    {
        // explicit wait to wait for the only available option to be visible
        Utils.waitForElementDisplay(_scrollToTop,5);

        // user clicks on scroll to top
        Utils.clickElementBy(_scrollToTop);

        // Thread.sleep as the test is flaky here and does not hover on account link
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // click on search icon as this enables the step to hover on account link
        driver.findElement(By.id("icon-search")).click();
    }

    public void clickOnPlaceAnOrderFromAccountLink() {
        // explicit wait for account link to display
        Utils.waitForElementDisplay(_accountLink,5);

        // using action class - hover method to hover from account link to place an order
        Utils.hoverAndClickOnElement(_accountLink, _placeAnOrderLink);

    }
}

