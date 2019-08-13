package PageObject;

import com.Weddingshop.Test.LoadProp;
import com.Weddingshop.Test.Utils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends Utils
{
    LoadProp loadProp = new LoadProp();

    private By _loginButton = By.id("btn-nav-login");
    private By _searchButton = By.id("icon-nav-search");
    private By _searchForm = By.cssSelector("[class='search-form']");
    private By _searchProduct = By.id("search-query");
    private By _candlesAndDiffusers = By.cssSelector("[href*='candles-diffusers']");

    // creating Webdriver object to use the object in next steps
    WebDriverWait wait = new WebDriverWait(driver, 5);

    public void verifyHomePageUrl()
    {
        // verify user is on homepage
        String URL = driver.getCurrentUrl();
        Assert.assertEquals(URL,"https://www.weddingshop.com/");
        System.out.println("User is on Homepage");
    }

    public void clickLoginButton()
    {
        // user to clicks on login button
        driver.findElement(_loginButton).click();
    }

    public void clickSearchButton()
    {
        // user clicks on search button
        driver.findElement(_searchButton).click();
    }

    public void enterProductNameInSearchField()
    {
        // explicit wait for visibility of search form
        wait.until(ExpectedConditions.visibilityOfElementLocated(_searchForm));

        // user enters product name
        driver.findElement(_searchProduct).sendKeys("candles");

        // press esc key to see search result
        driver.findElement(By.cssSelector("body")).sendKeys(Keys.ESCAPE);

    }

    public void clickOnCandlesAndDiffuser()
    {
        // explicit wait for visibility of candles and diffuser
        wait.until(ExpectedConditions.visibilityOfElementLocated(_candlesAndDiffusers));

        // user clicks on candles and diffuser
        driver.findElement(_candlesAndDiffusers).click();
    }

}
