package PageObject;

import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.text.NumberFormat;
import java.text.ParseException;
import java.util.List;

public class CandlesAndDiffusersPage extends Utils {
    private By _selectPriceRange = By.cssSelector("#product-filter-items-prices > li:nth-child(2) > label > input");
    private By _productPrice = By.cssSelector("[class='product__price']>span");
    private By _pagination = By.id("search-summary-pagination");
    private By _pageTwoLink = By.xpath("(//*[@class='page-link'])[7]");

    // creating variable of 'webdriver wait' to use explicit wait in next steps
    WebDriverWait wait = new WebDriverWait(driver, 5);

    public void verifyCandlesAndDiffuserUrl() {
        // verifying user is on Candles and DiffuserPage
        String URL = driver.getCurrentUrl();
        Assert.assertEquals("https://tws-uk-qa.azurewebsites.net/category/homeware-furniture-home-accessories-candles-diffusers", URL);
    }

    public void selectPriceRange20to39() {

        // using explicit wait to wait for price range to be visible
        wait.until(ExpectedConditions.visibilityOfElementLocated(_selectPriceRange));

        // user clicks on price range £20-£39
        driver.findElement(_selectPriceRange).click();
    }

    public void assertProductPrice() throws ParseException {
        // explicit wait to wait for product price
        wait.until(ExpectedConditions.visibilityOfElementLocated(_productPrice));


        // scroll down to get visibility for every element
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,5000)", "");

        // Check the number of pages for agination
        List <WebElement> pagination = driver.findElements(_pagination);
        System.out.println("Total number of pages are " + pagination.size());


        /* First for loop to get pagination so that once the products are
        asserted in the next loop than this loop will look for next page
        and click on page 2
         */
        for(int i=0; i<pagination .size(); i++){
            // common element for product price
            java.util.List<WebElement> price = driver.findElements(_productPrice);

            // loop to get product price and assert that price is in price range searched
                for (int j = 0; j < price.size(); j = j + 1) {

                    // get the text of the product price eg:£20.00
                    String productPrice = price.get(j).getText();

                    // Number format inbuilt class in Java to  split currency sign and number
                    NumberFormat priceFormat = NumberFormat.getCurrencyInstance();

                    // parse function which passes the format of price without decimal and pound sign
                    Number number = priceFormat.parse(productPrice);
                    System.out.println(number.toString());

                    // Assert product price is greater than or equal to £20
                    Assert.assertTrue(number.intValue() >= 20.00);
                    System.out.println("This product price is greater then £20");

                    // Assert product price is less than or equal to £39
                    Assert.assertTrue(number.intValue() <= 39.00);
                    System.out.println("This product price is less then £39");
                }
                    // if block to paginate and go to next page
                    if(pagination .size()>0){
                    System.out.println("pagination exists");

                    // Scroll to page 2 link at the bottom of the page
                    WebElement element = driver.findElement(_pageTwoLink);
                    jse.executeScript("arguments[0].scrollIntoView(true);", element);

                    // scroll up as the above sctoll to view method scrolls right at the bottom of page
                    jse.executeScript("window.scrollBy(0,-500)");

                Boolean nextButton = driver.findElement(_pageTwoLink).isEnabled();
                if (nextButton) {
                    // click on page 2
                    driver.findElement(_pageTwoLink).click();

                    // implicit wait to wait until all the elements are loaded
                    implicitWait(5);
                }
                else {
                    System.out.println(nextButton + " is not clickable");
                }
            }
         else {
            System.out.println("pagination does not exists");
        }
      }
    }
}


